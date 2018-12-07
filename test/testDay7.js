var assert = require('assert');
var solver = require('../solvers/day7');

let input = 'Step C must be finished before step A can begin.\n';
input += 'Step C must be finished before step F can begin.\n';
input += 'Step A must be finished before step B can begin.\n';
input += 'Step A must be finished before step D can begin.\n';
input += 'Step B must be finished before step E can begin.\n';
input += 'Step D must be finished before step E can begin.\n';
input += 'Step F must be finished before step E can begin.\n';

describe('Day 7', function() {
    describe('Puzzle A', function() {
        it('Should return CABDFE', function() {
            let result = solver.solveA(input);
            assert.strictEqual(result, 'CABDFE');
        });
    });

    describe('Puzzle B', function() {
        it('Should return 15', function() {
            let result = solver.solveB(input, 0, 2);
            assert.strictEqual(result, 15);
        });
    });
});
