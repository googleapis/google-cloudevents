# JSON Data

The JSON files within this directory hiearchy represent data
for the schema in the repository. The directory structure matches
that in the [proto](../proto) directory, namely the protobuf package
hierarchy.

Each JSON file should be named according to the CloudEvent data
protobuf message it represents, with an optional description suffix
starting with a `-`. Examples:

- `StorageObjectData.json`
- `DocumentEventData-simple.json`
- `DocumentEventData-complex.json`

When the proto schema is updated in a non-trivial way, either a new
JSON file should be created or an existing file should be modified,
to validate that the schema change is correct. The test file should
include whatever fields and messages are being added or modified.
Ideally, the test file should be created by observing an actual
CloudEvent, copying the event data, and removing any sensitive
information. 