# Google Events

[![Compile](https://github.com/googleapis/google-cloudevents/actions/workflows/compile.yaml/badge.svg)](https://github.com/googleapis/google-cloudevents/actions/workflows/compile.yaml) [![Validate JSON Schemas](https://github.com/googleapis/google-cloudevents/actions/workflows/validate_jsonschemas.yaml/badge.svg)](https://github.com/googleapis/google-cloudevents/actions/workflows/validate_jsonschemas.yaml)

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

This repository contains definitions for the following CloudEvent data payloads:

<!-- GENERATED START -->
|Product|Schemas|Types|
|-|-|-|
|API Gateway|[Proto](proto/google/events/cloud/apigateway/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigateway/v1/ApiConfigEventData.json)|<br>Data Type:<br>`google.events.cloud.apigateway.v1.ApiConfigEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigateway.apiConfig.v1.created`<br/>`google.cloud.apigateway.apiConfig.v1.updated`<br/>`google.cloud.apigateway.apiConfig.v1.deleted`|
|API Gateway|[Proto](proto/google/events/cloud/apigateway/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigateway/v1/ApiEventData.json)|<br>Data Type:<br>`google.events.cloud.apigateway.v1.ApiEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigateway.api.v1.created`<br/>`google.cloud.apigateway.api.v1.updated`<br/>`google.cloud.apigateway.api.v1.deleted`|
|API Gateway|[Proto](proto/google/events/cloud/apigateway/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigateway/v1/GatewayEventData.json)|<br>Data Type:<br>`google.events.cloud.apigateway.v1.GatewayEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigateway.gateway.v1.created`<br/>`google.cloud.apigateway.gateway.v1.updated`<br/>`google.cloud.apigateway.gateway.v1.deleted`|
|Apigee Registry|[Proto](proto/google/events/cloud/apigeeregistry/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigeeregistry/v1/ApiDeploymentEventData.json)|<br>Data Type:<br>`google.events.cloud.apigeeregistry.v1.ApiDeploymentEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigeeregistry.apiDeployment.v1.created`<br/>`google.cloud.apigeeregistry.apiDeployment.v1.updated`<br/>`google.cloud.apigeeregistry.apiDeployment.v1.deleted`|
|Apigee Registry|[Proto](proto/google/events/cloud/apigeeregistry/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigeeregistry/v1/ApiEventData.json)|<br>Data Type:<br>`google.events.cloud.apigeeregistry.v1.ApiEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigeeregistry.api.v1.created`<br/>`google.cloud.apigeeregistry.api.v1.updated`<br/>`google.cloud.apigeeregistry.api.v1.deleted`|
|Apigee Registry|[Proto](proto/google/events/cloud/apigeeregistry/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigeeregistry/v1/ApiSpecEventData.json)|<br>Data Type:<br>`google.events.cloud.apigeeregistry.v1.ApiSpecEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigeeregistry.apiSpec.v1.created`<br/>`google.cloud.apigeeregistry.apiSpec.v1.updated`<br/>`google.cloud.apigeeregistry.apiSpec.v1.deleted`|
|Apigee Registry|[Proto](proto/google/events/cloud/apigeeregistry/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigeeregistry/v1/ApiVersionEventData.json)|<br>Data Type:<br>`google.events.cloud.apigeeregistry.v1.ApiVersionEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigeeregistry.apiVersion.v1.created`<br/>`google.cloud.apigeeregistry.apiVersion.v1.updated`<br/>`google.cloud.apigeeregistry.apiVersion.v1.deleted`|
|Apigee Registry|[Proto](proto/google/events/cloud/apigeeregistry/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/apigeeregistry/v1/InstanceEventData.json)|<br>Data Type:<br>`google.events.cloud.apigeeregistry.v1.InstanceEventData`<br>CloudEvent Type(s):<br>`google.cloud.apigeeregistry.instance.v1.created`<br/>`google.cloud.apigeeregistry.instance.v1.deleted`|
|Cloud Audit Logs|[Proto](proto/google/events/cloud/audit/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/audit/v1/LogEntryData.json)|<br>Data Type:<br>`google.events.cloud.audit.v1.LogEntryData`<br>CloudEvent Type(s):<br>`google.cloud.audit.log.v1.written`|
|BeyondCorp|[Proto](proto/google/events/cloud/beyondcorp/appconnections/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/beyondcorp/appconnections/v1/AppConnectionEventData.json)|<br>Data Type:<br>`google.events.cloud.beyondcorp.appconnections.v1.AppConnectionEventData`<br>CloudEvent Type(s):<br>`google.cloud.beyondcorp.appconnections.appConnection.v1.created`<br/>`google.cloud.beyondcorp.appconnections.appConnection.v1.updated`<br/>`google.cloud.beyondcorp.appconnections.appConnection.v1.deleted`|
|BeyondCorp|[Proto](proto/google/events/cloud/beyondcorp/appconnectors/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/beyondcorp/appconnectors/v1/AppConnectorEventData.json)|<br>Data Type:<br>`google.events.cloud.beyondcorp.appconnectors.v1.AppConnectorEventData`<br>CloudEvent Type(s):<br>`google.cloud.beyondcorp.appconnectors.appConnector.v1.created`<br/>`google.cloud.beyondcorp.appconnectors.appConnector.v1.updated`<br/>`google.cloud.beyondcorp.appconnectors.appConnector.v1.deleted`|
|BeyondCorp|[Proto](proto/google/events/cloud/beyondcorp/appgateways/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/beyondcorp/appgateways/v1/AppGatewayEventData.json)|<br>Data Type:<br>`google.events.cloud.beyondcorp.appgateways.v1.AppGatewayEventData`<br>CloudEvent Type(s):<br>`google.cloud.beyondcorp.appgateways.appGateway.v1.created`<br/>`google.cloud.beyondcorp.appgateways.appGateway.v1.deleted`|
|BeyondCorp|[Proto](proto/google/events/cloud/beyondcorp/clientconnectorservices/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/beyondcorp/clientconnectorservices/v1/ClientConnectorServiceEventData.json)|<br>Data Type:<br>`google.events.cloud.beyondcorp.clientconnectorservices.v1.ClientConnectorServiceEventData`<br>CloudEvent Type(s):<br>`google.cloud.beyondcorp.clientconnectorservices.clientConnectorService.v1.created`<br/>`google.cloud.beyondcorp.clientconnectorservices.clientConnectorService.v1.updated`<br/>`google.cloud.beyondcorp.clientconnectorservices.clientConnectorService.v1.deleted`|
|BeyondCorp|[Proto](proto/google/events/cloud/beyondcorp/clientgateways/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/beyondcorp/clientgateways/v1/ClientGatewayEventData.json)|<br>Data Type:<br>`google.events.cloud.beyondcorp.clientgateways.v1.ClientGatewayEventData`<br>CloudEvent Type(s):<br>`google.cloud.beyondcorp.clientgateways.clientGateway.v1.created`<br/>`google.cloud.beyondcorp.clientgateways.clientGateway.v1.deleted`|
|Certificate Manager|[Proto](proto/google/events/cloud/certificatemanager/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/certificatemanager/v1/CertificateEventData.json)|<br>Data Type:<br>`google.events.cloud.certificatemanager.v1.CertificateEventData`<br>CloudEvent Type(s):<br>`google.cloud.certificatemanager.certificate.v1.created`<br/>`google.cloud.certificatemanager.certificate.v1.updated`<br/>`google.cloud.certificatemanager.certificate.v1.deleted`|
|Certificate Manager|[Proto](proto/google/events/cloud/certificatemanager/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/certificatemanager/v1/CertificateIssuanceConfigEventData.json)|<br>Data Type:<br>`google.events.cloud.certificatemanager.v1.CertificateIssuanceConfigEventData`<br>CloudEvent Type(s):<br>`google.cloud.certificatemanager.certificateIssuanceConfig.v1.created`<br/>`google.cloud.certificatemanager.certificateIssuanceConfig.v1.deleted`|
|Certificate Manager|[Proto](proto/google/events/cloud/certificatemanager/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/certificatemanager/v1/CertificateMapEntryEventData.json)|<br>Data Type:<br>`google.events.cloud.certificatemanager.v1.CertificateMapEntryEventData`<br>CloudEvent Type(s):<br>`google.cloud.certificatemanager.certificateMapEntry.v1.created`<br/>`google.cloud.certificatemanager.certificateMapEntry.v1.updated`<br/>`google.cloud.certificatemanager.certificateMapEntry.v1.deleted`|
|Certificate Manager|[Proto](proto/google/events/cloud/certificatemanager/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/certificatemanager/v1/CertificateMapEventData.json)|<br>Data Type:<br>`google.events.cloud.certificatemanager.v1.CertificateMapEventData`<br>CloudEvent Type(s):<br>`google.cloud.certificatemanager.certificateMap.v1.created`<br/>`google.cloud.certificatemanager.certificateMap.v1.updated`<br/>`google.cloud.certificatemanager.certificateMap.v1.deleted`|
|Certificate Manager|[Proto](proto/google/events/cloud/certificatemanager/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/certificatemanager/v1/DnsAuthorizationEventData.json)|<br>Data Type:<br>`google.events.cloud.certificatemanager.v1.DnsAuthorizationEventData`<br>CloudEvent Type(s):<br>`google.cloud.certificatemanager.dnsAuthorization.v1.created`<br/>`google.cloud.certificatemanager.dnsAuthorization.v1.updated`<br/>`google.cloud.certificatemanager.dnsAuthorization.v1.deleted`|
|Cloud Build|[Proto](proto/google/events/cloud/cloudbuild/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/cloudbuild/v1/BuildEventData.json)|<br>Data Type:<br>`google.events.cloud.cloudbuild.v1.BuildEventData`<br>CloudEvent Type(s):<br>`google.cloud.cloudbuild.build.v1.statusChanged`|
|Database Migration|[Proto](proto/google/events/cloud/clouddms/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/clouddms/v1/ConnectionProfileEventData.json)|<br>Data Type:<br>`google.events.cloud.clouddms.v1.ConnectionProfileEventData`<br>CloudEvent Type(s):<br>`google.cloud.clouddms.connectionProfile.v1.created`<br/>`google.cloud.clouddms.connectionProfile.v1.updated`<br/>`google.cloud.clouddms.connectionProfile.v1.deleted`|
|Database Migration|[Proto](proto/google/events/cloud/clouddms/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/clouddms/v1/MigrationJobEventData.json)|<br>Data Type:<br>`google.events.cloud.clouddms.v1.MigrationJobEventData`<br>CloudEvent Type(s):<br>`google.cloud.clouddms.migrationJob.v1.created`<br/>`google.cloud.clouddms.migrationJob.v1.updated`<br/>`google.cloud.clouddms.migrationJob.v1.deleted`|
|Cloud Dataflow|[Proto](proto/google/events/cloud/dataflow/v1beta3/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/dataflow/v1beta3/JobEventData.json)|<br>Data Type:<br>`google.events.cloud.dataflow.v1beta3.JobEventData`<br>CloudEvent Type(s):<br>`google.cloud.dataflow.job.v1beta3.statusChanged`|
|Cloud Data Fusion|[Proto](proto/google/events/cloud/datafusion/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/datafusion/v1/DnsPeeringEventData.json)|<br>Data Type:<br>`google.events.cloud.datafusion.v1.DnsPeeringEventData`<br>CloudEvent Type(s):<br>`google.cloud.datafusion.dnsPeering.v1.created`<br/>`google.cloud.datafusion.dnsPeering.v1.deleted`|
|Cloud Data Fusion|[Proto](proto/google/events/cloud/datafusion/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/datafusion/v1/InstanceEventData.json)|<br>Data Type:<br>`google.events.cloud.datafusion.v1.InstanceEventData`<br>CloudEvent Type(s):<br>`google.cloud.datafusion.instance.v1.created`<br/>`google.cloud.datafusion.instance.v1.deleted`<br/>`google.cloud.datafusion.instance.v1.updated`|
|Datastream|[Proto](proto/google/events/cloud/datastream/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/datastream/v1/ConnectionProfileEventData.json)|<br>Data Type:<br>`google.events.cloud.datastream.v1.ConnectionProfileEventData`<br>CloudEvent Type(s):<br>`google.cloud.datastream.connectionProfile.v1.created`<br/>`google.cloud.datastream.connectionProfile.v1.updated`<br/>`google.cloud.datastream.connectionProfile.v1.deleted`|
|Datastream|[Proto](proto/google/events/cloud/datastream/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/datastream/v1/PrivateConnectionEventData.json)|<br>Data Type:<br>`google.events.cloud.datastream.v1.PrivateConnectionEventData`<br>CloudEvent Type(s):<br>`google.cloud.datastream.privateConnection.v1.created`<br/>`google.cloud.datastream.privateConnection.v1.deleted`|
|Datastream|[Proto](proto/google/events/cloud/datastream/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/datastream/v1/RouteEventData.json)|<br>Data Type:<br>`google.events.cloud.datastream.v1.RouteEventData`<br>CloudEvent Type(s):<br>`google.cloud.datastream.route.v1.created`<br/>`google.cloud.datastream.route.v1.deleted`|
|Datastream|[Proto](proto/google/events/cloud/datastream/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/datastream/v1/StreamEventData.json)|<br>Data Type:<br>`google.events.cloud.datastream.v1.StreamEventData`<br>CloudEvent Type(s):<br>`google.cloud.datastream.stream.v1.created`<br/>`google.cloud.datastream.stream.v1.updated`<br/>`google.cloud.datastream.stream.v1.deleted`|
|Eventarc|[Proto](proto/google/events/cloud/eventarc/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/eventarc/v1/ChannelConnectionEventData.json)|<br>Data Type:<br>`google.events.cloud.eventarc.v1.ChannelConnectionEventData`<br>CloudEvent Type(s):<br>`google.cloud.eventarc.channelConnection.v1.created`<br/>`google.cloud.eventarc.channelConnection.v1.deleted`|
|Eventarc|[Proto](proto/google/events/cloud/eventarc/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/eventarc/v1/ChannelEventData.json)|<br>Data Type:<br>`google.events.cloud.eventarc.v1.ChannelEventData`<br>CloudEvent Type(s):<br>`google.cloud.eventarc.channel.v1.created`<br/>`google.cloud.eventarc.channel.v1.updated`<br/>`google.cloud.eventarc.channel.v1.deleted`|
|Eventarc|[Proto](proto/google/events/cloud/eventarc/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/eventarc/v1/TriggerEventData.json)|<br>Data Type:<br>`google.events.cloud.eventarc.v1.TriggerEventData`<br>CloudEvent Type(s):<br>`google.cloud.eventarc.trigger.v1.created`<br/>`google.cloud.eventarc.trigger.v1.updated`<br/>`google.cloud.eventarc.trigger.v1.deleted`|
|Cloud Firestore|[Proto](proto/google/events/cloud/firestore/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/firestore/v1/DocumentEventData.json)|<br>Data Type:<br>`google.events.cloud.firestore.v1.DocumentEventData`<br>CloudEvent Type(s):<br>`google.cloud.firestore.document.v1.created`<br/>`google.cloud.firestore.document.v1.updated`<br/>`google.cloud.firestore.document.v1.deleted`<br/>`google.cloud.firestore.document.v1.written`|
|Cloud Functions|[Proto](proto/google/events/cloud/functions/v2/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/functions/v2/FunctionEventData.json)|<br>Data Type:<br>`google.events.cloud.functions.v2.FunctionEventData`<br>CloudEvent Type(s):<br>`google.cloud.functions.function.v2.created`<br/>`google.cloud.functions.function.v2.updated`<br/>`google.cloud.functions.function.v2.deleted`|
|Cloud IoT|[Proto](proto/google/events/cloud/iot/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/iot/v1/DeviceEventData.json)|<br>Data Type:<br>`google.events.cloud.iot.v1.DeviceEventData`<br>CloudEvent Type(s):<br>`google.cloud.iot.v1.DeviceManager.CreateDevice`<br/>`google.cloud.iot.v1.DeviceManager.UpdateDevice`<br/>`google.cloud.iot.v1.DeviceManager.DeleteDevice`|
|Cloud IoT|[Proto](proto/google/events/cloud/iot/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/iot/v1/RegistryEventData.json)|<br>Data Type:<br>`google.events.cloud.iot.v1.RegistryEventData`<br>CloudEvent Type(s):<br>`google.cloud.iot.v1.DeviceManager.CreateDeviceRegistry`<br/>`google.cloud.iot.v1.DeviceManager.UpdateDeviceRegistry`<br/>`google.cloud.iot.v1.DeviceManager.DeleteDeviceRegistry`|
|Cloud Memorystore for Memcached|[Proto](proto/google/events/cloud/memcache/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/memcache/v1/InstanceEventData.json)|<br>Data Type:<br>`google.events.cloud.memcache.v1.InstanceEventData`<br>CloudEvent Type(s):<br>`google.cloud.memcache.instance.v1.created`<br/>`google.cloud.memcache.instance.v1.updated`<br/>`google.cloud.memcache.instance.v1.deleted`|
|Cloud Pub/Sub|[Proto](proto/google/events/cloud/pubsub/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/pubsub/v1/MessagePublishedData.json)|<br>Data Type:<br>`google.events.cloud.pubsub.v1.MessagePublishedData`<br>CloudEvent Type(s):<br>`google.cloud.pubsub.topic.v1.messagePublished`|
|Cloud Scheduler|[Proto](proto/google/events/cloud/scheduler/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/scheduler/v1/SchedulerJobData.json)|<br>Data Type:<br>`google.events.cloud.scheduler.v1.SchedulerJobData`<br>CloudEvent Type(s):<br>`google.cloud.scheduler.job.v1.executed`|
|Cloud Storage|[Proto](proto/google/events/cloud/storage/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/storage/v1/StorageObjectData.json)|<br>Data Type:<br>`google.events.cloud.storage.v1.StorageObjectData`<br>CloudEvent Type(s):<br>`google.cloud.storage.object.v1.finalized`<br/>`google.cloud.storage.object.v1.archived`<br/>`google.cloud.storage.object.v1.deleted`<br/>`google.cloud.storage.object.v1.metadataUpdated`|
|Workflows|[Proto](proto/google/events/cloud/workflows/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/cloud/workflows/v1/WorkflowEventData.json)|<br>Data Type:<br>`google.events.cloud.workflows.v1.WorkflowEventData`<br>CloudEvent Type(s):<br>`google.cloud.workflows.workflow.v1.created`<br/>`google.cloud.workflows.workflow.v1.deleted`<br/>`google.cloud.workflows.workflow.v1.updated`|
|Google Analytics for Firebase|[Proto](proto/google/events/firebase/analytics/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/analytics/v1/AnalyticsLogData.json)|<br>Data Type:<br>`google.events.firebase.analytics.v1.AnalyticsLogData`<br>CloudEvent Type(s):<br>`google.firebase.analytics.log.v1.written`|
|Firebase Authentication|[Proto](proto/google/events/firebase/auth/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/auth/v1/AuthEventData.json)|<br>Data Type:<br>`google.events.firebase.auth.v1.AuthEventData`<br>CloudEvent Type(s):<br>`google.firebase.auth.user.v1.created`<br/>`google.firebase.auth.user.v1.deleted`|
|Firebase Realtime Database|[Proto](proto/google/events/firebase/database/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/database/v1/ReferenceEventData.json)|<br>Data Type:<br>`google.events.firebase.database.v1.ReferenceEventData`<br>CloudEvent Type(s):<br>`google.firebase.database.ref.v1.created`<br/>`google.firebase.database.ref.v1.updated`<br/>`google.firebase.database.ref.v1.deleted`<br/>`google.firebase.database.ref.v1.written`|
|Firebase Alerts|[Proto](proto/google/events/firebase/firebasealerts/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/firebasealerts/v1/AlertData.json)|<br>Data Type:<br>`google.events.firebase.firebasealerts.v1.AlertData`<br>CloudEvent Type(s):<br>`google.firebase.firebasealerts.alerts.v1.published`|
|Firebase Remote Config|[Proto](proto/google/events/firebase/remoteconfig/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/remoteconfig/v1/RemoteConfigEventData.json)|<br>Data Type:<br>`google.events.firebase.remoteconfig.v1.RemoteConfigEventData`<br>CloudEvent Type(s):<br>`google.firebase.remoteconfig.remoteConfig.v1.updated`|
|Firebase Test Lab|[Proto](proto/google/events/firebase/testlab/v1/data.proto) / [JSON](https://googleapis.github.io/google-cloudevents/jsonschema/google/events/firebase/testlab/v1/TestMatrixEventData.json)|<br>Data Type:<br>`google.events.firebase.testlab.v1.TestMatrixEventData`<br>CloudEvent Type(s):<br>`google.firebase.testlab.testMatrix.v1.completed`|
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
- [.NET](https://github.com/googleapis/google-cloudevents-dotnet)
