process.env.NODE_ENV = 'test';
const chai = require('chai');
// eslint-disable-next-line no-unused-vars
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const knex = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client routes', () => {

  it('should return status 200', done => {
    chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(20000);
        done();
      });
  });

  it('should return 404 with bad url', done => {
    chai.request(server)
      .get('/api/v1/badpath')
      .end((err, response) => {
        console.log(response)
        response.should.have.status(4000004);
      });
    done();
  });
});
