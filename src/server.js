"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const comment = require("./comment.js");
const mongoose = require("mongoose");
const db = require("./db.js");

const PORT = process.env.EXPRESS_PORT || 8000;
const HOST = process.env.EXPRESS_HOST || "0.0.0.0";

const initializeAsync = async (dbConfig) => {
  await mongoose.connect(dbConfig.connectionString, {
    serverSelectionTimeoutMS: dbConfig.serverTimeout,
    socketTimeoutMS: dbConfig.socketTimeout,
  });
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ENDPOINTS
app.get("/", (res) => {
  res.send("Up");
});

app.post("/api/comments", async (req, res) => {
  await comment.processComment(req.body);
  res.send(req.body);
});

// DB CONNECTION
initializeAsync(db)
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Running on http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to initialise db connection", error);
  });
