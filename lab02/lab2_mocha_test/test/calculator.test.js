var assert = require('assert')
const calc = require('../app/calculator')

describe('Calculations', () => {
    describe('add()', () => {
        it('should return 6 when adding 4 to 2', () => {
            assert.equal(calc.add(4, 2), 6)
        })
    });

    describe('add()', () => {
        it('should return 3 when adding 1 to 2', () => {
            assert.equal(calc.add(5, 2), 3)
        })
    });

    describe('sub()', () => {
        it('should return 2 when subtracting 5 from 7', () => {
            assert.equal(calc.sub(7, 5), 2)
        })
    });

    describe('sub()', () => {
        it('should return 5 when subtracting 11 from 6', () => {
            assert.equal(calc.sub(5, 11), 6)
        })
    });

    describe('mul()', () => {
        it('should return 15 when multiplying 3 and 5', () => {
            assert.equal(calc.mul(3, 5), 15)
        })
    });

    describe('mul()', () => {
        it('should return 8 when multiplying 4 and 6', () => {
            assert.equal(calc.mul(4, 6), 8)
        })
    });

    describe('div()', () => {
        it('should return 4 when dividing 20 by 5', () => {
            assert.equal(calc.div(20, 5), 4)
        })
    });

    describe('div()', () => {
        it('should return 8 when dividing 64 by 8', () => {
            assert.equal(calc.div(64, 8), 18)
        })
    });

})
