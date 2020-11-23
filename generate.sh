#!/bin/bash
set -e

## Generate JSON schemas
./tools/proto2jsonschema/gen.sh

## Generate JSON schema catalog
cd ./tools/jsonschema-catalog && npm start

## TODO: Generate README catalog
## TODO: Wait for https://github.com/googleapis/google-cloudevents/pull/115 to be merged.
# cd ./tools/readme-catalog && npm start

echo "Done"
