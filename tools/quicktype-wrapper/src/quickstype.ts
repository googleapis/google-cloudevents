import {
  quicktype,
  InputData,
    // jsonInputForTargetLanguage,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
} from 'quicktype-core';

/**
 * A list of supported Quicktype languages.
 * @see https://github.com/quicktype/quicktype/tree/master/src/quicktype-core/language
 */
export const LANGUAGE = {
  CSHARP: "csharp",
  JAVA: "java",
  PYTHON: "python",
  RUST: "rust",
  CRYSTAL: "crystal",
  RUBY: "ruby",
  GOLANG: "golang",
  CPLUSPLUS: "cplusplus",
  ELM: "elm",
  SWIFT: "swift",
  OBJECTIVEC: "objective-c",
  TYPESCRIPT: "typescript",
  JAVASCRIPT: "javascript",
  KOTLIN: "kotlin",
  DART: "dart",
  PIKE: "pike",
  HASKELL: "haskell",
};
export type TARGET_LANGUAGE = keyof typeof LANGUAGE;
export const LANGUAGE_EXT = {
  CSHARP: "cs",
  JAVA: "java",
  PYTHON: "py",
  RUST: "rs",
  CRYSTAL: "cr",
  RUBY: "rb",
  GOLANG: "go",
  CPLUSPLUS: "cpp",
  ELM: "elm",
  SWIFT: "swift",
  OBJECTIVEC: "m",
  TYPESCRIPT: "ts",
  JAVASCRIPT: "js",
  KOTLIN: "kt",
  DART: "dart",
  PIKE: "pike",
  HASKELL: "hs",
};

/**
 * Uses quicktype to generate a language file.
 * @param targetLanguage The target langauge to generate.
 * @param typeName  The name of the type.
 * @param jsonSchemaString The JSON Schema as a string.
 * @see https://github.com/quicktype/quicktype#calling-quicktype-from-javascript
 */
async function quicktypeJSONSchema(
  targetLanguage: TARGET_LANGUAGE | string,
  typeName: string,
  jsonSchemaString: string
) {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({name: typeName, schema: jsonSchemaString});

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage.toLowerCase(), // must be lowercase for quicktype
  });
}

/**
 * Converts a JSON Schema file (string) to a language file (string).
 * @param jsonSchema The JSON Schema as a string
 * @param typeName The name of the type
 * @param language The target language to generate
 */
export async function jsonschema2language({
  jsonSchema, // '{"$schema":...}'
  typeName, // 'AuditLogWrittenEvent'
  language, // 'typescript'
}: {
  jsonSchema: string;
  typeName: string;
  language: TARGET_LANGUAGE | string;
}) {
  const {lines: languageType} = await quicktypeJSONSchema(
    language,
    typeName,
    jsonSchema
  );
  const generatedFile = languageType.join('\n');
  return generatedFile;
}
