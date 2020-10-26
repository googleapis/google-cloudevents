const path = require('path');
const fs = require('fs');
const recursive = require("recursive-readdir");
const camelcaseKeys = require('camelcase-keys');

/**
 * This tool polishes the JSON schemas with a few modifications:
 * - Adds "$id" – "." delimited ID – e.g. "google.events.cloud.audit.v1.LogEntryData"
 * - Adds "name" – The name for the JSON schema – e.g. "LogEntryData"
 * - Removes snake_case fields that are duplicative of camelCase fields that are seen in JSON payloads
 *   - This is a feature request for the proto2jsonschema generator.
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
      // Add the name and $id first
      name: dataName,
      $id: getId(filePath),
      // Add all other fields. Convert keys to camelCase (i.e. remove snake_case keys)
      ...camelcaseKeys(json, {deep: true})
    };

    // Write back file with formatting
    fs.writeFileSync(filePath, JSON.stringify(resultJSON, null, 2));
  });
})();

/**
 * @param {string} filepath The input file path
 * @example filepath: /Documents/github/googleapis/google-cloudevents/jsonschema/google/events/cloud/audit/v1/LogEntryData.json
 * @example out: google.events.cloud.audit.v1
 * @returns A string that represents the ID of the file.
 */
function getId(filepath) {
  const removePrefix = filepath.split('jsonschema/')[1];
  const removeSuffix = removePrefix.substring(0, removePrefix.lastIndexOf("/"));
  return removeSuffix.replace('/', '.');
}
