#!/bin/bash

set -e

echo "- Gen catalog"
cd $(dirname $0)
npm i
node .
echo "- End"
