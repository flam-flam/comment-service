const AppConfig = {
  dbConnectionString: process.env.MONGO_CONNECTION_STRING,
  dbName: process.env.MONGO_DATABASE_NAME,
};

module.exports = {
  AppConfig,
};
