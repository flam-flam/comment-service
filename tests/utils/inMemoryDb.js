const { MongoMemoryServer } = require("mongodb-memory-server");

const startInMemoryDb = async () => {
  if (!MongoMemoryServer) {
    throw new Error("Failed to import MongoMemoryServer");
  }

  const mongod = await MongoMemoryServer.create({ instance: { dbName: "flam", auth: true } });
  const connectionString = mongod.getUri();

  return {
    mongod,
    connectionString,
  };
};

module.exports = {
  startInMemoryDb,
};
