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
      ...getCloudEventProperties(packageName),
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
 * @return {object} cloudevent The CloudEvent properties object.
 * @return {string[]} cloudevent.types The CloudEvent type strings.
 * @return {string} cloudevent.product The CloudEvent product.
 */
function getCloudEventProperties(packageName) {
  const protoPath = packageName.split('.').join('/');
  const eventPath = path.resolve(`${__dirname}/../../proto/${protoPath}/events.proto`);
  const proto = protobufjs.loadSync(eventPath);
  const protoAsJSON = proto.toJSON();

  // Flatten the protobuf representation and look directly for these keys:
  const CLOUD_EVENT_TYPE = '(google.events.cloud_event_type)';
  const CLOUD_EVENT_PRODUCT = '(google.events.cloud_event_product)';
  const flattenedProtoValueMap = flatten(protoAsJSON);
  const flattenedProtoValueMapEntries = Object.entries(flattenedProtoValueMap);
  
  // Go through all the keys, add the type or product if found.
  const cloudeventTypes = [];
  let product = '';
  for (const [k, v] of flattenedProtoValueMapEntries) {
    if (k.endsWith(CLOUD_EVENT_TYPE)) {
      cloudeventTypes.push(v);
    }
    if (k.endsWith(CLOUD_EVENT_PRODUCT)) {
      product = v;
    }
  }

  // Return types and product.
  return {
    cloudeventTypes,
    product,
  };
}
