var assert = require('assert');
var solver = require('../solvers/day9');

describe('Day 9', function() {
    describe('Puzzle A', function() {
        it('Should return 32 with input 9 players; last marble is worth 25 points', function() {
            let input = '9 players; last marble is worth 25 points\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 32);
        });

        it('Should return 8317 with input 10 players; last marble is worth 1618 points', function() {
            let input = '10 players; last marble is worth 1618 points\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 8317);
        });

        it('Should return 146373 with input 13 players; last marble is worth 7999 points', function() {
            let input = '13 players; last marble is worth 7999 points\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 146373);
        });

        it('Should return 2764 with input 17 players; last marble is worth 1104 points', function() {
            let input = '17 players; last marble is worth 1104 points\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 2764);
        });

        it('Should return 54718 with input 21 players; last marble is worth 6111 points', function() {
            let input = '21 players; last marble is worth 6111 points\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 54718);
        });

        it('Should return 37305 with input 30 players; last marble is worth 5807 points', function() {
            let input = '30 players; last marble is worth 5807 points\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, 37305);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 107 with input 9 players; last marble is worth 1 points', function() {
            let input = '9 players; last marble is worth 1 points\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, 107);
        });
    });
});
