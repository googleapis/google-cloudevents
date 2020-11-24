# Google Events

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fgoogleapis%2Fgoogle-cloudevents%2Fbadge&style=flat)](https://actions-badge.atrox.dev/googleapis/google-cloudevents/goto)

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

|Product|Package|Event types|Data messages|
|-|-|-|-|
|Cloud Audit Logs|[google.events.cloud.audit.v1](proto/google/events/cloud/audit/v1)|google.cloud.audit.log.v1.written|LogEntryData|
|Cloud Build|[google.events.cloud.cloudbuild.v1](proto/google/events/cloud/cloudbuild/v1)|google.cloud.cloudbuild.build.v1.statusChanged|BuildEventData|
|Cloud Firestore|[google.events.cloud.firestore.v1](proto/google/events/cloud/firestore/v1)|google.cloud.firestore.document.v1.created<br/>google.cloud.firestore.document.v1.deleted<br/>google.cloud.firestore.document.v1.updated<br/>google.cloud.firestore.document.v1.written|DocumentEventData|
|Cloud Pub/Sub|[google.events.cloud.pubsub.v1](proto/google/events/cloud/pubsub/v1)|google.cloud.pubsub.topic.v1.messagePublished|MessagePublishedData|
|Cloud Scheduler|[google.events.cloud.scheduler.v1](proto/google/events/cloud/scheduler/v1)|google.cloud.scheduler.job.v1.executed|SchedulerJobData|
|Cloud Storage|[google.events.cloud.storage.v1](proto/google/events/cloud/storage/v1)|google.cloud.storage.object.v1.archived<br/>google.cloud.storage.object.v1.deleted<br/>google.cloud.storage.object.v1.finalized<br/>google.cloud.storage.object.v1.metadataUpdated|StorageObjectData|
|Google Analytics for Firebase|[google.events.firebase.analytics.v1](proto/google/events/firebase/analytics/v1)|google.firebase.analytics.log.v1.written|AnalyticsLogData|
|Firebase Authentication|[google.events.firebase.auth.v1](proto/google/events/firebase/auth/v1)|google.firebase.auth.user.v1.created<br/>google.firebase.auth.user.v1.deleted|AuthEventData|
|Firebase Realtime Database|[google.events.firebase.database.v1](proto/google/events/firebase/database/v1)|google.firebase.database.ref.v1.created<br/>google.firebase.database.ref.v1.deleted<br/>google.firebase.database.ref.v1.updated<br/>google.firebase.database.ref.v1.written|ReferenceEventData|
|Firebase Remote Config|[google.events.firebase.remoteconfig.v1](proto/google/events/firebase/remoteconfig/v1)|google.firebase.remoteconfig.remoteConfig.v1.updated|RemoteConfigEventData|

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
validated within the pull request checks.

This can either be done by running the following command below a
machine with Go 1.14+ and Node 12+:

```sh
./scripts/gen.sh
```

Non-trivial changes to the schema should also include a suitable
test data file (or a change to an existing test data file) to
validate the change. See [testdata/README.md](testdata/README.md)
for details.
