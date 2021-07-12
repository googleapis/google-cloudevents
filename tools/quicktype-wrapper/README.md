# quicktype-wrapper

This node module that wraps the `quicktype` tool to generate code using JSON Schema.

## Install

This tool can be installed as a global CLI or run as a Node script. Requires Node 8+.

### CLI (Recommended)

Install the CLI globally:

```sh
npm run cli
```

This will install a `qt` CLI globally.

### RunNode Script

You can also run as a script. Build then run:

```sh
npm run compile
npm run start
```

## Configure

To configure the script, use _environment variables_ or _command-line flags_:

- (REQUIRED) `IN`: Input directory path.
- (REQUIRED) `OUT`: Output directory path.
- (NOT REQUIRED) `ENUM_AS_STRING`: Set to `true` to treat JSON schema fields with enum values as strings.
- (NOT REQUIRED) `NO_LICENSE`: Set to `true` to skip adding license headers to source files.

### Environment Variables

```sh
IN=~/Documents/github/googleapis/google-cloudevents/proto
OUT=~/Documents/out
NO_LICENSE=true # optional
L=typescript

qt
```

### Command-line Flags

```sh
qt \
--in=~/Documents/github/googleapis/google-cloudevents/proto \
--out=~/Documents/out \
--no-license=true \ # optional
--l=typescript
```

## Develop/Watch

To continually watch the script insead of building after every change,
run this command in a separate terminal:

```sh
npm run watch
```

## Lint/Fix

To fix style/lint mistakes in this generator, run:

```sh
npm run fix
```