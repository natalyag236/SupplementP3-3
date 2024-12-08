const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./Server'); 

describe('GET /', function() {
  it('should respond with "hello world"', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('hello world')
      .end(done);
  });
});
