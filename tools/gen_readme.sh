#!/bin/bash
cd ..
for f in $(find . -name 'data.proto' -or -name 'events.proto'); do
  # echo $f;
  c=$(grep 'csharp_namespace' $f)
  c_no_quotes=`echo "$c" | cut -d'"' -f 2`

  # Only print .data files
  STR=$f
  SUB="data.proto"
  if [[ "$STR" == *"$SUB"* ]]; then
    echo "- [$c_no_quotes]($f)"
  fi
done