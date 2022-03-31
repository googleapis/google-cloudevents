/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 const path = require('path');
 const fs = require('fs');
 const recursive = require("recursive-readdir");
 const protobufjs = require('protobufjs');
 const flatten = require('flat');

 /**
  * This tool polishes the JSON schemas with a few modifications:
  * - Adds "$id" – "." delimited ID – e.g. "google.events.cloud.audit.v1.LogEntryData"
  * - Adds "name" – The name for the JSON schema – e.g. "LogEntryData"
  * - Adds "examples" - A list of paths to the test event data associated with the schema
  *   - e.g. ["https://googleapis.github.io/google-cloudevents/testdata/google/events/cloud/audit/v1/LogEntryData-pubsubCreateTopic.json"]
  */
 const ROOT = path.resolve(`${__dirname}/../../jsonschema`);
 const TESTDATA = path.resolve(`${__dirname}/../../testdata`);
 console.log(`Fixing paths in dir: ${ROOT}`);
 (async () => {
   const filePaths = await recursive(ROOT);
   // For every file
   filePaths.map(filePath => {
     const dataName = path.basename(filePath,  path.extname(filePath)); // i.e. LogEntryData

     // Create the modified JSON schema output
     const json = JSON.parse(fs.readFileSync(filePath).toString());

     // Replace backslashes with forward-slashes to allow the script
     // to work on Windows.
     filePath = filePath.replace(/\\/g, '/');

     const packageName = getCloudEventPackage(filePath);
     const resultJSON = {
       // Add the $id and name first
       $id: getId(filePath),
       name: dataName,
       examples: getExamples(filePath),
       package: packageName,
       datatype: `${packageName}.${dataName}`,
       ...getCloudEventProperties(packageName, dataName),
       ...json
     };

     /**
      * Simplify $ref tags. This string is used for the name of fields.
      *
      * This couldn't be done in the previous step, because the $ref was simply wrong in that step.
      * Now the $refs are correct (but long).
      *
      * We need to change the $ref name and definition.
      *
      * We do so by:
      * - Looking at the JSON schema "definitions".
      * - Create a map from the longhand to shortand value
      * - replaceAll longhand to shorthand values
      * @example "google.events.cloud.firestore.v1.Value" -> "Value"
      * @example "google.events.cloud.cloudbuild.v1.StorageSource" -> StorageSource
      *
      * In terms of scale, within the original 10 CloudEvents, there are 6 fields
      * that contain long-hand tags that are fixed with this modification.
      */
     const getAllRefs = (schema) => {
       if (!schema.definitions) return [];
       return Object.keys(schema.definitions);
     };
     const allRefs = getAllRefs(resultJSON);

     /**
      * Map of replacement definitions.
      * @example 'google.api.MonitoredResource' -> 'MonitoredResource'
      * @example 'google.events.cloud.firestore.v1.Value' -> 'Value'
      * @example 'google.rpc.Status': 'Status'
      */
     const replacementMap = {};
     allRefs.map(ref => {
       const shorthandFromDotNotation = ref.split('.').reverse()[0];
       replacementMap[ref] = shorthandFromDotNotation;
     });

     /**
      * Clean the schema output:
      * - Replace definitions "#/definitions/{key}" with "#/definitions/{value}"
      *
      * @example
      * - FROM: "$ref": "google.events.cloud.cloudbuild.v1.Volume"
      * - TO: "$ref": "#/definitions/Volume"
      * @param {Object} obj the JSON object.
     //  */
     const cleanSchema = (obj) => {
       for (const key in obj) {
         // Base cases
         const isRef = (key === '$ref');
         if (isRef) {
           const uri = obj[key];
           for (const [find, replace] of Object.entries(replacementMap)) {
             if (uri === `#/definitions/${find}`) {
               obj[key] = `#/definitions/${replace}`;
             }
           }
         }

         // Recursive case
         if (typeof obj[key] === 'object') {
           cleanSchema(obj[key]);

           // Change key name
           // if key in replacementMap
           if (replacementMap[obj[key]]) {
             // then change key name
             obj[key] = replacementMap[obj[key]];
           }
         }
       }
     };
     cleanSchema(resultJSON);

     /**
      * Clean up schema output:
      * - Replace keys with values in replacementMap
      */
     for (const [k, v] of Object.entries(resultJSON.definitions || {})) {
       delete resultJSON.definitions[k];
       resultJSON.definitions[replacementMap[k]] = v;
     }

     // Format JSON
     let jsonString = JSON.stringify(resultJSON, null, 2);

     // Write back JSON Schema
     fs.writeFileSync(filePath, jsonString);
   });
   console.log(`Fixed ${filePaths.length} schemas!`);
 })();

 /**
  * Gets the "$id" for the JSON schema.
  * @param {string} filepath The input file path
  * @example filepath: /Documents/github/googleapis/google-cloudevents/jsonschema/google/events/cloud/pubsub/v1/MessagePublishedData.json
  * @example out: https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/pubsub/v1/MessagePublishedData.json
  * @returns {string} A URI that represents the ID of the file.
  */
 function getId(filepath) {
   const subpath = filepath.split('jsonschema/')[1];
   return `https://googleapis.github.io/google-cloudevents/jsonschema/${subpath}`;
 }

 /**
  * Gets the cloudevent package represented in the JSON schema.
  * @param {string} filepath The input file path
  * @example filepath: /Documents/github/googleapis/google-cloudevents/jsonschema/google/events/cloud/audit/v1/LogEntryData.json
  * @returns {string} The CloudEvent package for this file represents.
  * @example out: google.events.cloud.audit.v1
  */
 function getCloudEventPackage(filepath) {
   const removePrefix = filepath.split('jsonschema/')[1];
   const removeSuffix = removePrefix.substring(0, removePrefix.lastIndexOf("/"));
   return removeSuffix.replace(/\//g, '.');
 }

 /**
  * Gets the paths to test event data associated with the schema.
  * @param {string} filepath The input file path
  * @example filepath: /Documents/github/googleapis/google-cloudevents/jsonschema/google/events/cloud/audit/v1/LogEntryData.json
  * @example out: ["https://googleapis.github.io/google-cloudevents/testdata/google/events/cloud/audit/v1/LogEntryData-pubsubCreateTopic.json"]
  * @returns {array[string]} An array of paths to the test event data.
  */
 function getExamples(filepath) {
   const removePrefix = filepath.split('jsonschema/')[1];
   const removeSuffix = removePrefix.substring(0, removePrefix.lastIndexOf("/"));
   const testDataPath = TESTDATA + '/' + removeSuffix;
   var filesAndDirs;
   try {
     filesAndDirs = fs.readdirSync(testDataPath, { withFileTypes: true });
   } catch (err) {
     return [];
   }

   return filesAndDirs
     .map((value) => {
       const isJSONFile = value.isFile() && value.name.endsWith('.json');
       return isJSONFile ? `https://googleapis.github.io/google-cloudevents/testdata/${removeSuffix}/${value.name}` : null;
     })
     .filter((value) => value != null);
 }

 /**
  * Gets the CloudEvent properties from the corresponding `events.proto` file.
  * @param {string} packageName The package name of the CloudEvent.
  * @param {string} dataName The CloudEvent payload type name.
  * @return {object} cloudevent The CloudEvent properties object.
  * @return {string[]} cloudevent.types The CloudEvent type strings.
  * @return {string} cloudevent.product The CloudEvent product.
  */
 function getCloudEventProperties(packageName, dataName) {
   const packageNameSplit = packageName.split('.');
   const protoPath = packageNameSplit.join('/');
   const eventPath = path.resolve(`${__dirname}/../../proto/${protoPath}/events.proto`);
   const proto = protobufjs.loadSync(eventPath);
   const protoAsJSON = proto.toJSON();

   const CLOUD_EVENT_TYPE = '(google.events.cloud_event_type)';
   const CLOUD_EVENT_PRODUCT = '(google.events.cloud_event_product)';

   // We'll traverse the proto file to extract CloudEvent properties.
   // The file contents are nested in the proto package.
   let eventMessages = protoAsJSON;
   for (const k of packageNameSplit) {
     eventMessages = eventMessages["nested"][k];
   }

   // Find the product if specified.
   let product = '';
   if (eventMessages.hasOwnProperty("options") && eventMessages["options"].hasOwnProperty(CLOUD_EVENT_PRODUCT)) {
     product = eventMessages["options"][CLOUD_EVENT_PRODUCT];
   }

   // Find all CloudEvent types associated with this payload.
   const cloudeventTypes = [];
   eventMessages = eventMessages["nested"];
   for (const e in eventMessages) {
     const event = eventMessages[e];
     if (!event.hasOwnProperty("options")) continue;
     const eventOptions = event["options"];
     if (!eventOptions.hasOwnProperty(CLOUD_EVENT_TYPE)) continue;
     if (!event.hasOwnProperty("fields")) continue;
     const eventFields = event["fields"];
     if (!eventFields.hasOwnProperty("data")) continue;
     const eventData = eventFields["data"];
     if (!eventData.hasOwnProperty("type")) continue;
     const eventDataType = eventData["type"];
     if (eventDataType == dataName) {
       cloudeventTypes.push(eventOptions[CLOUD_EVENT_TYPE]);
     }
   }

   // Return types and product.
   return {
     cloudeventTypes,
     product,
   };
 }
