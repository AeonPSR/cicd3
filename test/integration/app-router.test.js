const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

describe('Integration Tests', () => {
    it('should return the sum of two numbers', async () => {
        const response = await request(app)
            .get('/sum/5/3')
            .expect(200)
            .then(response => {
                assert.fail('You must implement the test');
            });
    });

    it('should return the product of two numbers', async () => {
        const response = await request(app)
            .get('/mult/5/3')
            .expect(200)
            .then(response => {
                assert.fail('You must implement the test');
            });        
    });

    it('should return the division of two numbers', async () => {
        const response = await request(app)
            .get('/div/10/2')
            .expect(200)
            .then(response => {
                assert.fail('You must implement the test');
            })
    });

    it('should return the difference of two numbers', async () => {
        const response = await request(app)
            .get('/substract/10/5')
            .expect(200)
            .then(response => {
                assert.fail('You must implement the test');
            });
    });
});