#!/usr/bin/env node

// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {readFileSync, writeFileSync} from 'fs';
import {
  jsonschema2languageFiles,
  LANGUAGE,
  LANGUAGE_EXT,
  TARGET_LANGUAGE,
  LANGUAGE_LICENSE_HEADER,
  QtMultifileResult,
} from './quickstype';
const {argv} = require('yargs');
const mkdirp = require('mkdirp');
const recursive = require('recursive-readdir');

/**
 * A simple tool that generates code using quicktype.
 *
 * Configuration (via environment variables or command-line flags):
 * @param {string} IN The directory for JSON Schema input. Must have trailing /.
 * @param {string} OUT The directory for generated output. Must have trailing /.
 * @param {string} L The target language
 * @param {boolean} NO_LICENSE 'true' if we want to add a license header
 * @param {boolean} ENUM_AS_STRING 'true' if we want to parse JSON schema enum fields as strings
 */
const IN = argv.in || process.env.IN;
const OUT = argv.out || process.env.OUT;
const L = (
  argv.l ||
  process.env.L ||
  LANGUAGE.TYPESCRIPT
).toUpperCase() as TARGET_LANGUAGE;
const NO_LICENSE = (argv['no-license'] || process.env.NO_LICENSE) === 'true';
const ENUM_AS_STRING = (argv['enum-as-string'] || process.env.ENUM_AS_STRING) === 'true';

/**
 * Gets a list of all JSON Schema paths (absolute paths)
 * @param directory The path to the directory with schemas.
 */
async function getJSONSchemasPaths(directory: string) {
  // The name of the JSON Schema file
  const SCHEMA_PATTERN = '*.json';
  // Ignore all files that don't match the SCHEMA_PATTERN.
  const IGNORE_PATTERN = [`!${SCHEMA_PATTERN}`, 'catalog.json'];

  console.log(`- Finding all JSON Schemas (${SCHEMA_PATTERN})...`);
  const paths: string[] = await recursive(directory, IGNORE_PATTERN);
  return paths;
}

/**
 * Gets a filename from a type (proto message *Data name)
 * @param {string} typeName The type, like DocumentEventData
 * @param {string} lang The language, like golang
 * @returns {string} The filename, like document_event_data
 */
function getFilename(typeName: string, lang: string) {
  // Golang and Ruby prefer filenames to use lower snake_case instead of camelCase
  if (lang === 'GOLANG' || lang === 'RUBY') {
    // Snake case
    return typeName
      .split(/(?=[A-Z])/)
      .join('_')
      .toLowerCase();
  } else {
    // Pascal case (default)
    return typeName;
  }
}

/**
 * Converts all enum fields to string types.
 *
 * BEFORE:
 * "oneOf": [
 *   {
 *     "type": "string"
 *   },
 *   {
 *     "type": "integer"
 *   }
 * ]
 * AFTER:
 * "type: "string"
 * @param {JSON} json The file in json.
 * @returns {JSON} The JSON schema with enums represented as strings.
 */
function convertEnumsToStrings(json: string): string {
  function recursiveConvert(o: any) {
    if (typeof o === 'object') {
      // If object has oneOf field, convert
      if (o.oneOf && o.oneOf[0].type === 'string' && o.oneOf[1].type === 'integer') {
        delete o.oneOf;
        o.type = 'string';
      }

      // Recurse through all values
      Object.values(o).map(recursiveConvert);
    }
  }

  // Recursively convert all "oneof" to "type"
  recursiveConvert(json);
  return json;
}

/**
 * Gets a list of tuples of all JSON schemas and code generated from them
 * @param directory The path to the directory with schemas.
 * @param language The language of the code.
 */
export async function getJSONSchemasAndGenFiles(
  directory: string,
  language: string
) {
  const absPaths = await getJSONSchemasPaths(directory);

  const schemasAndGenFiles: Array<[object, string]> = [];

  const promises = absPaths.map(async (f: string) => {
    const file = readFileSync(f) + '';
    const schema = JSON.parse(file);
    const jsonSchemaFile = ENUM_AS_STRING ? convertEnumsToStrings(schema) : schema;
    const genFile = await jsonschema2languageFiles({
      jsonSchema: JSON.stringify(jsonSchemaFile),
      language: language,
      typeName: schema.name,
    });

    schemasAndGenFiles.push([schema, Object.keys(genFile)[0]]);
  });

  await Promise.all(promises);

  return schemasAndGenFiles;
}

