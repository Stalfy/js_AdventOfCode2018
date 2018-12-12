function grow (state, patterns, generations) {
    let missingDots;
    let plants;
    let leadingDots;
    let trailingDots;

    for (let gen = 0; gen < generations; gen++) {
        plants = state[1];

        leadingDots = plants.indexOf('#');
        if (leadingDots < 3) {
            missingDots = 3 - leadingDots;
            plants = new Array(missingDots).fill('.').join('') + plants;
            state[0] -= missingDots;
        }

        trailingDots = plants.length - plants.lastIndexOf('#') - 1;
        if (trailingDots < 3) {
            missingDots = 3 - trailingDots;
            plants += new Array(3 - trailingDots).fill('.').join('');
        }

        let nextGen = new Array(plants.length).fill('.');
        for (let i = 2; i < plants.length - 2; i++) {
            let slice = plants.slice(i - 2, i + 3);
            let applicablePattern = patterns.find((pattern) => pattern[0] === slice);
            if (undefined !== applicablePattern) {
                nextGen[i] = applicablePattern[1];
            }
        }

        state[1] = nextGen.join('');
    }

    return state;
}

function countPlantValues (state) {
    let result = 0;
    for(let i = 0; i < state[1].length; i++) {
        if('#' === state[1][i]) {
            result += i + state[0];
        }
    }

    return result;
}

module.exports = {
    solveA: function (input) {
        let elements = input.slice(0, -1).split('\n\n');

        let initialState = elements[0].split(': ')[1];
        let notes = elements[1].split('\n').map((x) => x.split(' => '));

        let state = [0, initialState];
        state = grow(state, notes, 20);

        let result = countPlantValues(state);
        return result;
    },

    solveB: function (input, generations = 50000000000) {
        let elements = input.slice(0, -1).split('\n\n');

        let initialState = elements[0].split(': ')[1];
        let notes = elements[1].split('\n').map((x) => x.split(' => '));

        let state = [0, initialState];
        let sum;
        let previousDifference = 0;
        let difference = 1;
        let i = 0;
        while (previousDifference !== difference && i !== generations) {
            previousDifference = difference;
            sum = countPlantValues(state);
            state = grow(state, notes, 1);
            difference = countPlantValues(state) - sum;
            i++;
        }
        
        let result = countPlantValues(state) + ((generations - i) * difference);
        return result;
    }
};
