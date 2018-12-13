var assert = require('assert');
var solver = require('../solvers/day13');

describe('Day 13', function() {
    describe('Puzzle A', function() {
        it('Should return 0,3', function() {
            let input = '|\n';
            input += 'v\n';
            input += ' \n';
            input += ' \n';
            input += '|\n';
            input += '^\n';
            input += '|\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '0,3');
        });

        it('Should return 3,0', function() {
            let input = '->-  <-\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '3,0');
        });

        it('Should return 3,0', function() {
            let input = '/--- -\\\n';
            input += '|     |\n';
            input += '|      \n';
            input += '|     |\n';
            input += '|      \n';
            input += '|     |\n';
            input += '\\ <->-/\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '3,0');
        });

        it('Should return 4,0', function() {
            let input = '/--- -\\\n';
            input += '|     |\n';
            input += '|      \n';
            input += '|     |\n';
            input += '|      \n';
            input += '|     |\n';
            input += '\\ <> -/\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '4,0');
        });

        it('Should return 7,3', function() {
            let input = '/->-\\\n';
            input += '|   |  /----\\\n';
            input += '| /-+--+-\\  |\n';
            input += '| | |  | v  |\n';
            input += '\\-+-/  \\-+--/\n';
            input += '  \\------/\n';
            let result = solver.solveA(input);
            assert.strictEqual(result, '7,3');
        });
    });

    describe('Puzzle B', function() {
        it('Should return 6,4', function() {
            let input = '/>-<\\\n';
            input += '|   |\n';
            input += '| /<+-\\\n';
            input += '| | | v\n';
            input += '\\>+</ |\n';
            input += '  |   ^\n';
            input += '  \\<->/\n';
            let result = solver.solveB(input);
            assert.strictEqual(result, '6,4');
        });
    });
});
