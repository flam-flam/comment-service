const request = require("supertest");
require("./../src/server.js");
const mongoose = require("mongoose");

const connectionString = "mongodb://admin:example@localhost:27017/test";
const endpoint = "http://localhost:8000";

const dbComment = {
  "id": "g84jrs",
  "created_utc": "2023-03-31T18:01:59.709Z",
};

const { MongoMemoryServer } = require("mongodb-memory-server");
let mongod = null;

const connectDB = async () => {
  try {
    let dbUrl = connectionString;
    if (MongoMemoryServer) {
      mongod = await MongoMemoryServer.create();
      dbUrl = mongod.getUri();
    }

    const conn = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

describe("MongoDB test", () => {
  beforeAll(() => {
    connectDB();
  });

  afterAll(() => {
    disconnectDB();
    server.close();
  });

  describe("Save comment to db", function () {
    it("POST /api/comments", function (done) {
      request(endpoint)
        .post("/api/comments")
        .send(dbComment)
        .expect(200)
        .expect(function (res) {
          res.body == dbComment;
        })
        .catch((error) => {
          console.log("MongoDB ERROR: ", error);
        });
      done();
    });
  });
});
