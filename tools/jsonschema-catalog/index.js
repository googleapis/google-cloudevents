const path = require('path');
const fs = require('fs');
const recursive = require("recursive-readdir");

/**
 * Generates the jsonschema catalog file.
 */
const ROOT = path.resolve(`${__dirname}/../../jsonschema`);
console.log(`Iterating through JSON schemas:`);

(async () => {
  const filePaths = await recursive(ROOT);
  
  // For every JSON schema file, besides the catalog, read the file and gather data.
  let cloudeventJSONSchemas = [];
  filePaths.map(filePath => {
    if (filePath.includes('catalog.json')) return; // don't include self
    const json = JSON.parse(fs.readFileSync(filePath).toString());
    console.log(`- ${json.$id}`);

    // Add schema catalog entry with specific fields.
    cloudeventJSONSchemas.push({
      url: json.$id,
      name: json.name,
      datatype: json.datatype,
      cloudeventTypes: json.cloudeventTypes,
      description: json.description,
    });
  });
  // Sort by URL (to prevent random ordering)
  cloudeventJSONSchemas = cloudeventJSONSchemas.sort((s1, s2) => s1.package < s2.package);

  // Create the catalog file that follows the schema-catalog.
  const catalog = {
    $schema: 'https://json.schemastore.org/schema-catalog',
    version: 1, // required
    schemas: cloudeventJSONSchemas,
  };
  fs.writeFileSync(`${ROOT}/catalog.json`, JSON.stringify(catalog, null, 2));
  console.log(`Created: ${ROOT}/catalog.json`);
})();
