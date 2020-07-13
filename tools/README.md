# Tools

The tools in this directory are not required in order to *use* the
rest of the content of this repository. They are present to help
create or maintain the content.

While they are *currently* written in C#, requiring .NET Core 3.1 to
build and run, this is purely incidental. Pull requests to rewrite
the tools in languages more commonly used at Google (e.g. Java, Go
or Python) are welcome.

## Google.Events.Tools.GenerateRegistry

This tool edits the top-level [README](../README.md) to maintain the
event registry. It requires that the protobuf descriptor set (a
protobuf representation of all the .proto files) is already
compiled via protoc. (The [root compile.sh script](../compile.sh)
does this.)
