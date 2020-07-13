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
    PROTOC=tmp/protobuf/bin/protoc
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

echo "Compiling protos as a descriptor set"
chmod +x $PROTOC

$PROTOC \
  -I tmp/include \
  -I third_party/googleapis \
  -I proto \
  $(find proto -name '*.proto') \
  --descriptor_set_out=tmp/protos.pb

echo "Done"
