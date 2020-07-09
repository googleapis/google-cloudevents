#!/bin/bash
cd ..
for f in $(find . -name 'data.proto' -or -name 'events.proto'); do
  package_string=$(grep 'package' $f)

  # Only print .data files
  STR=$f
  SUB="data.proto"
  if [[ "$STR" == *"$SUB"* ]]; then
    # Trim off text "package " and ";""
    package=${package_string:8:${#package_string}-9}
    echo "- [$package]($f)"
  fi
done