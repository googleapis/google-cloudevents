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

# CAL
mkdir -p jsonschema_out/google/events/cloud/audit/v1/
$PROTOC \
--jsonschema_out=jsonschema_out/google/events/cloud/audit/v1/ \
--proto_path=third_party/googleapis \
--proto_path=proto/ \
google/events/cloud/audit/v1/data.proto

# Build
mkdir -p jsonschema_out/google/events/cloud/cloudbuild/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/cloud/cloudbuild/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/cloud/cloudbuild/v1/data.proto

# Firestore
mkdir -p jsonschema_out/google/events/cloud/firestore/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/cloud/firestore/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/cloud/firestore/v1/data.proto

# Pub/Sub
mkdir -p jsonschema_out/google/events/cloud/pubsub/v1/
$PROTOC \
--jsonschema_out=jsonschema_out/google/events/cloud/pubsub/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
google/events/cloud/pubsub/v1/data.proto

# Scheduler
mkdir -p jsonschema_out/google/events/cloud/scheduler/v1/
$PROTOC \
--jsonschema_out=jsonschema_out/google/events/cloud/scheduler/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
google/events/cloud/scheduler/v1/data.proto

# Storage
mkdir -p jsonschema_out/google/events/cloud/storage/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/cloud/storage/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/cloud/storage/v1/data.proto

# Firebase Analytics
mkdir -p jsonschema_out/google/events/firebase/analytics/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/firebase/analytics/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/firebase/analytics/v1/data.proto

# Firebase Auth
mkdir -p jsonschema_out/google/events/firebase/auth/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/firebase/auth/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/firebase/auth/v1/data.proto

# Firebase Database
mkdir -p jsonschema_out/google/events/firebase/database/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/firebase/database/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/firebase/database/v1/data.proto

# Firebase RC
mkdir -p jsonschema_out/google/events/firebase/remoteconfig/v1/
$PROTOC \
--jsonschema_out=proto_and_json_fieldnames:jsonschema_out/google/events/firebase/remoteconfig/v1/ \
--proto_path=proto/ \
--proto_path=proto/googleapis \
proto/google/events/firebase/remoteconfig/v1/data.proto

# Cleanup

## Rename .jsonschema output to .json
find jsonschema_out -name '*.jsonschema' -exec sh -c 'mv "$0" "${0%.jsonschema}.json"' {} \;

## Remove all non *Data.json files
find jsonschema_out -type f ! -name "*Data.json" -exec rm {} \;

echo "Done"