// Start the program
if (!module.parent) {
  (async () => {
    console.log(`***********************
** Quicktype Wrapper **
***********************
* Valid Languages (L): ${Object.values(LANGUAGE)}
***********************
* Config:
- IN=${IN}
- OUT=${OUT}
- L=${L}
- ENUM_AS_STRING=${ENUM_AS_STRING}
***********************
`);

    console.log('== START ==');
    // Validate configuration
    if (!IN) console.error('Error in config: `IN` not set');
    if (!OUT) console.error('Error in config: `OUT` not set');
    if (!IN || !OUT) return;

    // Get all paths for input.
    const absPaths = await getJSONSchemasPaths(IN);
    const relPaths = absPaths.map((p: string) => {
      return p.substr(IN.length);
    });

    // List schemas found
    console.log(`Found ${absPaths.length} schema(s):`);
    relPaths.forEach(path => console.log(`- ${path}`));
    console.log();

    // Loop through every path
    console.log(`Generating ${L} files:`);
    const pathPromises = absPaths.map(async (f: string, i: number) => {
      const file = readFileSync(f) + '';
      const pathToSchema = relPaths[i]; // e.g. /google/events/cloud/pubsub/MessagePublishedData.json
      const typeName = JSON.parse(file).name; // e.g. MessagePublishedData

      // Generate language file(s) using quicktype
      const schema = JSON.parse(file);
      const updatedJsonSchemaFile = ENUM_AS_STRING ? convertEnumsToStrings(schema) : schema;
      const genFiles: QtMultifileResult = await jsonschema2languageFiles({
        jsonSchema: JSON.stringify(updatedJsonSchemaFile),
        language: L,
        typeName,
      });

      // For each type file...
      // Keep a stdout buffer per type to not intertwine output
      const bufferedOutput: string[] = [];
      for (const [filename, genFileContents] of Object.entries(genFiles)) {
        let fileContentsMaybeWithLicenseHeader = genFileContents;
        // Optionally add license headers
        if (!NO_LICENSE) {
          fileContentsMaybeWithLicenseHeader = `${LANGUAGE_LICENSE_HEADER[L]}\n${fileContentsMaybeWithLicenseHeader}`;
        }

        // Find the relative path
        const relativePathTargetDirectory = pathToSchema.substring(
          0,
          pathToSchema.lastIndexOf('/')
        );

        // This next if statement handles if Quicktype generated one or many files
        if (filename === 'stdout') {
          // For languages that just produce one file, Quicktype output filename is 'stdout'.
          const relativeFilePath = relativePathTargetDirectory;
          const absFilePathDir = `${OUT}/${relativePathTargetDirectory}`;

          // Create dir
          await mkdirp(absFilePathDir);

          // Write file
          const typeFilename = `${getFilename(typeName, L)}.${LANGUAGE_EXT[L]}`;
          const absFilePath = `${absFilePathDir}/${typeFilename}`;
          writeFileSync(absFilePath, fileContentsMaybeWithLicenseHeader);
          bufferedOutput.push(
            `- ${typeFilename.padEnd(
              40,
              ' '
            )}: ${relativeFilePath}/${typeFilename}`
          );
        } else {
          // Otherwise, the Quicktype result produced multiple type files from the schema.
          const relativeFilePath = `${relativePathTargetDirectory}/${filename}`;
          const absFilePath = `${OUT}/${relativeFilePath}`;

          // Create dir
          const absFilePathDir = absFilePath.substring(
            0,
            absFilePath.lastIndexOf('/')
          );
          await mkdirp(absFilePathDir);

          // For languages that just produce N files, quicktype output is (filename, filecontents).
          // Write file
          writeFileSync(absFilePath, fileContentsMaybeWithLicenseHeader);
          bufferedOutput.push(
            `- ${filename.padEnd(40, ' ')}: ${relativeFilePath}`
          );
        }
      }

      // Write all of the output in order.
      bufferedOutput.forEach(s => console.log(s));
    });

    // Await all promises to resolve and write "END" when the program is done.
    await Promise.all(pathPromises);
    console.log('== END ==');
  })();
}
