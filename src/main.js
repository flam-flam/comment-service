'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const comment = require("./comment.js");

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ENDPOINTS
app.get('/', (req, res) => {
  res.send('Up');
});

app.post('/api/comments', (req, res) => {
  comment.processComment(req.body)
  res.send(req.body);
});


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
