// https://www.techiedelight.com/calculate-sum-elements-sub-matrix-constant-time/
// All the mathematics behind this solution.

function generateArray (max) {
    let arr = new Array(max);
    let row;

    for (let r = 0; r <= max; r++) {

        row = new Array(max);
        for (let c = 0; c <= max; c++) {
            row[c] = 0;
        }

        arr[r] = row;
    }

    return arr;
}

function setPowerLevels (arr, serialNumber, min, max) {
    let powerLevel;
    let rackId;

    for (let x = min; x <= max; x++) {
        for (let y = min; y <= max; y++) {
            rackId = x + 10;
            powerLevel = rackId * y;
            powerLevel = powerLevel + serialNumber;
            powerLevel = powerLevel * rackId;
            powerLevel = Math.floor(powerLevel / 100) % 10;
            powerLevel = powerLevel - 5;
            arr[x][y] = powerLevel;
        }
    }

    return arr;
}

function calculateSums (sums, levels, max) {
    for (let x = 1; x <= max; x++) {
        for (let y = 1; y <= max; y++) {
            sums[x][y] = sums[x][y - 1] + sums[x - 1][y] - sums[x - 1][y - 1] + levels[x][y];
        }
    }

    return sums;
}

function getSquareTotal(sums, size, x, y) {
    let totalArea = sums[x + size][y + size];
    let topLeftArea = 0;
    let leftArea = 0;
    let topArea = 0;

    if (0 < x && 0 < y) {
        topLeftArea = sums[x - 1][y - 1];
    }

    if (0 < x) {
        leftArea = sums[x - 1][y + size];
    }

    if (0 < y) {
        topArea = sums[x + size][y - 1];
    }

    return totalArea + topLeftArea - leftArea - topArea;
}

function findHighestPowerLevel(sums, size, min, max) {
    let result = [0, 0, -Number.MAX_SAFE_INTEGER];
    let total;

    size = size - 1;
    for (let x = min; x <= max - size; x++) {
        for (let y = min; y <= max - size; y++) {
            total = getSquareTotal(sums, size, x, y);
            if (total > result[2]) {
                result[0] = x;
                result[1] = y;
                result[2] = total;
            }
        }
    }
    
    return result;
}

function findBestSquare(sums, minSize, maxSize, minDim, maxDim) {
    let result = [0, 0, 0, -Number.MAX_SAFE_INTEGER];
    let candidate;

    for (let size = minSize; size <= maxSize; size++) {
        candidate = findHighestPowerLevel(sums, size, minDim, maxDim);

        if (candidate[2] > result[3]) {
            result[0] = candidate[0];
            result[1] = candidate[1];
            result[2] = size;
            result[3] = candidate[2];
        }
    }

    return result;
}

module.exports = {
    solveA: function (input, minDim = 1, maxDim = 300) {
        let serialNumber = parseInt(input.slice(0, -1) ,10);

        let levels = generateArray(maxDim);
        levels = setPowerLevels(levels, serialNumber, minDim, maxDim);

        let sums = generateArray(maxDim);
        sums = calculateSums(sums, levels, maxDim);

        let result = findHighestPowerLevel(sums, 3, minDim, maxDim);
        return `${result[0]},${result[1]}`;
    },

    solveB: function (input, minDim = 1, maxDim = 300, minSize = 1, maxSize = 300) {
        let serialNumber = parseInt(input.slice(0, -1) ,10);

        let levels = generateArray(maxDim);
        levels = setPowerLevels(levels, serialNumber, minDim, maxDim);

        let sums = generateArray(maxDim);
        sums = calculateSums(sums, levels, maxDim);

        let result = findBestSquare(sums, minSize, maxSize, minDim, maxDim);
        return `${result[0]},${result[1]},${result[2]}`;
    }
};
