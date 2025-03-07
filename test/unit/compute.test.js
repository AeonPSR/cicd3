const assert = require('assert');
const compute = require('../../service/compute');

describe('Unit Tests', () => {
    describe('sum()', () => {
        it('should return the sum of two numbers', () => {
            const result = compute.sum(2, 3);
            assert.strictEqual(result, 5);
        });

        it('should return 0 when both numbers are 0', () => {
            const result = compute.sum(0, 0);
            assert.strictEqual(result, 0);
        });
    });

    describe('multiply()', () => {
        it('should return the product of two numbers', () => {
            const result = compute.multiply(2, 3);
            assert.strictEqual(result, 6);
        });
    });

    describe('divide()', () => {
        it('should return the quotient of two numbers', () => {
            const result = compute.divide(6, 2);
            assert.strictEqual(result, 3);
        });

        it('should throws when dividing by 0', () => {
            assert.throws(() => {
                compute.divide(6, 0);
            }, /Cannot divide by zero/);
        });
    });

    describe('subtract()', () => {
        it('should return the difference of two numbers', () => {
            const result = compute.subtract(5, 3);
            assert.strictEqual(result, 2);
        });
    });
});