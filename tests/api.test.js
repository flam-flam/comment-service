const request = require('supertest');
const mongoose = require('mongoose');
const inMemoryDb = require("./utils/inMemoryDb");

const endpoint = "http://localhost:8000"
const testComment = {
  "id": "h74v5t",
  "created_utc": "2023-03-10T16:27:59.709Z"
}

describe('Testing endpoints', () => {
  let mongodInstance;
  let db;
  let serverInstance;

  beforeAll(async () => {
    const { mongod, connectionString } = await inMemoryDb.startInMemoryDb();

    jest.mock('../src/config.js');

    const { AppConfig } = require('../src/config.js');
    AppConfig.dbConnectionString = connectionString;

    const { initialized } = require('../src/server.js'); // start the server
    serverInstance = await initialized;
    db = require('../src/db');
    
    mongodInstance = mongod;
  });

  afterAll(async () => {
    serverInstance.close();
    await mongodInstance.stop();
    await mongoose.connection.close();
  })

  it('GET /', async () => {
    // act
    const response = await request(endpoint).get('/');
    
    // assert
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Up');
  });

  it('POST /api/comments', async () => {
    // act
    const response = await request(endpoint)
      .post('/api/comments')
      .send(testComment);
    
    // assert
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(testComment);

    const record = await db.Comment.findById(testComment.id).exec();

    expect(record._id).toBe(testComment.id);
    expect(record.createdAt.toISOString()).toBe(testComment.created_utc);
  });

});
