var assert = require('assert');
var request = require('supertest');
var config = require('../../../config.test');
var app = require('../../../app.js')(config);

describe('Testing Routes:', function(){

  describe('Get home route:', function() {
    it('should render dashboard', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
  describe('Get register route:', function() {
    it('should render register page', function(done) {
      request(app)
        .get('/register')
        .expect(200, done);
    });
  });
  describe('Get reset route:', function() {
    it('should render register page', function(done) {
      request(app)
        .get('/reset')
        .expect(200, done);
    });
  });
  describe('Get settings without login:', function() {
    it('should redirect to login', function(done) {
      request(app)
        .get('/settings')
        .expect(302)
        .end(function(err, res) {
          assert.equal(null, err);
          assert.equal(true, res.redirect);
          done();
      });
    });
  });
});

