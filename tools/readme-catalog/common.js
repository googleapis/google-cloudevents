/**
 * Replaces the contents of a string's GENERATED comments with a replacement.
 * @param {string} s The string to replace.
 * @param {string} replacement The replacement string.
 */
export const getGeneratedStringWithReplacement = (s, replacement) => {
  const README_GEN_START = '<!-- GENERATED START -->';
  const README_GEN_END = '<!-- GENERATED END -->';

  const README_BEFORE_TABLE = s.substring(0, s.indexOf(README_GEN_START) + README_GEN_START.length);
  const README_AFTER_TABLE = s.substring(s.indexOf(README_GEN_END));

  // Return result (with newlines)
  return `${README_BEFORE_TABLE}
${replacement}
${README_AFTER_TABLE}`;
};
