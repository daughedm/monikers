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
        response.should.have.status(200);
        done();
      });
  });

  it('should return 404 with bad url', done => {
    chai.request(server)
      .get('/api/v1/badpath')
      .end((err, response) => {
        response.should.have.status(404);
      });
    done();
  });
});

describe('API Routes', () => {

  beforeEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(() => {
            return knex.seed.run()
              .then(() => {
                done();
              });
          });
      }).catch(error => {
        throw error;
      });
  });

  describe('GET /api/v1/cards', () => {
    it('should return all of the cards', done => {
      chai.request(server)
        .get('/api/v1/cards')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(3);
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('Log Lady');
          response.body[0].should.have.property('description');
          response.body[0].description.should.equal('A minor character from the television show Twin Peaks. She carries a piece of a tree cradled in her arms at all times, and seems to act as a medium between the object and the outside world, such as when she claims that it "saw something" the night Laura Palmer died.');
          response.body[0].should.have.property('category');
          response.body[0].category.should.equal('FICTIONAL CHARACTER');
          response.body[0].should.have.property('pointValue');
          response.body[0].pointValue.should.equal(4);
          done();
        });
    });
  });
});
