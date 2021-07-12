# Google Events

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fgoogleapis%2Fgoogle-cloudevents%2Fbadge&style=flat)](https://actions-badge.atrox.dev/googleapis/google-cloudevents/goto)

This repository contains types for
[CloudEvents](https://cloudevents.io) issued by Google.

The "source of truth" for the event data format is in the form of
[Google Protocol Buffers](https://github.com/protocolbuffers/protobuf).

See [proto/README.md](proto/README.md) for more
information about the messages used to describe CloudEvents.

## Stability

The protobuf files in the [proto](proto/) directory should be
regarded as stable with no further breaking changes. Other files
such as generated JSON schema should not be regarded as stable.

## CloudEvents in this repository

This repository contains definitions for the following CloudEvents:

<!-- GENERATED START -->
|Product|Schemas|Types|
|-|-|-|
|Cloud Audit Logs|[Proto](proto/google/events/cloud/audit/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/audit/v1/LogEntryData.json)|<br>Data Type:<br>`google.events.cloud.audit.v1.LogEntryData`<br>CloudEvent Type(s):<br>`google.cloud.audit.log.v1.written`|
|Cloud Build|[Proto](proto/google/events/cloud/cloudbuild/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/cloudbuild/v1/BuildEventData.json)|<br>Data Type:<br>`google.events.cloud.cloudbuild.v1.BuildEventData`<br>CloudEvent Type(s):<br>`google.cloud.cloudbuild.build.v1.statusChanged`|
|Cloud Firestore|[Proto](proto/google/events/cloud/firestore/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/firestore/v1/DocumentEventData.json)|<br>Data Type:<br>`google.events.cloud.firestore.v1.DocumentEventData`<br>CloudEvent Type(s):<br>`google.cloud.firestore.document.v1.created`<br/>`google.cloud.firestore.document.v1.updated`<br/>`google.cloud.firestore.document.v1.deleted`<br/>`google.cloud.firestore.document.v1.written`|
|Cloud Pub/Sub|[Proto](proto/google/events/cloud/pubsub/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/pubsub/v1/MessagePublishedData.json)|<br>Data Type:<br>`google.events.cloud.pubsub.v1.MessagePublishedData`<br>CloudEvent Type(s):<br>`google.cloud.pubsub.topic.v1.messagePublished`|
|Cloud Scheduler|[Proto](proto/google/events/cloud/scheduler/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/scheduler/v1/SchedulerJobData.json)|<br>Data Type:<br>`google.events.cloud.scheduler.v1.SchedulerJobData`<br>CloudEvent Type(s):<br>`google.cloud.scheduler.job.v1.executed`|
|Cloud Storage|[Proto](proto/google/events/cloud/storage/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/storage/v1/StorageObjectData.json)|<br>Data Type:<br>`google.events.cloud.storage.v1.StorageObjectData`<br>CloudEvent Type(s):<br>`google.cloud.storage.object.v1.finalized`<br/>`google.cloud.storage.object.v1.archived`<br/>`google.cloud.storage.object.v1.deleted`<br/>`google.cloud.storage.object.v1.metadataUpdated`|
|Google Analytics for Firebase|[Proto](proto/google/events/firebase/analytics/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/analytics/v1/AnalyticsLogData.json)|<br>Data Type:<br>`google.events.firebase.analytics.v1.AnalyticsLogData`<br>CloudEvent Type(s):<br>`google.firebase.analytics.log.v1.written`|
|Firebase Authentication|[Proto](proto/google/events/firebase/auth/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/auth/v1/AuthEventData.json)|<br>Data Type:<br>`google.events.firebase.auth.v1.AuthEventData`<br>CloudEvent Type(s):<br>`google.firebase.auth.user.v1.created`<br/>`google.firebase.auth.user.v1.deleted`|
|Firebase Realtime Database|[Proto](proto/google/events/firebase/database/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/database/v1/ReferenceEventData.json)|<br>Data Type:<br>`google.events.firebase.database.v1.ReferenceEventData`<br>CloudEvent Type(s):<br>`google.firebase.database.ref.v1.created`<br/>`google.firebase.database.ref.v1.updated`<br/>`google.firebase.database.ref.v1.deleted`<br/>`google.firebase.database.ref.v1.written`|
|Firebase Remote Config|[Proto](proto/google/events/firebase/remoteconfig/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/remoteconfig/v1/RemoteConfigEventData.json)|<br>Data Type:<br>`google.events.firebase.remoteconfig.v1.RemoteConfigEventData`<br>CloudEvent Type(s):<br>`google.firebase.remoteconfig.remoteConfig.v1.updated`|
<!-- GENERATED END -->

## Google CloudEvent Catalogs

This repository contains catalogs for Google CloudEvent event discovery:

### Google CloudEvent JSON Schema catalog

Link: [`catalog.json`](./jsonschema/catalog.json)

A machine-readable list of Google CloudEvent JSON schemas. In the format of a [JSON Schema catalog](https://json.schemastore.org/schema-catalog).

### Cloud Audit Log catalog

Link: [`AUDIT_CATALOG.md`](./AUDIT_CATALOG.md)

A human-readable list of Audit Log `methodName` and `serviceName` event filters.

Used for filtering events of type `google.cloud.audit.log.v1.written`.

## Google CloudEvent Type Libraries

The following repositories contain data structures per language for types defined in this repo:

- [Node.js](https://github.com/googleapis/google-cloudevents-nodejs)
- [Python](https://github.com/googleapis/google-cloudevents-python)
- [Go](https://github.com/googleapis/google-cloudevents-go)
- [Java](https://github.com/googleapis/google-cloudevents-java)
- [PHP](https://github.com/googleapis/google-cloudevents-php)
- [Ruby](https://github.com/googleapis/google-cloudevents-ruby)
- [.NET](https://github.com/googleapis/google-cloudevents-dotnet)
