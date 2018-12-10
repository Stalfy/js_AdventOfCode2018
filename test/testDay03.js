var assert = require('assert');
var solver = require('../solvers/day3');

describe('Day 3', function() {
    describe('Puzzle A', function() {
        it('Should return 0 with input #133 @ 1,3: 4x4', function() {
            let input = '#133 @ 1,3: 4x4\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 256 with input #145 @ 10,100: 16x16 and #2500 @ 10,100: 16x16', function() {
            let input = '#145 @ 10,100: 16x16\n#2500 @ 10,100: 16x16\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 256);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 145 with input #145 @ 10,100: 16x16', function() {
            let input = '#145 @ 10,100: 16x16\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, '145');
        });

        it('Should return 13 with input #145 @ 10,100: 16x16 and #200 @ 10,100: 16x16 and #13 @ 1,1: 2x2', function() {
            let input = '#145 @ 10,100: 16x16\n#200 @ 10,100: 16x16\n#13 @ 1,1: 2x2\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, '13');
        });
    });
});
