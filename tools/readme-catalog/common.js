/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
