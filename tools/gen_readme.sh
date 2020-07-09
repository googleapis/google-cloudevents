#!/bin/bash
cd ..
for f in $(find . -name 'data.proto' -or -name 'events.proto'); do
  # echo $f;
  c=$(grep 'package' $f)
  # c_no_quotes=`echo "$c" | cut -d'"' -f 2`

  # Only print .data files
  STR=$f
  SUB="data.proto"
  if [[ "$STR" == *"$SUB"* ]]; then
    # Trim off text "package " and ";""
    package=${c:8:${#c}-9}
    echo "- [$package]($f)"
  fi
done