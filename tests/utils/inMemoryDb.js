const { MongoMemoryServer } = require("mongodb-memory-server");

const startInMemoryDb = async () => {
  if (!MongoMemoryServer) {
    throw new Error("Filed to import MongoMemoryServer");
  }

  const mongod = await MongoMemoryServer.create();
  const connectionString = mongod.getUri();

  return {
    mongod,
    connectionString,
  };
};

module.exports = {
  startInMemoryDb,
};
