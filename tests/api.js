const request = require('supertest');
// app is supposed to point to the app.js file
require('./../src/server.js');

const endpoint = "http://localhost:8000"
const testComment = {
  "id": "h74v5t",
  "created_utc": "2023-03-10T16:27:59.709Z"
}

describe('Testing endpoints', function () {

  it('GET /', function (done) {
    request(endpoint)
      .get('/')
      .send(testComment)
      .expect(200)
      .expect(function(res) {
        res.body == "Up";
      })
      .end(function(err, res) {
        if (err) throw err;
      });    
      done();
  });

  it('POST /api/comments', function (done) {
    request(endpoint)
      .post('/api/comments')
      .send(testComment)
      .expect(200)
      .expect(function(res) {
        res.body == testComment;
      })
      .end(function(err, res) {
        if (err) throw err;
      });    
      done();
  });

});
