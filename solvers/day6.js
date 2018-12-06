var finiteCoordinates;
var coordinates;
var closestLocationsCounts;

var maxX;
var maxY;
var minX;
var minY;

function initializeVariables () {
    maxX = 0;
    maxY = 0;
    minX = Number.MAX_SAFE_INTEGER;
    minY = Number.MAX_SAFE_INTEGER;

    coordinates = [];
    finiteCoordinates = {};
    closestLocationsCounts = {};
}

function insertCoordinate (coordinate) {
    let pattern = /(\d+), (\d+)/g;
    let matches = pattern.exec(coordinate);
    let x = parseInt(matches[1], 10);
    let y = parseInt(matches[2], 10);

    maxX = Math.max(x, maxX);
    maxY = Math.max(y, maxY);
    minX = Math.min(x, minX);
    minY = Math.min(y, minY);

    let arr = [x, y];
    coordinates.push(arr);
    finiteCoordinates[arr] = true;
    closestLocationsCounts[arr] = 0;
}

function findClosestCoordinate (x, y) {
    let lowestDistance = Number.MAX_SAFE_INTEGER;
    let distance;
    let bestCandidate;
    let lowestDistanceCount;

    coordinates.forEach((candidate) => {
        distance = Math.abs(x - candidate[0]) + Math.abs(y - candidate[1]);
        if (distance === lowestDistance) {
            lowestDistanceCount++;
        }

        if (distance < lowestDistance) {
            bestCandidate = candidate;
            lowestDistance = distance;
            lowestDistanceCount = 1;
        }
    });

    if (1 === lowestDistanceCount) {
        closestLocationsCounts[bestCandidate]++;
    }

    if(x === minX || y === minY || x === maxX || y === maxY) {
        finiteCoordinates[bestCandidate] = false;
    }
}

function isWithinLimitDistance(x, y, limitDistance) {
    let totalDistance = 0;
    coordinates.forEach((candidate) => {
        totalDistance += Math.abs(x - candidate[0]) + Math.abs(y - candidate[1]);
    });

    return totalDistance < limitDistance;
}

module.exports = {
    solveA: function (input) {
        initializeVariables();
        input.slice(0, -1).split('\n').forEach(insertCoordinate);

        let x;
        let y;
        for(x = minX; x <= maxX; x++) {
            for(y = minY; y <= maxY; y++) {
                findClosestCoordinate(x, y);
            }
        }

        let counts = coordinates.filter((x) => finiteCoordinates[x]).map((x) => closestLocationsCounts[x]);
        return Math.max(...counts);
    },

    solveB: function (input, limit = 10000) {
        let totalRegionSize = 0;
        initializeVariables();
        input.slice(0, -1).split('\n').forEach(insertCoordinate);

        let x;
        let y;
        for(x = minX; x <= maxX; x++) {
            for(y = minY; y <= maxY; y++) {
                totalRegionSize += isWithinLimitDistance(x, y, limit);
            }
        }

        return totalRegionSize;
    }
};
