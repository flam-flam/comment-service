const mongoose = require("mongoose");
const { AppConfig } = require('./config.js');

const connectionString = AppConfig.dbConnectionString;

// Number of milliseconds to keep trying to establish a db connection
const serverTimeout = process.env.MONGO_SERVER_TIMEOUT || 30000;
// Number of milliseconds of inactivity after which to close sockets
const socketTimeout = process.env.MONGO_SOCKET_TIMEOUT || 45000;

const commentSchema = new mongoose.Schema({
  _id: String,
  createdAt: Date,
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = {
  connectionString,
  serverTimeout,
  socketTimeout,
  Comment,
};
