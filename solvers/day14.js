function calculateScores(targetLength) {
    let scores = new Array(targetLength);
    scores[0] = 3;
    scores[1] = 7;

    let currentLength = 2;
    let indexElfA = 0;
    let indexElfB = 1;

    let sum;
    let scoreA;
    let scoreB;
    while (currentLength < targetLength) {
        scoreA = scores[indexElfA];
        scoreB = scores[indexElfB];

        sum = scoreA + scoreB;
        if (10 <= sum) {
            scores[currentLength++] = Math.floor(sum / 10);
        }

        scores[currentLength++] = sum % 10;
        indexElfA = (1 + indexElfA + scoreA) % currentLength;
        indexElfB = (1 + indexElfB + scoreB) % currentLength;
    }

    return scores;
}

module.exports = {
    solveA: function (input) {
        let targetIndex = parseInt(input.slice(0, -1), 10);
        let targetLength = targetIndex + 12;
        let scores = calculateScores(targetLength);
        return scores.slice(targetIndex, targetIndex + 10).join('');
    },

    solveB: function (input, arrLength = 20300000) {
        let desiredSequence = input.slice(0, -1);
        let firstDigit = parseInt(desiredSequence[0], 10);
        let desiredSize = desiredSequence.length;
        let arr = calculateScores(arrLength);

        let i = 0;
        let foundIndex = -1;
        while (-1 === foundIndex && i < arr.length) {
            if (firstDigit === arr[i] && desiredSequence === arr.slice(i, i + desiredSize).join('')) {
                foundIndex = i;
            }

            i++;
        }

        return foundIndex;
    }
};
