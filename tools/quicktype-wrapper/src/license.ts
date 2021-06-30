// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const YEAR = new Date().getFullYear();

/**
 * Gets the Apache License header with a custom character prefix.
 * Used to create headers with different comment characters.
 * @param {string} C The character prefix before the license.
 */
const HEADER = (C: string) =>
  `${C} Copyright ${YEAR} Google LLC
${C}
${C} Licensed under the Apache License, Version 2.0 (the "License");
${C} you may not use this file except in compliance with the License.
${C} You may obtain a copy of the License at
${C}
${C}     https://www.apache.org/licenses/LICENSE-2.0
${C}
${C} Unless required by applicable law or agreed to in writing, software
${C} distributed under the License is distributed on an "AS IS" BASIS,
${C} WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
${C} See the License for the specific language governing permissions and
${C} limitations under the License.`;

export const HASH_HEADER = HEADER('#') + '\n';
export const SINGLE_LINE_HEADER = HEADER('//') + '\n';
export const DASH_LINE_HEADER = HEADER('--') + '\n';
export const MULTI_LINE_HEADER = `/**
${HEADER(' *')}
 */
`;
export const MULTI_LINE_HEADER_JAVA = `/*
${HEADER(' *')}
 */
`;
// Note, newline is important here.
