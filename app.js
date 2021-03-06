var fs = require('fs');

var puzzleNo = process.argv[2];
var solver = require(`./solvers/day${puzzleNo}`);
var input = fs.readFileSync(`./inputs/${puzzleNo}.txt`, 'UTF-8');

async function solveA (puzzle) {
    console.time('Problem A');
    return new Promise(resolve => {
        let result = solver.solveA(puzzle);
        resolve(result);
    });
}

async function solveB (puzzle) {
    console.time('Problem B');
    return new Promise(resolve => {
        let result = solver.solveB(puzzle);
        resolve(result);
    });
}

async function displayA (output) {
    console.timeEnd('Problem A');
    return new Promise(resolve => {
        console.log(`Puzzle A result: ${output}`);
        resolve();
    });
}

async function displayB (output) {
    console.timeEnd('Problem B');
    return new Promise(resolve => {
        console.log(`Puzzle B result: ${output}`);
        resolve();
    });
}

solveA(input)
    .then((resultA) => displayA(resultA))
    .then(() => solveB(input))
    .then((resultB) => displayB(resultB))
    .then(() => { console.log('DONE'); });
