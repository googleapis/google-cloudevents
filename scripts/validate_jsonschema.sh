#!/bin/bash
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Validates the JSON Schemas are valid.
# Must be run from the repo's root folder.

# Install JSON schema schema
mkdir -p tmp
curl -o tmp/jsonschema-schema.json http://json-schema.org/draft-04/schema

# Validate every schema
JSON_SCHEMAS=$(find ./jsonschema/google/events -name "*.json")
while IFS= read -r line ; do
  npx ajv-cli@v3.0.0 validate -s tmp/jsonschema-schema.json -d $line;
done <<< "$JSON_SCHEMAS"
