// Copyright 2020, Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using Google.Protobuf;
using Google.Protobuf.Reflection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace Google.Events.Tools.GenerateRegistry
{
    /// <summary>
    /// Tool to update the event registry in the top-level README.md file.
    /// </summary>
    internal static class Program
    {
        /// <summary>
        /// The field number of the cloud_event_type field in google/events/cloudevent.proto.
        /// This is hard-coded to avoid the relatively longwinded code required to find it within the
        /// descriptor file.
        /// </summary>
        private const int CloudEventTypeExtensionField = 11716486;

        /// <summary>
        /// The field number of the cloud_event_product field in google/events/cloudevent.proto.
        /// This is hard-coded to avoid the relatively longwinded code required to find it within the
        /// descriptor file.
        /// </summary>
        private const int CloudEventProductExtensionField = 11716487;

        /// <summary>
        /// The Markdown header for the table at the start of the event registry. This string is used
        /// to find the table within the README.
        /// </summary>
        private const string TableHeader = "|Product|Package|Event types|Data messages|";

        /// <summary>
        /// The line between the table header and the table content. This is the same number of | characters
        /// as the table header (to represent the same number of columns) but with the text of each header
        /// replaced with "-". If the header has three columns, this would be "|-|-|-|".
        /// </summary>
        private static readonly string TableDelimiter = Regex.Replace(TableHeader, "[^|]+", "-");

        private static int Main(string[] args)
        {
            // Validate command line arguments (just by count) and give help if we don't have the right number.
            if (args.Length != 2)
            {
                Console.WriteLine($"Required arguments: <descriptor set filename> <path to README.md>");
                return 1;
            }
            string descriptorSetFile = args[0];
            string pathToReadme = args[1];

            // Load the proto descriptor set file (effectively a representation of all the protos)
            // and convert it into rows ready to be written to the table.
            var newTableRows = CreateTableRows(descriptorSetFile)
                .OrderBy(row => row.Package, StringComparer.Ordinal)
                .Select(row => row.ToMarkdown());

            // Load the README.md file and work out the (0-based) line number of the header.
            var existingReadmeLines = File.ReadAllLines(pathToReadme).ToList();
            var headerLineNumber = existingReadmeLines.IndexOf(TableHeader);
            if (headerLineNumber == -1)
            {
                Console.WriteLine($"No table header line in '{pathToReadme}'");
                return 1;
            }

            // Find the lines before the table in the existing README
            var existingLinesBeforeTable = existingReadmeLines.Take(headerLineNumber);

            // The lines in the table Markdown before the data rows.
            var newTableHeaderLines = new[] { TableHeader, TableDelimiter };

            // Find the lines after the table in the existing README, by skipping
            // as far as the table, then skipping every line that starts with "|"
            var existingLinesAfterTable = existingReadmeLines
                .Skip(headerLineNumber)
                .SkipWhile(line => line.StartsWith("|"));

            // Work out the lines in the new README file.
            var newReadmeLines = existingLinesBeforeTable
                .Concat(newTableHeaderLines)
                .Concat(newTableRows)
                .Concat(existingLinesAfterTable);

            File.WriteAllLines(pathToReadme, newReadmeLines);
            return 0;
        }

        static IEnumerable<TableRow> CreateTableRows(string descriptorFile)
        {
            // We need to load the descriptor file with an extension registry containing the cloud_event_type extension.
            var typeFieldCodec = FieldCodec.ForString(WireFormat.MakeTag(CloudEventTypeExtensionField, WireFormat.WireType.LengthDelimited), "");
            var productFieldCodec = FieldCodec.ForString(WireFormat.MakeTag(CloudEventTypeExtensionField, WireFormat.WireType.LengthDelimited), "");
            var eventTypeExtension = new Extension<MessageOptions, string>(CloudEventTypeExtensionField, typeFieldCodec);
            var productExtension = new Extension<Google.Protobuf.Reflection.FileOptions, string>(CloudEventProductExtensionField, productFieldCodec);
            var extensionRegistry = new ExtensionRegistry { eventTypeExtension, productExtension };

            var bytes = File.ReadAllBytes(descriptorFile);
            var descriptorSet = FileDescriptorSet.Parser.WithExtensionRegistry(extensionRegistry).ParseFrom(bytes);

            // For every file in the descriptor set, we check for messages with the cloud_event_type extension.
            // We gather all the 
            foreach (var protoFile in descriptorSet.File)
            {
                // We currently assume there's only a single proto file per package that has cloud_event_type extensions,
                // conventionally events.proto. If that changes, we'll end up with multiple rows in the event
                // registry for a single package, one per file - at which point we'd need to keep a dictionary of
                // rows based on the package.
                var package = protoFile.Package;

                var product = protoFile.Options?.GetExtension(productExtension);

                // Speculatively create a row in which to store any event types and data message names we find.
                var row = new TableRow(package, product);
                foreach (var message in protoFile.MessageType)
                {
                    // We only care about messages that have the cloud_event_type extension.
                    var eventType = message.Options?.GetExtension(eventTypeExtension);
                    if (string.IsNullOrWhiteSpace(eventType))
                    {
                        continue;
                    }

                    if (string.IsNullOrEmpty(product))
                    {
                        throw new InvalidOperationException($"File {protoFile.Name} contains event types but does not specify a product");
                    }

                    // Remember the event type specified in this message.
                    row.EventTypes.Add(eventType);
                    
                    // Find the "data" field within the message, if there is one.
                    var dataFieldType = message.Field.FirstOrDefault(f => f.Name == "data")?.TypeName;
                    if (dataFieldType is string)
                    {
                        // Add the data message to the row.
                        // For the sake of making the table simple, we'll remove any package names etc,
                        // just leaving whatever comes after the final period.
                        row.DataMessages.Add(dataFieldType.Split('.').Last());
                    }
                }

                // If this proto contained any messages with event types, yield the row in the iterator.
                // Otherwise, ignore it.
                if (row.EventTypes.Any())
                {
                    yield return row;
                }
            }
        }
    }

    // Note: this is in the same file just for simplicity... if the tool becomes more complex,
    // we might want to separate it out into its own file.

    /// <summary>
    /// A row in the event registry table. There's a single row per package.
    /// </summary>
    class TableRow
    {
        /// <summary>
        /// The product represented in this row.
        /// </summary>
        public string Product { get; }

        /// <summary>
        /// The protobuf package represented in this row.
        /// </summary>
        public string Package { get; }

        /// <summary>
        /// The CloudEvent types (e.g. "google.cloud.storage.object.v1.finalized")
        /// in this package.
        /// </summary>
        public HashSet<string> EventTypes { get; } = new HashSet<string>();

        /// <summary>
        /// The data protobuf messages (just the final part of the name, e.g. "StorageObjectData")
        /// in this package.
        /// </summary>
        public HashSet<string> DataMessages { get; } = new HashSet<string>();

        public TableRow(string package, string product) =>
            (Package, Product) = (package, product);

        /// <summary>
        /// Converts the table row to markdown, ready for inclusion in the README file.
        /// </summary>
        public string ToMarkdown()
        {
            // Product name / API name
            var productColumn = Product;

            // Package name with a link to the directory containing the protos.
            var packageColumn = $"[{Package}](proto/{string.Join("/", Package.Split('.'))})";

            // Event types in lexicographic order, separated by HTML line breaks.
            var eventTypesColumn = string.Join("<br/>", EventTypes.OrderBy(type => type, StringComparer.Ordinal));

            // Data messages, in lexicographic order, separated by HTML line breaks.
            var dataMessagesColumn = string.Join("<br/>", DataMessages.OrderBy(type => type, StringComparer.Ordinal));

            // Join the columns together, using | as the delimiter.
            return $"|{productColumn}|{packageColumn}|{eventTypesColumn}|{dataMessagesColumn}|";
        }
    }
}
