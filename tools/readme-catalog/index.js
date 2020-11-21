const fs = require('fs');

/**
 * Generates a catalog for the README.
 */
const CATALOG = JSON.parse(fs.readFileSync(`${__dirname}/../../jsonschema/catalog.json`));

/**
 * Replaces the contents of a string's GENERATED comments with a replacement.
 * @param {string} s The string to replace.
 * @param {string} replacement The replacement string.
 */
const getGeneratedStringWithReplacement = (s, replacement) => {
  const README_GEN_START = '<!-- GENERATED START -->';
  const README_GEN_END = '<!-- GENERATED END -->';

  const README_BEFORE_TABLE = s.substring(0, s.indexOf(README_GEN_START) + README_GEN_START.length);
  const README_AFTER_TABLE = s.substring(s.indexOf(README_GEN_END));

  // Return result (with newlines)
  return `${README_BEFORE_TABLE}
${replacement}
${README_AFTER_TABLE}`;
};

/**
 * Gets markdown for the proto / JSON schema table cell.
 * @param {object} schemaEntry The JSON schema catalog entry.
 * @returns {string} Markdown for the schema entry.
 */
const getSchemaLinkMarkdown = (schemaEntry) => {
  // Get the path the to the data from the datatype.
  // in: "google.events.cloud.audit.v1.LogEntryData"
  // out: "cloud/audit/v1"
  const prefix = 'google.events.';
  const schemaPath = schemaEntry.datatype.substring(
    schemaEntry.datatype.indexOf(prefix) + prefix.length,
    schemaEntry.datatype.indexOf(`.${schemaEntry.name}`),
  ).replace(/\./g, '/');

  // Proto link is the path + data.proto
  const protoLink = `proto/google/events/${schemaPath}/data.proto`;

  // JSON schema path is the URL + jsonschema path + {name}.json
  const jsonschemaPath = `${schemaPath}/${schemaEntry.name}`;
  const jsonLink = `https://googleapis.github.io/google-cloudevents/jsonschema/google/events/${jsonschemaPath}.json`;
  return `[Proto](${protoLink}) / [JSON](${jsonLink})`;
}

(async () => {
  console.log('Updating README...');

  // Generate table
  const replacementTableRow = (schemaEntry) => {
    // Add escaped ticks (\`) to code.
    const PRODUCT = schemaEntry.product;
    const SCHEMAS = getSchemaLinkMarkdown(schemaEntry);
    const DATA_TYPE = `\`${schemaEntry.datatype}\``;
    const CLOUDEVENT_TYPE = schemaEntry.cloudeventTypes.map(t => `\`${t}\``).join('<br/>');
    return `|${PRODUCT}|${SCHEMAS}|<br>Data Type:<br>${DATA_TYPE}<br>CloudEvent Type(s):<br>${CLOUDEVENT_TYPE}|`;
  };
  const replacementTable =
    `|Product|Schemas|Types|
|-|-|-|-|
${CATALOG.schemas.map(replacementTableRow).join('\n')}`;

  // Update README
  const README_PATH = `${__dirname}/../../README.md`;
  const readmeContents = fs.readFileSync(README_PATH).toString();
  const updatedReadmeContents = getGeneratedStringWithReplacement(readmeContents, replacementTable);

  // Save updated README
  fs.writeFileSync(README_PATH, updatedReadmeContents);
  console.log('Updated README.');
})();
