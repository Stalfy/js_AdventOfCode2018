var assert = require('assert');
var solver = require('../solvers/day12');

let input = 'initial state: #..#.#..##......###...###.\n';
input += '\n';
input += '...## => #\n';
input += '..#.. => #\n';
input += '.#... => #\n';
input += '.#.#. => #\n';
input += '.#.## => #\n';
input += '.##.. => #\n';
input += '.#### => #\n';
input += '#.#.# => #\n';
input += '#.### => #\n';
input += '##.#. => #\n';
input += '##.## => #\n';
input += '###.. => #\n';
input += '###.# => #\n';
input += '####. => #\n';

describe('Day 12', function() {
    describe('Puzzle A', function() {
        it('Should return 325', function() {
            let result = solver.solveA(input);
            assert.strictEqual(result, 325);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 325', function() {
            let result = solver.solveB(input, 20);
            assert.strictEqual(result, 325);
        });
    });
});
