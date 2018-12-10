function Marble(value) {
    this.value = value;
    this.previous = undefined;
    this.next = undefined;
}

function CircularList () {
    this.currentMarble = new Marble(0);
    this.currentMarble.next = this.currentMarble;
    this.currentMarble.previous = this.currentMarble;
}

CircularList.prototype = {
    add: function (value) {
        let marble = new Marble(value);
        let previousMarble = this.currentMarble.next;
        let nextMarble = this.currentMarble.next.next;

        previousMarble.next = marble;
        marble.previous = previousMarble;
        marble.next = nextMarble;
        nextMarble.previous = marble;

        this.currentMarble = marble;

        return 0;
    },

    score: function (value) {
        let marbleToRemove = this.currentMarble;
        for(let i = 0; i < 7; i++) {
            marbleToRemove = marbleToRemove.previous;
        }

        let points = marbleToRemove.value;

        this.currentMarble = marbleToRemove.next;
        marbleToRemove.previous.next = marbleToRemove.next;
        marbleToRemove.next.previous = marbleToRemove.previous;

        return points + value;
    }
};

function initScoreboard (players) {
    let scoreboard = {};

    for (let i = 0; i < players; i++) {
        scoreboard[i] = 0;
    }

    return scoreboard;
}

module.exports = {
    solveA: function (input) {
        let pattern = /(\d+) (?:.*) (\d+) (?:.*)/g;
        let matches = pattern.exec(input);

        let players = parseInt(matches[1], 10);
        let marbleCount = parseInt(matches[2], 10);

        let scoreboard = initScoreboard(players);
        let list = new CircularList();

        let score = 0;
        let player = 0;
        for(let value = 1; value <= marbleCount; value++) {
            if (0 === value % 23) {
                score = list.score(value);
            } else {
                score = list.add(value);
            }

            scoreboard[player] += score;
            player = (player + 1) % players;
        }

        return Math.max(...Object.values(scoreboard));
    },

    solveB: function (input) {
        let pattern = /(\d+) (?:.*) (\d+) (?:.*)/g;
        let matches = pattern.exec(input);

        let players = parseInt(matches[1], 10);
        let marbleCount = parseInt(matches[2], 10) * 100;

        let scoreboard = initScoreboard(players);
        let list = new CircularList();

        let score = 0;
        let player = 0;
        let value = 1;
        for(value = 1; value <= marbleCount; value++) {
            if (0 === value % 23) {
                score = list.score(value);
            } else {
                score = list.add(value);
            }

            scoreboard[player] += score;
            player = (player + 1) % players;
        }

        return Math.max(...Object.values(scoreboard));
    }
};
