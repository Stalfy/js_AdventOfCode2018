var assert = require('assert');
var solver = require('../solvers/day0');

describe('Day 0', function() {
    describe('Puzzle A', function() {
        it('Should return 0 with input (())', function() {
            let input = '(())';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 0 with input ()()', function() {
            let input = '()()';
            let result = solver.solveA(input);
            assert.strictEqual(result, 0);
        });

        it('Should return 3 with input (((', function() {
            let input = '(((';
            let result = solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('Should return 3 with input (()(()(', function() {
            let input = '(()(()(';
            let result = solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('Should return 3 with input ))(((((', function() {
            let input = '))(((((';
            let result = solver.solveA(input);
            assert.strictEqual(result, 3);
        });

        it('Should return -1 with input ())', function() {
            let input = '())';
            let result = solver.solveA(input);
            assert.strictEqual(result, -1);
        });

        it('Should return -1 with input ))(', function() {
            let input = '))(';
            let result = solver.solveA(input);
            assert.strictEqual(result, -1);
        });

        it('Should return -3 with input ()()', function() {
            let input = ')))';
            let result = solver.solveA(input);
            assert.strictEqual(result, -3);
        });

        it('Should return -3 with input )())())', function() {
            let input = ')())())';
            let result = solver.solveA(input);
            assert.strictEqual(result, -3);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 1 with input )', function() {
            let input = ')';
            let result = solver.solveB(input);
            assert.strictEqual(result, 1);
        });

        it('Should return 5 with input ()())', function() {
            let input = '()())';
            let result = solver.solveB(input);
            assert.strictEqual(result, 5);
        });
    });
});
