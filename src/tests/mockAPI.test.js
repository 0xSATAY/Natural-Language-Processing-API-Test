const mockAPI = require('../server/mockAPI');

describe('Mock API Test', () => {
    it('Returns true if JSON responses are the same', () => {
        const title = 'test json response';
        const message = 'this is a message';
        const time = 'now';
        expect(mockAPI.message).toBe(message);
        expect(mockAPI.title).toBe(title);
        expect(mockAPI.time).toBe(time);
    });
})