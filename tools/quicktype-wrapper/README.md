# quicktype-wrapper

This node module that wraps the `quicktype` tool to generate code using JSON Schema.

## Install

This tool can be installed as a global CLI or run as a Node script. Requires Node 8+.

### CLI (Recommended)

Install the CLI globally:

```sh
sudo npm run cli
```

Then type `qt` to run the generator.

### Node Script

You can also run as a script. Build then run:

```sh
npm run compile
npm run start
```

## Run

const IN = process.env.IN || `${HOMEDIR}/Documents/github/googleapis/google-cloudevents/proto/`;
const OUT = process.env.OUT || `${HOMEDIR}/Documents/out`;
const L = (process.env.L || LANGUAGE.TYPESCRIPT).toUpperCase() as TARGET_LANGUAGE;


## Develop/Watch

To continually watch the script insead of building after every change,
run this command in a separate terminal:

```sh
npm run watch
```

## Lint/Fix

To fix style/lint mistakes, run:

```sh
npm run fix
```