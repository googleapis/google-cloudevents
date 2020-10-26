# proto2jsonschema

This tool converts proto event definitions to JSON Schemas.

## Requirements

This tool requires the following languages:

- `go version`: `1.13+`
- `node -v`: `v10+`

### Run

From the root directory of this repo, run this script:

```sh
./tools/proto2jsonschema/gen.sh
```

This script:
- Installs protobuf tools: `protoc`
- Installs protobuf extension for JSON Schemas: `chrusty/protoc-gen-jsonschema`
- Clones `googlapis/googleapis`
- For every `data.proto` file, runs `protoc` to generate JSON schemas
  - Outputs generated JSON schemas in the `jsonschema` folder
- Runs a postgen script to clean up the outputted schemas

## Configure

There are no configuration options.
