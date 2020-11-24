# How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Changes within the Proto Folder

Changes within the `proto` folder are expected to be performed after
arriving at mutual consensus within Google (although pull requests
may be used to arrive at that consensus).

Pull requests that involve a change to the following folders:
- `proto` folder
- `tools/jsonschema-catalog` folder
- `tools/proto2jsonschema` folder
- `tools/readme-catalog` folder
must re-run the generators, for consistency. This will be
validated within the pull request checks. This can be done by
running the following command below on a machine with Node 12+ and Go 1.14+:

```sh
./scripts/gen.sh
```

Non-trivial changes to the schema should also include a suitable
test data file (or a change to an existing test data file) to
validate the change. See [testdata/README.md](../testdata/README.md)
for details.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Community Guidelines

This project follows [Google's Open Source Community
Guidelines](https://opensource.google/conduct/).
