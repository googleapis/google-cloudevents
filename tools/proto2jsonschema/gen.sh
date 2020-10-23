#!/bin/bash

set -e

PROTOBUF_VERSION=3.12.3

# Validates that the protos in this repo can be compiled.

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
echo "Downloading protobuf tools"
curl -sSL \
  https://github.com/protocolbuffers/protobuf/releases/download/v$PROTOBUF_VERSION/protoc-$PROTOBUF_VERSION-$PROTOBUF_PLATFORM.zip \
  --output protobuf.zip
unzip -q protobuf.zip
cd ..

echo "Setting up protoc plugin (chrusty/protoc-gen-jsonschema)"
go get -v github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema
go install github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema

echo "Converting Protos to JSON Schemas"
chmod +x $PROTOC

# Clone googleapis dependency
cd proto
if [ ! -d "googleapis" ] ; then
  git clone https://github.com/googleapis/googleapis
fi
cd ..

# Generate JSON Schemas

# Pub/Sub – WORKS
# mkdir -p jsonschema_out/google/events/cloud/pubsub/v1/
# $PROTOC \
# --jsonschema_out=jsonschema_out/google/events/cloud/pubsub/v1/ \
# --proto_path=proto/ \
# --proto_path=proto/googleapis \
# google/events/cloud/pubsub/v1/data.proto

# CAL – HANGS
mkdir -p jsonschema_out/google/events/cloud/audit/v1/

$PROTOC \
--jsonschema_out=jsonschema_out/google/events/cloud/audit/v1/ \
--proto_path=third_party/googleapis \
google/api/monitored_resource.proto \
--proto_path=proto/ \
google/events/cloud/audit/v1/events.proto

# HANGS
# mkdir -p jsonschema_out/google/events/cloud/audit/v1/
# $PROTOC \
# --jsonschema_out=jsonschema_out/google/events/cloud/audit/v1/ \
# --proto_path=proto/google \
# --proto_path=proto/googleapis \
# proto/google/events/cloud/audit/v1/data.proto

# $PROTOC \
# --jsonschema_out=jsonschema_out \
# --proto_path=proto/google \
# --proto_path=proto/googleapis \
# proto/google/events/cloud/storage/v1/data.proto

# Cleanup

## Rename .jsonschema output to .json
find jsonschema_out -name '*.jsonschema' -exec sh -c 'mv "$0" "${0%.jsonschema}.json"' {} \;

## Remove all non *Data.json files
find jsonschema_out -type f ! -name "*Data.json" -exec rm {} \;

echo "Done"
