var assert = require('assert');
var solver = require('../solvers/day5');

describe('Day 5', function() {
    describe('Puzzle A', function() {
        it('Should return 0 with input baAB', function() {
            let input = 'baAB\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 1 with input baABdDCCc', function() {
            let input = 'baABdDCCc\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 1);
        });

        it('Should return 10 with input dabAcCaCBAcCcaDA', function() {
            let input = 'dabAcCaCBAcCcaDA\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 10);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 4 with input dabAcCaCBAcCcaDA', function() {
            let input = 'dabAcCaCBAcCcaDA\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 4);
        });
    });
});
