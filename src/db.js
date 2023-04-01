const mongoose = require("mongoose");

const connectionString =
  process.env.MONGO_CONNECTION_STRING ||
  "mongodb://rootuser:examplepasswordikkO2Y@localhost:27017/flam";

// Number of milliseconds to keep trying to establish a db connection
const serverTimeout = process.env.MONGO_SERVER_TIMEOUT || 30000;
// Number of milliseconds of inactivity after which to close sockets
const socketTimeout = process.env.MONGO_SOCKET_TIMEOUT || 45000;

const commentSchema = new mongoose.Schema({
  createdAt: { body: String, date: Date },
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = {
  connectionString,
  serverTimeout,
  socketTimeout,
  Comment,
};
