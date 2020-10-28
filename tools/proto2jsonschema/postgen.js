const path = require('path');
const fs = require('fs');
const recursive = require("recursive-readdir");
const camelcaseKeys = require('camelcase-keys');

/**
 * This tool polishes the JSON schemas with a few modifications:
 * - Adds "$id" – "." delimited ID – e.g. "google.events.cloud.audit.v1.LogEntryData"
 * - Adds "name" – The name for the JSON schema – e.g. "LogEntryData"
 * - Removes snake_case fields that are duplicative of camelCase fields that are seen in JSON payloads
 * @todo Removing snake_case fields is a feature request for the proto2jsonschema generator.
 * @see https://github.com/chrusty/protoc-gen-jsonschema/issues/38
 */
const ROOT = path.resolve(`${__dirname}/../../jsonschema`);
console.log(`Fixing paths in dir: ${ROOT}`);
(async () => {
  const filePaths = await recursive(ROOT);
  // For every file
  filePaths.map(filePath => {
    const dataName = path.basename(filePath,  path.extname(filePath)); // i.e. LogEntryData
    
    // Create the modified JSON schema output
    const json = JSON.parse(fs.readFileSync(filePath).toString());
    const resultJSON = {
      // Add the $id and name first
      $id: getId(filePath),
      name: dataName,
      cloudevent: getCloudEventType(filePath),
      // Add all other fields. Convert keys to camelCase (i.e. remove snake_case keys)
      ...camelcaseKeys(json, {deep: true})
    };

    /**
     * Clean the schema output:
     * - Fix generated "$ref" keys. i.e.
     *   - FROM: "$ref": "google.events.cloud.cloudbuild.v1.Volume"
     *   - TO: "$ref": "#/definitions/googleEventsCloudCloudbuildV1Volume"
     * - Remove useless generated "$schema" keys (unless top-level/root key).
     * @param {boolean} isRoot if the traversal is starting at the root.
     * @todo Update crusty tool to not produce these artifacts.
     */
    const cleanSchema = (obj, isRoot = false) => {
      for (const prop in obj) {
        const isRef = (prop === '$ref');
        const isNestedSchema = (prop === '$schema');
        if (isNestedSchema && !isRoot) {
          // Delete these keys from object
          delete obj[prop];
        } else if (isRef) {
          const ucfirst = (w) => w.charAt(0).toUpperCase() + w.slice(1);
          const lcfirst = (w) => w.charAt(0).toLowerCase() + w.slice(1);

          // Fix the $ref prop
          const uri = lcfirst(obj[prop].split('.').map(ucfirst).join(''));
          obj[prop] = `#/definitions/${uri}`;
        } else if (typeof obj[prop] === 'object') {
          // Recursive case
          cleanSchema(obj[prop]);
        }
      }
    };
    cleanSchema(resultJSON, true);

    // Write back file with formatting
    fs.writeFileSync(filePath, JSON.stringify(resultJSON, null, 2));
  });
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
 * Gets the CloudEvent#type represented in the JSON schema.
 * @param {string} filepath The input file path
 * @example filepath: /Documents/github/googleapis/google-cloudevents/jsonschema/google/events/cloud/audit/v1/LogEntryData.json
 * @example out: google.events.cloud.audit.v1
 * @returns {string} The CloudEvent ID for this file represents.
 */
function getCloudEventType(filepath) {
  const removePrefix = filepath.split('jsonschema/')[1];
  const removeSuffix = removePrefix.substring(0, removePrefix.lastIndexOf("/"));
  return removeSuffix.replace(/\//g, '.');
}
