var longestSleep;
var longestSleepId;

var mostFrequentSleepMinute;
var mostFrequentSleepMinuteId;

var id;
var sleepTallies;
var sleepMin;
var wakeMin;

var actions = {
    Guard: selectGuard,
    falls: setSleepStart,
    wakes: addSleepToGuard
};

function selectGuard(entry) {
    let pattern = /(?:.*) #(\d+) (?:.*)/g;
    let matches = pattern.exec(entry);
    id = parseInt(matches[1], 10);

    if(undefined === sleepTallies[id]) {
        sleepTallies[id] = new Array(60).fill(0);
    }
}

function setSleepStart(entry) {
    let pattern = /(?:.*):(\d+)(?:.*)/g;
    let matches = pattern.exec(entry);
    sleepMin = parseInt(matches[1], 10);
}

function addSleepToGuard(entry) {
    let pattern = /(?:.*):(\d+)(?:.*)/g;
    let matches = pattern.exec(entry);
    let sleepTally = sleepTallies[id];
    wakeMin = parseInt(matches[1], 10);

    while(0 !== wakeMin - sleepMin) {
        sleepTally[sleepMin]++;
        sleepMin++;
    }

    let sleepTime = sleepTally.reduce((sleep, x) => sleep += x, 0);
    if (longestSleep < sleepTime) {
        longestSleep = sleepTime;
        longestSleepId = id;
    }

    let mostFrequentMinute = Math.max(...sleepTally);
    if (mostFrequentSleepMinute < mostFrequentMinute) {
        mostFrequentSleepMinute = mostFrequentMinute;
        mostFrequentSleepMinuteId = id;
    }
}

function processEntry(entry) {
    let pattern = /(?:.*) (Guard|falls|wakes) (?:.*)/g;
    let matches = pattern.exec(entry);
    actions[matches[1]](entry);
}

function prepareTrackingVariables() {
    longestSleep = 0;
    longestSleepId = -1;
    mostFrequentSleepMinute = 0;
    mostFrequentSleepMinuteId = -1;
    sleepTallies = {};
}

module.exports = {
    solveA: function (input) {
        prepareTrackingVariables();
        input.slice(0, -1).split('\n').sort().forEach(processEntry);

        let biggestSleeperTally = sleepTallies[longestSleepId];
        let minute = biggestSleeperTally.indexOf(Math.max(...biggestSleeperTally));
        return longestSleepId * minute;
    },

    solveB: function (input) {
        prepareTrackingVariables();
        input.slice(0, -1).split('\n').sort().forEach(processEntry);
        
        let minute = sleepTallies[mostFrequentSleepMinuteId].indexOf(mostFrequentSleepMinute);
        return minute * mostFrequentSleepMinuteId;
    }
};
