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
const IN = process.env.IN || argv.in;
const OUT = process.env.OUT || argv.out;
const L = (process.env.L || argv.l || LANGUAGE.TYPESCRIPT).toUpperCase() as TARGET_LANGUAGE;

console.log(
`***********************
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

// The name of the JSON Schema file
const SCHEMA_FILE = 'schema.json';

/**
 * Gets a list of all JSON Schema paths (absolute paths)
 * @param directory The path to the directory with schemas.
 */
async function getJSONSchemasPaths(directory: string) {
  console.log(`- Finding all JSON Schemas (${SCHEMA_FILE})...`);
  const recursive = require("recursive-readdir");
  const paths: string[] = await recursive(directory, [`!${SCHEMA_FILE}`])
  return paths;
}

// Start the program
(async () => {
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
    const relPath = relPaths[i];
    const typeName = JSON.parse(file).name;

    // Gather the file paths
    const mkdirpRelPath = relPath.substr(0, relPath.length - SCHEMA_FILE.length); // contains '/'
    const outFolder = `${OUT}/${mkdirpRelPath}`; // foo/bar/
    const outFile = `${typeName}.${LANGUAGE_EXT[L]}`; // PubSubData.java
    const outPath = `${outFolder}${outFile}`; // foo/bar/PubSubData.java

    console.log(`- ${typeName.padEnd(40, ' ')}: ${mkdirpRelPath}${outFile}`);

    // Generate language using quicktype
    const genFile = await jsonschema2language({
      jsonSchema: file,
      language: L,
      typeName,
    });
    
    // Make the directory
    await mkdirp(outFolder);
    writeFileSync(outPath, genFile);
  });
  await Promise.all(pathPromises);
  console.log('== END ==');
})();
