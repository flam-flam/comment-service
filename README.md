# comment-service
Service listening for comment objects via an API endpoint and saving them to an external database

## Prerequisites

- NodeJS (`brew install nodejs` / `apt install nodejs`)

>If you have an issue with npm and nodejs v10 compatibility, [this might be helpful](https://askubuntu.com/questions/1382565/npm-does-not-support-node-js-v10-19-0).

## Running locally

```bash
npm install && node .
```

Send the request with:

```bash
curl -X 'POST' \
  'http://localhost:8000/api/comments' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "h74v5t",
  "created_utc": "2023-03-10T16:27:59.709Z"
}'
```
