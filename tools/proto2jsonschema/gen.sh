#!/bin/bash

set -e

# Only run in repo root
currentDir=${PWD##*/}

if [ "$currentDir" != "google-cloudevents" ] ; then
  echo "Error: Script must be run in google-cloudevents root.";
  exit 1;
fi

# Install protoc
case "$OSTYPE" in
  linux*)
    PROTOBUF_PLATFORM=linux-x86_64
    PROTOC=tmp/bin/protoc
    ;;
  win* | msys* | cygwin*)
    PROTOBUF_PLATFORM=win64
    PROTOC=tmp/bin/protoc.exe
    ;;
  darwin*)
    PROTOBUF_PLATFORM=osx-x86_64
    PROTOC=tmp/bin/protoc
    ;;
  *)
    echo "Unknown OSTYPE: $OSTYPE"
    exit 1
esac

rm -rf tmp
mkdir tmp
cd tmp
echo "- Downloading protobuf tools"
PROTOBUF_VERSION=3.12.3
curl -sSL \
  https://github.com/protocolbuffers/protobuf/releases/download/v$PROTOBUF_VERSION/protoc-$PROTOBUF_VERSION-$PROTOBUF_PLATFORM.zip \
  --output protobuf.zip
unzip -q protobuf.zip
cd ..

echo "- Setting up protoc plugin (chrusty/protoc-gen-jsonschema)"
go get -v github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema
go install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema

echo "- Converting protos to JSON Schemas"
chmod +x $PROTOC

# Clone googleapis dependency
cd proto
if [ ! -d "googleapis" ] ; then
  git clone https://github.com/googleapis/googleapis
fi
cd ..

# Generate JSON Schemas
OUT_DIR="jsonschema"

## Get all data.proto files
DATA_PROTOS=$(find proto/google/events -name "data.proto")
for proto in $DATA_PROTOS; do
  ## For each data.proto file, generate the jsonschema
  # proto e.g. proto/google/events/cloud/pubsub/v1/data.proto

  # Cut proto/ prefix
  PATH_PREFIX="proto/"
  PATH_PREFIX_LEN=$((1 + $(echo ${#PATH_PREFIX})))

  # e.g. google/events/cloud/pubsub/v1/data.proto
  CUT_PROTO=$(echo "$proto" | cut -c $PATH_PREFIX_LEN-)

  # e.g. google/events/cloud/pubsub/v1/
  PATH_POSTFIX="/data.proto"
  PATH_POSTFIX_LEN=$((1 + $(echo ${#PATH_POSTFIX})))
  CUT_PROTO_DIR=$(echo "$CUT_PROTO" | rev | cut -c $PATH_POSTFIX_LEN- | rev)
  echo "  - $CUT_PROTO_DIR"

  OUT_PROTO_DIR="$OUT_DIR"/"$CUT_PROTO_DIR"
  mkdir -p $OUT_PROTO_DIR
  
  # Run protoc
  # - Option: proto_and_json_fieldnames – use JSON field names (camelCase)
  # - Input: proto/ – our CloudEvent protos
  # - Input: googlapis/ – common googleapis protos
  $PROTOC \
  --jsonschema_out=proto_and_json_fieldnames:$OUT_PROTO_DIR \
  --proto_path=proto/ \
  --proto_path=third_party/googleapis \
  "$proto"
done

# Cleanup

## Rename .jsonschema output to .json
find $OUT_DIR -name '*.jsonschema' -exec sh -c 'mv "$0" "${0%.jsonschema}.json"' {} \;

## Remove all non *Data.json files
find $OUT_DIR -type f ! -name "*Data.json" -exec rm {} \;
echo "- Done with gen."

# Postgen
echo "- Postgen"
cd $(dirname $0)
npm i
node postgen.js
