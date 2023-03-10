# comment-service
Service listening for comment objects via an API endpoint and saving them to an external database

## Prerequisites

- NodeJS (`brew install nodejs` / `apt install nodejs`)

## Running locally

```bash
node src/main.js
```

Send the request with:

```bash
curl -X 'POST' \
  'http://localhost:8000/api/comments' \
  -H 'accept: application/json' \
  -d '{
  "id": "h74v5t",
  "created_utc": "2023-03-10T16:27:59.709Z"
}'
```
