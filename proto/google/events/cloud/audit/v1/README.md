## google.events.cloud.audit.v1

Example cURL request with headers and data format seen by Cloud Run:

```sh
curl localhost:8080 -XPOST \
    -H "host: my-run-url-uc.a.run.app" \
    -H "content-type: application/json; charset=utf-8" \
    -H "accept: application/json" \
    -H "from: noreply@google.com" \
    -H "user-agent: APIs-Google; (+https://developers.google.com/webmasters/APIs-Google.html)" \
    -H "x-cloud-trace-context: c0aaeref90d944452f56027d27af0e97/1411812217150857728" \
    -H "x-forwarded-for: 64.233.172.30" \
    -H "x-forwarded-proto: https" \
    -H "forwarded: for='64.233.172.30';proto=https" \
    -H "accept-encoding: gzip,deflate,br" \
    -H "ce-source: //storage.googleapis.com/projects/my-project" \
    -H "ce-time: 2020-08-08T00:11:44.895529672Z" \
    -H "ce-specversion: 1.0" \
    -H "ce-type: com.google.cloud.auditlog.event" \
    -H "ce-dataschema: type.googleapis.com/google.logging.v2.LogEntry" \
    -H "ce-id: projects/my-project/logs/cloudaudit.googleapis.com%2Factivity-h6wqfbe7zeke1596845504895522" \
    -H "ce-subject: storage.googleapis.com/projects/_/buckets/my-bucket" \
    --data-binary @data.json
```
