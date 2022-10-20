# GitHub Actions Workflows

| Workflow Name | Filename | Description | Required | Triggers |
| -- | -- | -- | -- | -- |
| Generate JSON Schema*     | generate_jsonschema.yaml      | Generate the JSON Schema and create PR | Y | Push:main (*) |
| Check Unexpected Changes* | check_unexpected_changes.yaml | Notify contributor that PR may change the JSON Schema generation | Y | PR (*) |
| Client Smoke Tests        | test_clients.yaml             | Notify contributor that PR may change client generation | N | PR (proto/* \| third_party/* \| testdata/* \| workflow) |
| Test Proto Syntax         | test_proto_syntax.yaml        | Validate proto syntax through compliation | Y | PR (proto/* \| third_party/* \| scripts/* \| tools/* \| workflow) |
| Test JSON Schemas Syntax     | test_jsonschemas.yaml     | Validate JSON Schema format | Y | PR (jsonschema/* \| scripts/* \| tools/* \| workflow) |

*uses a composite action, `.github/workflows/generate_jsonschema/action.yaml`, to setup and run JSON schema generation