rm -r java-lib/src/main/java/com/google/



for file in $(find ./proto/ -name "*.proto")
do
    protoc -I=./proto -I=./third_party/googleapis \
    --java_out=lite:./java-lib/src/main/java/com/ \
    $file
done

for file in $(find ./third_party/googleapis/google/api -name "*.proto")
do
    protoc -I=./proto -I=./third_party/googleapis \
    --java_out=lite:./java-lib/src/main/java/ \
    $file
done

for file in $(find ./java-lib/src/main/ -name "*.java")
do
    sed -i '.bak' 's/google.events/com.google.events/g' $file
    # sed -i '.bak' 's/(google.events/(com.google.events/g' $file
done

# cd java-lib/
# mvn formatter:format

# option java_multiple_files = true;
# option java_outer_classname = "Foo";
# package foo.bar;
# option java_package = "com.example.foo.bar";
# option java_generic_services = false; ??


