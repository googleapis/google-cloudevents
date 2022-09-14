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

PROTOBUF_VERSION=3.15.0
rm -rf tmp
mkdir tmp
cd tmp
echo "- Downloading protobuf@$PROTOBUF_VERSION"
curl -sSL \
  https://github.com/protocolbuffers/protobuf/releases/download/v$PROTOBUF_VERSION/protoc-$PROTOBUF_VERSION-$PROTOBUF_PLATFORM.zip \
  --output protobuf.zip
unzip -q protobuf.zip
cd ..

PROTOC_PLUGIN_VERSION=1.3.1
echo "- Setting up protoc plugin: chrusty/protoc-gen-jsonschema@$PROTOC_PLUGIN_VERSION"
# Pin chrusty tool to specific version: https://github.com/chrusty/protoc-gen-jsonschema/tags
GO111MODULE=on go get -v github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@$PROTOC_PLUGIN_VERSION

echo "- Converting protos to JSON Schemas"
chmod +x $PROTOC

# Generate JSON Schemas
OUT_DIR="jsonschema"

## Get all data.proto files
DATA_PROTOS=$(find proto/google/events -name "data.proto")
for proto in $DATA_PROTOS; do
  ## For each data.proto file, generate the jsonschema
  # proto e.g. proto/google/events/cloud/pubsub/v1/data.proto

  # Remove proto/ prefix
  PATH_PREFIX="proto/"
  CUT_PROTO=${proto#"$PATH_PREFIX"}

  # e.g. google/events/cloud/pubsub/v1/
  PATH_POSTFIX="/data.proto"
  CUT_PROTO_DIR=${CUT_PROTO%"$PATH_POSTFIX"}
  echo "  - $CUT_PROTO_DIR"

  OUT_PROTO_DIR="$OUT_DIR"/"$CUT_PROTO_DIR"
  mkdir -p $OUT_PROTO_DIR
  
  # Run protoc
  # - Option: json_fieldnames – use JSON field names (camelCase)
  # - Input: proto/ – our CloudEvent protos
  # - Input: googlapis/ – common googleapis protos
  $PROTOC \
  --jsonschema_out=json_fieldnames,disallow_bigints_as_strings:$OUT_PROTO_DIR \
  --proto_path=proto/ \
  --proto_path=third_party/googleapis \
  "$proto"
done

# Cleanup

## Remove all non *Data.json files
find $OUT_DIR -type f ! -name "*Data.json" -exec rm {} \;
echo "- Done with gen."

# Postgen
echo "- Postgen: Start"
cd $(dirname $0)
npm i
node postgen.js
echo "- Postgen: End"
