var assert = require('assert');
var solver = require('../solvers/day2');

describe('Day 2', function() {
    describe('Puzzle A', function() {
        it('Should return 0 with input abcdef', function() {
            let input = 'abcdef\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 1 with input bababc', function() {
            let input = 'bababc\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 1);
        });

        it('Should return 0 with input abbcde', function() {
            let input = 'abbcde\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 0 with input abcccd', function() {
            let input = 'abcccd\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 0 with input aabcdd', function() {
            let input = 'aabcdd\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 0 with input abcdee', function() {
            let input = 'abbcde\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 0 with input ababab', function() {
            let input = 'ababab\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 2 with input abababcc, aaab', function() {
            let input = 'abababcc\naaab\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 2);
        });
    });

    describe('Puzzle B', function() {
        it('Should return a with input ab, ac', function() {
            let input = 'ab\nac\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 'a');
        });

        it('Should return \'\' with input db, ac', function() {
            let input = 'db\nac\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, '');
        });
    });
});
