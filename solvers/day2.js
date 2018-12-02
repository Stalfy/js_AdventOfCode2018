let twoLettersCount = 0;
let threeLettersCount = 0;

function addEntry(map, key) {
    map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
    return map;
}

function mapValues(map) {
    let values = new Map();
    map.forEach((val) => values.has(val) ? values.set(val, values.get(val) + 1) : values.set(val, 1));
    return values;
}

function countLetters(entry) {
    let counts = entry.split('').reduce((t, l) => addEntry(t, l), new Map());
    let tally = mapValues(counts);

    twoLettersCount += tally.has(2);
    threeLettersCount += tally.has(3);
}

function differByOneCharInSamePosition(a, b) {
    if(a.length !== b.length) {
        return false;
    }

    let arrA = a.toString().split('');
    let arrB = b.toString().split('');

    let mismatches = 0;
    arrA.forEach((value, index) => mismatches += value !== arrB[index]);
    return 1 === mismatches;
}

function addToComparisonMap(map, entry) {
    let inKeys = false;
    let interestKey = '';

    map.forEach((val, key) => {
        if(differByOneCharInSamePosition(key, entry)) {
            inKeys = true;
            interestKey = key;
        }
    });

    inKeys ? map.get(interestKey).push(entry) : map.set(entry, []);
    return map;
}

function getMatchingLetters(a, b) {
    let arrA = a.toString().split('');
    let arrB = b.toString().split('');

    arrA.forEach((value, index, arr) => { 
        if(value !== arrB[index]) { 
            arr[index] = ''; 
        }
    });

    return arrA.join('');
}

module.exports = {
    solveA: function (input) {
        twoLettersCount = 0;
        threeLettersCount = 0;

        let entries = input.toString().split('\n');
        entries.forEach(countLetters);
        return twoLettersCount * threeLettersCount;
    },

    solveB: function (input) {
        let entries = input.toString().split('\n');
        let map = entries.reduce((map, entry) => addToComparisonMap(map, entry), new Map());

        let matchingLetters = '';
        map.forEach((val, key) => {
            if(0 !== val.length) {
                matchingLetters = getMatchingLetters(key, val[0]);
            }
        });

        return matchingLetters;
    }
};
