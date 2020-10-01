#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import {jsonschema2language, LANGUAGE, LANGUAGE_EXT, TARGET_LANGUAGE} from './quickstype';
const {argv} = require('yargs')
const mkdirp = require('mkdirp');
const HOMEDIR = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

/**
 * A simple tool that generates code using quicktype.
 * 
 * Configuration (via environment variables or command-line flags):
 * @param {string} IN The directory for JSON Schema input. Must have trailing /.
 * @param {string} OUT The directory for generated output. Must have trailing /.
 * @param {string} L The target language
 */
const IN = argv.in || process.env.IN;
const OUT = argv.out || process.env.OUT;
const L = (argv.l || process.env.L || LANGUAGE.TYPESCRIPT).toUpperCase() as TARGET_LANGUAGE;

// The name of the JSON Schema file
const SCHEMA_PATTERN = '*.json';

/**
 * Gets a list of all JSON Schema paths (absolute paths)
 * @param directory The path to the directory with schemas.
 */
async function getJSONSchemasPaths(directory: string) {
  console.log(`- Finding all JSON Schemas (${SCHEMA_PATTERN})...`);
  const recursive = require("recursive-readdir");
  const paths: string[] = await recursive(directory, [`!${SCHEMA_PATTERN}`]);
  return paths;
}

/**
 * Gets a list of tuples of all JSON schemas and code generated from them
 * @param directory The path to the directory with schemas.
 * @param language The language of the code.
 */
export async function getJSONSchemasAndGenFiles(directory: string, language: string) {
  const absPaths = await getJSONSchemasPaths(directory);

  let schemasAndGenFiles: Array<[object, string]> = [];

  const promises = absPaths.map(async (f: string, i: number) => {
    const file = readFileSync(f) + '';
    const schema = JSON.parse(file);
    const genFile = await jsonschema2language({
      jsonSchema: file,
      language: language,
      typeName: "Event"
    })

    schemasAndGenFiles.push([schema, genFile]);
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
    console.log(`Found ${absPaths.length} schema(s).`);

    // Loop through every path
    const pathPromises = absPaths.map(async (f: string, i: number) => {
      const file = await readFileSync(f) + '';
      const relPath = relPaths[i]; // e.g. /google/events/cloud/pubsub/MessagePublishedData.json
      const typeName = JSON.parse(file).name; // e.g. MessagePublishedData

      // Generate language file using quicktype
      const genFile = await jsonschema2language({
        jsonSchema: file,
        language: L,
        typeName,
      });
      
      // Save the language file with the right filename.
      // fullPathTargetFile: /google/events/cloud/pubsub/MessagePublishedData.ts 
      const fullPathTargetFile = relPath.replace('.json', `.${LANGUAGE_EXT[L]}`);
      // relativePathTargetFile: cloud/pubsub/MessagePublishedData.ts 
      const relativePathTargetFile = fullPathTargetFile.substr('/google/events/'.length);
      // relativePathTargetDirectory: cloud/pubsub/
      const relativePathTargetDirectory = relativePathTargetFile.substring(
        0, relativePathTargetFile.lastIndexOf('/'));

      // Create the directory
      await mkdirp(relativePathTargetDirectory);
      writeFileSync(relativePathTargetFile, genFile);
      console.log(`- ${typeName.padEnd(40, ' ')}: ${relativePathTargetFile}`);
    });
    await Promise.all(pathPromises);
    console.log('== END ==');
  })();
};
