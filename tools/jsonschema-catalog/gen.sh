#!/bin/bash

set -e

echo "- Catalog: Gen start"
cd $(dirname $0)
npm i
node .
echo "- Catalog: Gen end"
