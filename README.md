# Google Events

[![Build Status](https://travis-ci.org/googleapis/google-cloudevents.svg?branch=master)](https://travis-ci.org/googleapis/google-cloudevents)

This repository contains types for
[CloudEvents](https://cloudevents.io) issued by Google.

The "source of truth" for the event data format is in the form of
[Google Protocol Buffers](https://github.com/protocolbuffers/protobuf).

See [proto/README.md](proto/README.md) for more
information about the messages used to describe CloudEvents.

# Stability warning

The entire content of this repository should be regarded as highly
unstable until this warning is removed. The schema may change, the
CloudEvent "type" attribute values may change, the protobuf message
may change. Even the core `cloud_event_type` annotation may change.

# CloudEvent Types

The following list is generated from the contents in the `proto/` directory.