import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getGeneratedStringWithReplacement } from './common.js';

/**
 * Generates a CloudEvent catalog for the README.
 */

/**
 * Gets markdown for the proto / JSON schema table cell.
 * @param {object} schemaEntry The JSON schema catalog entry.
 * @returns {string} Markdown for the schema entry.
 */
const getSchemaLinkMarkdown = (schemaEntry) => {
  // Get the path the to the data from the datatype.
  // in: "google.events.cloud.audit.v1.LogEntryData"
  // out: "cloud/audit/v1"
  const prefix = 'google.';
  const schemaPath = schemaEntry.datatype.substring(
    schemaEntry.datatype.indexOf(prefix) + prefix.length,
    schemaEntry.datatype.indexOf(`.${schemaEntry.name}`),
  ).replace(/\./g, '/');

  // Proto link is the path + data.proto
  const protoLink = `proto/google/${schemaPath}/data.proto`;

  // JSON schema path is the URL + jsonschema path + {name}.json
  const jsonschemaPath = `${schemaPath}/${schemaEntry.name}`;
  const jsonLink = `https://googleapis.github.io/google-cloudevents/jsonschema/google/${jsonschemaPath}.json`;
  return `[Proto](${protoLink}) / [JSON](${jsonLink})`;
};

/**
 * Updates the main README with a CloudEvent catalog.
 */
export const genCloudEventCatalog = () => {
  console.log('- Updating README...');

  // Generate table
  const replacementTableRow = (schemaEntry) => {
    // Add escaped ticks (\`) to code.
    const PRODUCT = schemaEntry.product;
    const SCHEMAS = getSchemaLinkMarkdown(schemaEntry);
    const DATA_TYPE = `\`${schemaEntry.datatype}\``;
    const CLOUDEVENT_TYPE = schemaEntry.cloudeventTypes.map(t => `\`${t}\``).join('<br/>');
    return `|${PRODUCT}|${SCHEMAS}|<br>Data Type:<br>${DATA_TYPE}<br>CloudEvent Type(s):<br>${CLOUDEVENT_TYPE}|`;
  };
  
  // Get the catalog file, and replace the table.
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const CATALOG = JSON.parse(fs.readFileSync(`${__dirname}/../../jsonschema/catalog.json`));
  const replacementTable =
    `|Product|Schemas|Types|
|-|-|-|
${CATALOG.schemas.map(replacementTableRow).join('\n')}`;

  // Update README
  const README_PATH = `${__dirname}/../../README.md`;
  const readmeContents = fs.readFileSync(README_PATH).toString();
  const updatedReadmeContents = getGeneratedStringWithReplacement(readmeContents, replacementTable);

  // Save updated README
  fs.writeFileSync(README_PATH, updatedReadmeContents);
  console.log('- Updated README.');
};
