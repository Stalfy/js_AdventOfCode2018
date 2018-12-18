var assert = require('assert');
var solver = require('../solvers/day14');

describe('Day 14', function() {
    describe('Puzzle A', function() {
        it('Should return 5158916779 with input 9', function() {
            let input = '9\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '5158916779');
        });

        it('Should return 0124515891 with input 5', function() {
            let input = '5\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '0124515891');
        });

        it('Should return 9251071085 with input 18', function() {
            let input = '18\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '9251071085');
        });

        it('Should return 5941429882 with input 2018', function() {
            let input = '2018\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '5941429882');
        });
    });

    describe('Puzzle B', function() {
        it('Should return 9', function() {
            let input = '51589\n';
            let result = solver.solveB(input, 20);
            assert.strictEqual(result, 9);
        });

        it('Should return 5', function() {
            let input = '01245\n';
            let result = solver.solveB(input, 15);
            assert.strictEqual(result, 5);
        });

        it('Should return 18', function() {
            let input = '92510\n';
            let result = solver.solveB(input, 30);
            assert.strictEqual(result, 18);
        });

        it('Should return 2018', function() {
            let input = '59414\n';
            let result = solver.solveB(input, 2100);
            assert.strictEqual(result, 2018);
        });
    });
});
