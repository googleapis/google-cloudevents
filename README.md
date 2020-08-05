# Google Events

[![Build Status](https://travis-ci.org/googleapis/google-cloudevents.svg?branch=master)](https://travis-ci.org/googleapis/google-cloudevents)

This repository contains types for
[CloudEvents](https://cloudevents.io) issued by Google.

The "source of truth" for the event data format is in the form of
[Google Protocol Buffers](https://github.com/protocolbuffers/protobuf).

See [proto/README.md](proto/README.md) for more
information about the messages used to describe CloudEvents.

## Stability warning

The entire content of this repository should be regarded as highly
unstable until this warning is removed. The schema may change, the
CloudEvent "type" attribute values may change, the protobuf message
may change. Even the core `cloud_event_type` annotation may change.

## CloudEvents in this repository

This repository contains definitions for the following CloudEvents:

|Package|Event types|Data messages|
|-|-|-|
|[google.events.cloud.audit.v1](proto/google/events/cloud/audit/v1)|google.cloud.audit.log.v1.written|AuditLogData|
|[google.events.cloud.build.v1](proto/google/events/cloud/build/v1)|google.cloud.build.build.v1.statusChanged|BuildEventData|
|[google.events.cloud.firestore.v1](proto/google/events/cloud/firestore/v1)|google.cloud.firestore.document.v1.created<br/>google.cloud.firestore.document.v1.deleted<br/>google.cloud.firestore.document.v1.updated<br/>google.cloud.firestore.document.v1.written|DocumentEventData|
|[google.events.cloud.pubsub.v1](proto/google/events/cloud/pubsub/v1)|google.cloud.pubsub.topic.v1.messagePublished|MessagePublishedData|
|[google.events.cloud.scheduler.v1](proto/google/events/cloud/scheduler/v1)|google.cloud.scheduler.job.v1.executed|SchedulerJobData|
|[google.events.cloud.storage.v1](proto/google/events/cloud/storage/v1)|google.cloud.storage.object.v1.archived<br/>google.cloud.storage.object.v1.deleted<br/>google.cloud.storage.object.v1.finalized<br/>google.cloud.storage.object.v1.metadataUpdated|StorageObjectData|
|[google.events.firebase.v1](proto/google/events/firebase/v1)|google.firebase.database.document.v1.created<br/>google.firebase.database.document.v1.deleted<br/>google.firebase.database.document.v1.updated<br/>google.firebase.database.document.v1.written|DocumentEventData|

## CloudEvent Type Repos

The following repositories contain data structures per language for types defined in this repo:

- [Node.js](https://github.com/googleapis/google-cloudevents-nodejs)
- [Python](https://github.com/googleapis/google-cloudevents-python)
- [Go](https://github.com/googleapis/google-cloudevents-go)
- [Java](https://github.com/googleapis/google-cloudevents-java)
- [PHP](https://github.com/googleapis/google-cloudevents-php)
- [Ruby](https://github.com/googleapis/google-cloudevents-ruby)
- [.NET](https://github.com/googleapis/google-cloudevents-dotnet)

## Contributing to this repository

Changes to this repository are expected to be performed after
arriving at mutual consensus within Google (although pull requests
may be used to arrive at that consensus).

Pull requests that involve a change to the event registry above must
update this file accordingly, for consistency. This will be
validated within the pull request checks. This can either be done by
running the following commands below a machine with .NET Core SDK
3.1+ installed, or by making the changes manually:

```sh
./compile.sh
./generate-event-registry.sh tmp/protos.pb
```
