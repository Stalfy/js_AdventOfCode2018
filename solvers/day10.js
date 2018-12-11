let coordinates;
let velocities;

let minX;
let maxX;
let minY;
let maxY;

function scanPoint (point) {
    point = point.replace(/\s*/g, '');

    let pattern = /(?:.*<)(-?\d+)(?:,)(-?\d+)(?:.*<)(-?\d+)(?:,)(-?\d+)(?:>)/g;
    let matches = pattern.exec(point);

    let coordinate = {
        x: parseInt(matches[1], 10), 
        y: parseInt(matches[2], 10)
    };

    let velocity = {
        x: parseInt(matches[3], 10),
        y: parseInt(matches[4], 10)
    };

    coordinates.push(coordinate);
    velocities.push(velocity);
}

function countRequiredIncrements (coordinatesArr, velocitiesArr) {
    let dy = Number.MAX_SAFE_INTEGER - 1;
    let prevDy = Number.MAX_SAFE_INTEGER;
    let y;

    let increments = 0;

    while (dy < prevDy) {
        increments++;
        prevDy = dy;

        minY = Number.MAX_SAFE_INTEGER;
        maxY = -Number.MAX_SAFE_INTEGER;

        coordinatesArr.forEach((c, index) => {
            y = c.y + velocitiesArr[index].y * increments;
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        });

        dy = maxY - minY;
    }

    return increments - 1;
}

function updateCoordinates(coordinates, velocities, increments) {
    minX = Number.MAX_SAFE_INTEGER;
    minY = Number.MAX_SAFE_INTEGER;
    maxX = -Number.MAX_SAFE_INTEGER;
    maxY = -Number.MAX_SAFE_INTEGER;

    coordinates.forEach((c, index) => {
        c.x += velocities[index].x * increments;
        c.y += velocities[index].y * increments;
        minX = Math.min(minX, c.x);
        minY = Math.min(minY, c.y);
        maxX = Math.max(maxX, c.x);
        maxY = Math.max(maxY, c.y);
    });

    return coordinates;
}

function display (coordinates, minX, maxX, minY, maxY) {
    let str = '\n';
    
    for (let j = minY; j <= maxY; j++) {
        for (let i = minX; i <= maxX; i++) {
            let c = [i, j];
            if (-1 !== coordinates.findIndex((v) => isSameCoordinate(v, c))) {
                str += '#';
            } else {
                str += '.';
            }
        }

        str += '\n';
    }

    return str;
}

function isSameCoordinate(c1, c2) {
    let o = Object.values(c1);
    let v = o[0] === c2[0];
    v &= o[1] === c2[1];

    return v;
}

function initializeVariables () {
    coordinates = [];
    velocities = [];
    minX = Number.MAX_SAFE_INTEGER;
    minY = Number.MAX_SAFE_INTEGER;
    maxX = -Number.MAX_SAFE_INTEGER;
    maxY = -Number.MAX_SAFE_INTEGER;
}

module.exports = {
    solveA: function (input) {
        initializeVariables();
        input.slice(0, -1).split('\n').forEach(scanPoint);

        let increments = countRequiredIncrements(coordinates, velocities);
        coordinates = updateCoordinates(coordinates, velocities, increments);
        let message = display(coordinates, minX, maxX, minY, maxY);
        return message;
    },

    solveB: function (input) {
        initializeVariables();
        input.slice(0, -1).split('\n').forEach(scanPoint);
        return countRequiredIncrements(coordinates, velocities);
    }
};
