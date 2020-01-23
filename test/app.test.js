const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');


describe('GET /frequency endpoint', () => {
    it('should find frequency', () => {
      const query = "s=aaBBAAbbaa";
  
      const expected = {
        unique: 2,
        average: 5,
        highest: 'a',
        'a': 6,
        'b': 4
      };
  
      return supertest(app)
        .get('/frequency')
        .query(query)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.eql(expected);
        });
    })
    it('should throw error 400 frequency', () => {
        const query = "";
    
        return supertest(app)
          .get('/frequency')
          .query(query)
          .expect(400)
    })
    it('should be undefined frequency', () => {
        const query = "s= ";
        return supertest(app)
          .get('/frequency')
          .query(query)
          .expect(400)
      })
  });