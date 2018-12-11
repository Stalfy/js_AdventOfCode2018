var assert = require('assert');
var solver = require('../solvers/day10');

var input = 'position=< 9,  1> velocity=< 0,  2>\n';
input += 'position=< 7,  0> velocity=<-1,  0>\n';
input += 'position=< 3, -2> velocity=<-1,  1>\n';
input += 'position=< 6, 10> velocity=<-2, -1>\n';
input += 'position=< 2, -4> velocity=< 2,  2>\n';
input += 'position=<-6, 10> velocity=< 2, -2>\n';
input += 'position=< 1,  8> velocity=< 1, -1>\n';
input += 'position=< 1,  7> velocity=< 1,  0>\n';
input += 'position=<-3, 11> velocity=< 1, -2>\n';
input += 'position=< 7,  6> velocity=<-1, -1>\n';
input += 'position=<-2,  3> velocity=< 1,  0>\n';
input += 'position=<-4,  3> velocity=< 2,  0>\n';
input += 'position=<10, -3> velocity=<-1,  1>\n';
input += 'position=< 5, 11> velocity=< 1, -2>\n';
input += 'position=< 4,  7> velocity=< 0, -1>\n';
input += 'position=< 8, -2> velocity=< 0,  1>\n';
input += 'position=<15,  0> velocity=<-2,  0>\n';
input += 'position=< 1,  6> velocity=< 1,  0>\n';
input += 'position=< 8,  9> velocity=< 0, -1>\n';
input += 'position=< 3,  3> velocity=<-1,  1>\n';
input += 'position=< 0,  5> velocity=< 0, -1>\n';
input += 'position=<-2,  2> velocity=< 2,  0>\n';
input += 'position=< 5, -2> velocity=< 1,  2>\n';
input += 'position=< 1,  4> velocity=< 2,  1>\n';
input += 'position=<-2,  7> velocity=< 2, -2>\n';
input += 'position=< 3,  6> velocity=<-1, -1>\n';
input += 'position=< 5,  0> velocity=< 1,  0>\n';
input += 'position=<-6,  0> velocity=< 2,  0>\n';
input += 'position=< 5,  9> velocity=< 1, -2>\n';
input += 'position=<14,  7> velocity=<-2,  0>\n';
input += 'position=<-3,  6> velocity=< 2, -1>\n';

describe('Day 10', function() {
    describe('Puzzle A', function() {
        it('Should return HI', function() {
            let expected = '\n';
            expected += '#...#..###\n';
            expected += '#...#...#.\n';
            expected += '#...#...#.\n';
            expected += '#####...#.\n';
            expected += '#...#...#.\n';
            expected += '#...#...#.\n';
            expected += '#...#...#.\n';
            expected += '#...#..###\n';

            let result = solver.solveA(input);
            assert.strictEqual(result, expected);
        });
    });

    describe('Puzzle B', function() {
        it('Should return 3', function() {
            let result = solver.solveB(input);
            assert.strictEqual(result, 3);
        });
    });
});
