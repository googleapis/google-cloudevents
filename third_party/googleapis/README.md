# External proto message definitions

These are protos copied unchanged from
https://github.com/googleapis/googleapis. The process for keeping
them up to date has yet to be defined, but changes are expected to
be rare.

These files, and *only* these files, can be imported from event
types defined in the `proto` directory.

Initially, this consists of just the `google.type` and `google.rpc`
packages; other proto packages could potentially be added later, but
these are likely to cover the majority of use cases.

We could potentially use a submodule for this, but explicitly
copying a subset of the protos allows for simpler governance over
which "external" messages the event messages can depend on.
