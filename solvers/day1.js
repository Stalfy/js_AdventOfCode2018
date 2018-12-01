let knownFrequencies = [0];
let currentFrequency = 0;

function isFirstDoubledFrequency(frequency) {
    currentFrequency += frequency;
    let isKnownFrequency = knownFrequencies.includes(currentFrequency);

    if(!isKnownFrequency) {
        knownFrequencies.push(currentFrequency);
    }

    return isKnownFrequency;
}

module.exports = {
    solveA: function (input) {
        return input
            .split(/\n|,\s/)
            .slice(0, -1)
            .reduce((currentFrequency, c) => currentFrequency += parseInt(c, 10), 0);
    },

    solveB: function (input) {
        knownFrequencies = [0];
        currentFrequency = 0;
        
        let arr = input.toString().split(/\n|,\s/).slice(0, -1).map(freq => freq = parseInt(freq, 10));
        let index = -1;

        while(-1 === index) {
            index = arr.findIndex(isFirstDoubledFrequency);
        }

        return currentFrequency;
    }
};
