var assert = require('assert');
var solver = require('../solvers/day11');

describe('Day 11', function() {
    describe('Puzzle A', function() {
        it('Should return 33,45 with input 18', function() {
            let input = '18\n';
            let result = solver.solveA(input, 30, 60);
            assert.strictEqual(result, '33,45');
        });

        it('Should return 21,61 with input 42', function() {
            let input = '42\n';
            let result = solver.solveA(input, 20, 70);
            assert.strictEqual(result, '21,61');
        });
    });

    describe('Puzzle B', function() {
        it('Should return 90,269,16 with input 18', function() {
            let input = '18\n';
            let result = solver.solveB(input, 80, 290, 15, 17);
            assert.strictEqual(result, '90,269,16');
        });

        it('Should return 232,251,12 with input 42', function() {
            let input = '42\n';
            let result = solver.solveB(input, 230, 290, 11, 13);
            assert.strictEqual(result, '232,251,12');
        });
    });
});
