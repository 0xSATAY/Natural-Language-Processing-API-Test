const app = require('../server/index');
const mockAPI = require('../server/mockAPI');
const request = require('supertest');

describe('API Test', () => {
    it('[GET: /test] Response for request should match mockAPI data', (done) => {
        request(app)
            .get('/test')
            .expect(200)
            .end((err, res) => {
                expect(res.body.title).toBe(mockAPI.title);
                expect(res.body.message).toBe(mockAPI.message);
                expect(res.body.time).toBe(mockAPI.time);
                done();
            })
    });
});