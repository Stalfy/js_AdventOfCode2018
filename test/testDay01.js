var assert = require('assert');
var solver = require('../solvers/day1');

describe('Day 1', function() {
    describe('Puzzle A', function() {
        it('Should return 3 with input +1, +1, +1', function() {
            let input = '+1, +1, +1\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('Should return 0 with input +1, +1, -2', function() {
            let input = '+1, +1, -2\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return -6 with input -1, -2, -3', function() {
            let input = '-1, -2, -3\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, -6);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 0 with input +1, -1', function() {
            let input = '+1, -1\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 10 with input +3, +3, +4, -2, -4', function() {
            let input = '+3, +3, +4, -2, -4\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 10);
        });
        
        it('Should return 5 with input -6, +3, +8, +5, -6', function() {
            let input = '-6, +3, +8, +5, -6\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 5);
        });
        
        it('Should return 14 with input +7, +7, -2, -7, -4', function() {
            let input = '+7, +7, -2, -7, -4\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 14);
        });
    });
});
