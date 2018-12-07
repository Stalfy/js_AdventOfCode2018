let prequisites;
let unlocks;

function scanDependency (dependency) {
    let pattern = /(?:.*) ([A-Z]{1}) (?:.*) ([A-Z]{1}) (?:.*)/g;
    let matches = pattern.exec(dependency);
    let prequisite = matches[1];
    let unlocked = matches[2];

    if (undefined === prequisites[unlocked]) {
        prequisites[unlocked] = 0;
    }

    if (undefined === prequisites[prequisite]) {
        prequisites[prequisite] = 0;
    }

    if (undefined === unlocks[prequisite]) {
        unlocks[prequisite] = [];
    }

    if (undefined === unlocks[unlocked]) {
        unlocks[unlocked] = [];
    }

    prequisites[unlocked]++;
    unlocks[prequisite].push(unlocked);
}

function findCompletionSequence () {
    let sequence = '';
    let element;

    let remaining = Object.keys(prequisites).sort();
    while(0 !== remaining.length) {
        element = remaining.find((x) => 0 === prequisites[x]);

        sequence += element;
        unlocks[element].forEach((x) => prequisites[x]--);

        remaining.splice(remaining.indexOf(element), 1);
        delete prequisites[element];
        delete unlocks[element];
    }

    return sequence;
}

function assignTasks (assignations, remainingTasks, workersCount) {
    let task;

    let i;
    for (i = 0; i < workersCount; i++) {
        if (undefined === assignations[i]) {
            task = remainingTasks.find((x) => 0 === prequisites[x]);
            assignations[i] = task;
            delete prequisites[task];
        }
    }
}

function updateProgress (progress, assignations, minTaskTime) {
    Object.values(assignations)
        .filter((task) => undefined !== task)
        .forEach((task) => {
            if (undefined === progress[task]) {
                progress[task] = minTaskTime + task.charCodeAt(0) - 64;
            }

            progress[task]--;
        });
}

function completeTasks (progress, assignations, remainingTasks) {
    Object.keys(progress)
        .filter((task) => 0 === progress[task])
        .forEach((task) => {
            unlocks[task].forEach((x) => prequisites[x]--);

            remainingTasks.splice(remainingTasks.indexOf(task), 1);
            delete unlocks[task];
            delete progress[task];

            let index = Object.values(assignations).indexOf(task);
            delete assignations[Object.keys(assignations)[index]];
        });

    return remainingTasks;
}

function timeCompletion (minTaskTime, workersCount) {
    let timer = 0;
    let assignations = {};
    let progress = {};

    let remainingTasks = Object.keys(prequisites).sort();
    while(0 !== remainingTasks.length) {
        assignTasks (assignations, remainingTasks, workersCount);
        updateProgress (progress, assignations, minTaskTime);
        remainingTasks = completeTasks (progress, assignations, remainingTasks);

        timer++;
    }

    return timer;
}

function initVariables () {
    prequisites = {};
    unlocks = {};
}

module.exports = {
    solveA: function (input) {
        initVariables();
        input.slice(0, -1).split('\n').forEach(scanDependency);

        let result = findCompletionSequence();
        return result;
    },

    solveB: function (input, minTaskTime = 60, workers = 5) {
        initVariables();
        input.slice(0, -1).split('\n').forEach(scanDependency);

        let result = timeCompletion(minTaskTime, workers);
        return result;
    }
};
