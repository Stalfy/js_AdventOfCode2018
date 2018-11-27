var mapper = {
    '(': 1,
    ')': -1,
    '\n': 0
};

let currentFloor = 0;
function isBasement(c) {
    currentFloor += mapper[c];
    return -1 === currentFloor;
}

module.exports = {
    solveA: function (input) {
        return input.split('').reduce((total, c) => total += mapper[c], 0);
    },

    solveB: function (input) {
        currentFloor = 0;
        let index = input.split('').findIndex(isBasement);
        return index + 1;
    }
};
