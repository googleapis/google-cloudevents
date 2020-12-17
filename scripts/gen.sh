#!/bin/bash
set -e

# Clean directory and cache
go clean -cache
rm -rf $GOPATH/src/github.com/

## Generate JSON schemas
./tools/proto2jsonschema/gen.sh

## Generate JSON schema catalog
./tools/jsonschema-catalog/gen.sh

## Generate README catalog
cd ./tools/readme-catalog && npm start

echo "Done"
