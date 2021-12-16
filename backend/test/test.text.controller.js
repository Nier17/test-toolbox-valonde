const assert = require('chai').assert
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect
const textController = require('../controllers/text.controller')
const request = require('supertest')

chai.use(chaiHttp)

const url = 'http://localhost:3001'

describe('get json object: ', () => {
  it('should obtain json body from response', (done) => {
    chai
      .request(url)
      .get('/iecho?text=hola')
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('bad request status 400: ', () => {
  it('since there is not text, should be bad request and status 400', (done) => {
    chai
      .request(url)
      .get('/iecho?text=')
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(400)
        done()
      })
  })
})

describe('getInvertedCase1', function () {
  it('should return inverted. It is not a palindrome', function () {
    assert.deepEqual(textController.getInverted('hola'), {
      text: 'aloh',
      palindrome: false
    })
  })
  it('should be palindrome true', function () {
    assert.deepEqual(textController.getInverted('aaa'), {
      text: 'aaa',
      palindrome: true
    })
  })
  it('should return an object', function () {
    const inverted = textController.getInverted('aaa')
    assert.typeOf(inverted, 'object')
  })
})

/// /TESTS WITH SUPERTEST
describe(' GET /iecho with hola text', function () {
  it('supertest good parameters status 200 /iecho with some text', function (done) {
    request(url)
      .get('/iecho?text=hola')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

describe('GET /iecho with hola text', function () {
  it('supertest bad parameters status 400 /iecho', function (done) {
    request(url)
      .get('/iecho?text')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done)
  })
})
