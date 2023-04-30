const mongoose = require("mongoose");
const { AppConfig } = require("./config.js");

const connectionString = AppConfig.dbConnectionString;

const commentSchema = new mongoose.Schema({
  _id: String,
  createdAt: Date,
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = {
  connectionString,
  Comment,
};
