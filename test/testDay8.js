var assert = require('assert');
var solver = require('../solvers/day8');

describe('Day 8', function() {
    describe('Puzzle A', function() {
        it('Should return 138 with input 2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2', function() {
            let input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 138);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 66 with input 2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2', function() {
            let input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 66);
        });
    });
});
