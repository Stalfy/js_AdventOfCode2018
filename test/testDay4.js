var assert = require('assert');
var solver = require('../solvers/day4');

let input = '';
input += '[1518-11-01 00:25] wakes up\n';
input += '[1518-11-01 00:00] Guard #10 begins shift\n';
input += '[1518-11-01 00:05] falls asleep\n';
input += '[1518-11-01 00:55] wakes up\n';
input += '[1518-11-02 00:50] wakes up\n';
input += '[1518-11-01 23:58] Guard #99 begins shift\n';
input += '[1518-11-01 00:30] falls asleep\n';
input += '[1518-11-02 00:40] falls asleep\n';
input += '[1518-11-03 00:24] falls asleep\n';
input += '[1518-11-03 00:05] Guard #10 begins shift\n';
input += '[1518-11-03 00:29] wakes up\n';
input += '[1518-11-04 00:36] falls asleep\n';
input += '[1518-11-04 00:02] Guard #99 begins shift\n';
input += '[1518-11-05 00:03] Guard #99 begins shift\n';
input += '[1518-11-04 00:46] wakes up\n';
input += '[1518-11-05 00:55] wakes up\n';
input += '[1518-11-05 00:45] falls asleep\n';

describe('Day 4', function() {
    describe('Puzzle A', function() {
        it('Should return 240', function() {
            let result = solver.solveA(input);
            assert.strictEqual(result, 240);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 4455', function() {
            let result = solver.solveB(input);
            assert.strictEqual(result, 4455);
        });
    });
});
