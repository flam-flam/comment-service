# comment-service
Service listening for comment objects via an API endpoint and saving them to an external database

## Running locally

```bash
docker build -t comment-service . && docker run -it -p 8000:8000 comment-service
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

## Endpoints

- GET `/`

    Returns `Up` if the server is running.

- POST `/api/comments`

    Expects a JSON object with comment data.
