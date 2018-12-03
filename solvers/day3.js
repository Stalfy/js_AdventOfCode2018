var olap;
var count;

function overlap(input) {
    let pattern = /#(?:\d+) @ (\d+),(\d+): (\d+)x(\d+)/g;
    let matches = pattern.exec(input);

    let x = parseInt(matches[1], 10);
    let y = parseInt(matches[2], 10);
    let w = parseInt(matches[3], 10);
    let h = parseInt(matches[4], 10);

    var pos;
    for (var i = x; i < x + w; i++) {
        for (var j = y; j < y + h; j++) {
            pos = `${i},${j}`;
            if(undefined !== olap[pos]) {
                if(false === olap[pos]) {
                    count += 1;
                    olap[pos] = true;
                }
            } else {
                olap[pos] = false;
            }
        }
    }
}

function noOverlap(input) {
    let pattern = /#(?:\d+) @ (\d+),(\d+): (\d+)x(\d+)/g;
    let matches = pattern.exec(input);

    let x = parseInt(matches[1], 10);
    let y = parseInt(matches[2], 10);
    let w = parseInt(matches[3], 10);
    let h = parseInt(matches[4], 10);

    var pos;
    let overlaps = false;
    for (var i = x; i < (x + w) && !overlaps; i++) {
        for (var j = y; j < (y + h) && !overlaps; j++) {
            pos = `${i},${j}`;
            overlaps = overlaps | olap[pos];
        }
    }

    return !overlaps;
}

module.exports = {
    solveA: function (input) {
        count = 0;
        olap = {};

        let inputs = input.slice(0, -1).split('\n');
        inputs.forEach(overlap);

        return count;
    },

    solveB: function (input) {
        olap = {};

        let inputs = input.slice(0, -1).split('\n');
        inputs.forEach(overlap);

        let result = inputs.find(noOverlap);
        let pattern = /#(\d+).*/g;
        let matches = pattern.exec(result);

        return matches[1];
    }
};
