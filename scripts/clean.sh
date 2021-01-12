#!/bin/bash
set -e

# Clean directory and cache
go clean -cache
rm -rf $GOPATH/src/github.com/

echo "Done"
