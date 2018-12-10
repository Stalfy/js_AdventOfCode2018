var assert = require('assert');
var solver = require('../solvers/day6');

let input = '1, 1\n';
input += '1, 6\n';
input += '8, 3\n';
input += '3, 4\n';
input += '5, 5\n';
input += '8, 9\n';

describe('Day 6', function() {
    describe('Puzzle A', function() {
        it('Should return 17', function() {
            let result = solver.solveA(input);
            assert.strictEqual(result, 17);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 16', function() {
            let result = solver.solveB(input, 32);
            assert.strictEqual(result, 16);
        });
    });
});
