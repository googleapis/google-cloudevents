#!/bin/bash

set -e

# Convenience script to generate the event registry in README.md using 
# tools/Google.Events.Tools.GenerateRegistry

# Check we have exactly one command line argument
if [[ "$#" != 1 ]]
then
  echo "Expected a single command line argument: a path to the proto descriptor set"
  exit 1
fi

# Check the descriptor set exists
PROTO_DESCRIPTOR_SET=$1

if [[ ! -f $PROTO_DESCRIPTOR_SET ]]
then
  echo "Descriptor set file $PROTO_DESCRIPTOR_SET not found."
  exit 1
fi

# Check that dotnet exists
if ! which dotnet > /dev/null 2>&1
then
  echo "Please run in an environment with .NET Core SDK 3.1+ available"
  exit 1
fi

echo "Building event registry generator"
# Note: the command line flags here are all to just produce minimal output unless there's a problem
dotnet build -nologo -clp:NoSummary -v quiet tools/registry/Google.Events.Tools.GenerateRegistry

echo "Running event registry generator"
# Command line arguments to the registry generator:
# - Path to the protobuf file descriptor set (created in build.sh)
# - Path to the README.md to update
dotnet run --no-build -p tools/registry/Google.Events.Tools.GenerateRegistry \
  -- $PROTO_DESCRIPTOR_SET README.md
