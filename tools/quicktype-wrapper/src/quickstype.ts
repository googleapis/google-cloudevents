import {
  InputData,
  quicktypeMultiFile,
  JSONSchemaInput,
  SerializedRenderResult,
  FetchingJSONSchemaStore,
} from 'quicktype-core';
// Interface not exported in top-level 'quicktype-core': https://github.com/quicktype/quicktype/pull/1565
import {MultiFileRenderResult} from '../node_modules/quicktype-core/dist/TargetLanguage';

/**
 * A list of supported Quicktype languages.
 * @see https://github.com/quicktype/quicktype/tree/master/src/quicktype-core/language
 */
export const LANGUAGE = {
  CSHARP: 'csharp',
  JAVA: 'java',
  PYTHON: 'python',
  RUST: 'rust',
  CRYSTAL: 'crystal',
  RUBY: 'ruby',
  GOLANG: 'golang',
  CPLUSPLUS: 'cplusplus',
  ELM: 'elm',
  SWIFT: 'swift',
  OBJECTIVEC: 'objective-c',
  TYPESCRIPT: 'typescript',
  JAVASCRIPT: 'javascript',
  KOTLIN: 'kotlin',
  DART: 'dart',
  PIKE: 'pike',
  HASKELL: 'haskell',
};
export type TARGET_LANGUAGE = keyof typeof LANGUAGE;
export const LANGUAGE_EXT = {
  CSHARP: 'cs',
  JAVA: 'java',
  PYTHON: 'py',
  RUST: 'rs',
  CRYSTAL: 'cr',
  RUBY: 'rb',
  GOLANG: 'go',
  CPLUSPLUS: 'cpp',
  ELM: 'elm',
  SWIFT: 'swift',
  OBJECTIVEC: 'm',
  TYPESCRIPT: 'ts',
  JAVASCRIPT: 'js',
  KOTLIN: 'kt',
  DART: 'dart',
  PIKE: 'pike',
  HASKELL: 'hs',
};

/**
 * Uses quicktype to generate a language file.
 * @param targetLanguage The target langauge to generate.
 * @param typeName  The name of the type.
 * @param jsonSchemaString The JSON Schema as a string.
 * @see https://github.com/quicktype/quicktype#calling-quicktype-from-javascript
 */
async function quicktypeJSONSchemaToMultiFile(
  targetLanguage: TARGET_LANGUAGE | string,
  typeName: string,
  jsonSchemaString: string
): Promise<MultiFileRenderResult> {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
  const lang = targetLanguage.toLowerCase(); // must be lowercase for quicktype

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({name: typeName, schema: jsonSchemaString});
  const inputData = new InputData();
  inputData.addInput(schemaInput);

  // Quicktype's API: Return a Promise of the multi-file results
  return await quicktypeMultiFile({
    inputData,
    lang,
    rendererOptions: {
      // Don't generate Jackson types
      'just-types': 'true',
    },
  });
}

// A simple map from filename to file contents.
export type QtMultifileResult = {[filename: string]: string};

/**
 * Converts a JSON Schema file (string) to a set of langauge files.
 * @param jsonSchema The JSON Schema as a string
 * @param typeName The name of the type
 * @param language The target language to generate
 */
export async function jsonschema2languageFiles({
  jsonSchema, // '{"$schema":...}'
  typeName, // 'AuditLogWrittenEvent'
  language, // 'typescript'
}: {
  jsonSchema: string;
  typeName: string;
  language: TARGET_LANGUAGE | string;
}): Promise<QtMultifileResult> {
  // Run quicktype tooling
  const multifileResult: MultiFileRenderResult = await quicktypeJSONSchemaToMultiFile(
    language,
    typeName,
    jsonSchema
  );
  const multifileResultList: [string, SerializedRenderResult][] = Array.from(
    multifileResult.entries()
  );

  // Transform result to a map of filepath : file contents
  const multifileResultMap: QtMultifileResult = {};
  multifileResultList.forEach(singleFile => {
    const [filename, renderResult] = singleFile;
    const fileContents = renderResult.lines.join('\n');
    multifileResultMap[filename] = fileContents;
  });
  return multifileResultMap;
}
