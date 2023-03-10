#!/bin/bash

curl -X 'POST' \
  'http://localhost:8000/api/comments' \
  -H 'accept: application/json' \
  -d '{
  "id": "string",
  "created_utc": "2023-03-10T16:27:59.709Z"
}'

