/**
 * Factories
 */
const TrackFactory = Object.freeze({
    ' ': function() { return new Track(); },

    '^': function() { return new Track(); },
    'v': function() { return new Track(); },
    '|': function() { return new Track(); },

    '>': function() { return new Track(); },
    '<': function() { return new Track(); },
    '-': function() { return new Track(); },

    '+': function() { return new IntersectionTrack(); },

    '/': function() { return new SlashCornerTrack(); },
    '\\': function() { return new BackslashCornerTrack(); }
});

const CartFactory = Object.freeze({
    'v': function(x, y) { return new Cart('v', x, y); },
    '^': function(x, y) { return new Cart('^', x, y); },
    '>': function(x, y) { return new Cart('>', x, y); },
    '<': function(x, y) { return new Cart('<', x, y); },

    ' ': function() { return undefined; },
    '|': function() { return undefined; },
    '-': function() { return undefined; },
    '+': function() { return undefined; },
    '/': function() { return undefined; },
    '\\': function() { return undefined; }
});

/**
 * Cart manipulations
 */
const CartMover = Object.freeze({
    'v': function(cart) { cart.y += 1; return cart; },
    '^': function(cart) { cart.y -= 1; return cart; },
    '>': function(cart) { cart.x += 1; return cart; },
    '<': function(cart) { cart.x -= 1; return cart; }
});

const LeftTurn = Object.freeze({
    'v': '>',
    '^': '<',
    '>': '^',
    '<': 'v'
});

const RightTurn = Object.freeze({
    'v': '<',
    '^': '>',
    '>': 'v',
    '<': '^'
});

/**
 * Tracks
 */
class SlashCornerTrack {
    constructor () {
        this.map = new Map();
        this.map.set('<', 'v');
        this.map.set('>', '^');
        this.map.set('^', '>');
        this.map.set('v', '<');
    }

    changeDirection (direction) {
        return this.map.get(direction);
    }
}

class BackslashCornerTrack {
    constructor () {
        this.map = new Map();
        this.map.set('<', '^');
        this.map.set('>', 'v');
        this.map.set('^', '<');
        this.map.set('v', '>');
    }

    changeDirection (direction) {
        return this.map.get(direction);
    }
}

class IntersectionTrack {
    constructor () {}

    changeDirection (direction) {
        return direction;
    }
}

class Track {
    constructor () {}

    changeDirection (direction) {
        return direction;
    }
}

/**
 * Carts
 */
class Cart {
    constructor (direction, x, y) {
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.nextTurn = leftTurn;
    }

    turn() {
        this.nextTurn(this);
    }
}

function leftTurn (cart) {
    cart.direction = LeftTurn[cart.direction];
    cart.nextTurn = straight;
}

function straight (cart) {
    cart.nextTurn = rightTurn;
}

function rightTurn (cart) {
    cart.direction = RightTurn[cart.direction];
    cart.nextTurn = leftTurn;
}

/**
 * Setup functions.
 */
function buildInitialState (rows) {
    let state = {
        tracks: undefined,
        carts: undefined
    };

    let tracks = new Array(rows.length).fill(undefined);
    state.tracks = rows.reduce((acc, row, y) => { acc[y] = buildTracks(row); return acc; }, tracks);

    let carts = [];
    state.carts = rows.reduce((acc, row, y) => acc.concat(buildCarts(row, y)), carts);
    return state;
}

function buildTracks(row) {
    return row.split('').map((elem) => elem = TrackFactory[elem]());
}

function buildCarts(row, y) {
    return row.split('').map((elem, x) => elem = CartFactory[elem](x, y)).filter((e) => e !== undefined);
}

/**
 * Utilities
 */
function compareCarts(a, b) {
    if (a.y < b.y) {
        return -1;
    }

    if (a.x < b.x) {
        return -1;
    }

    return 1;
}

function detectCollision (cart, carts) {
    let coordinate = undefined;
    if(1 < carts.filter((v) => v.x === cart.x && v.y === cart.y).length) {
        coordinate = {x: cart.x, y: cart.y};
    }

    return coordinate;
}

function removeCollisions (cart, carts) {
    if(1 < carts.filter((v) => v.x === cart.x && v.y === cart.y).length) {
        carts = carts.filter((v) => v.x !== cart.x || v.y !== cart.y);
    }

    return carts;
}

/**
 * Puzzle A
 */
function tickA(state) {
    state.carts = state.carts.sort(compareCarts);

    let cart;
    for (let i = 0; i < state.carts.length && undefined === state.collisionCoordinate; i++) {
        cart = state.carts[i];
        cart = CartMover[cart.direction](cart);

        if (state.tracks[cart.y][cart.x] instanceof IntersectionTrack) {
            cart.turn();
        } else {
            cart.direction = state.tracks[cart.y][cart.x].changeDirection(cart.direction);
        }

        state.carts[i] = cart;
        state.collisionCoordinate = detectCollision(cart, state.carts);
    }

    return state;
}

/**
 * Puzzle B
 */
function tickB(state) {
    state.carts = state.carts.sort(compareCarts);
    state.carts.forEach((c) => c.checked = false);

    let cart;
    let previousLength;
    for (let i = 0; i < state.carts.length; i++) {
        cart = state.carts[i];
        if (!cart.checked) {
            cart = CartMover[cart.direction](cart);

            if (state.tracks[cart.y][cart.x] instanceof IntersectionTrack) {
                cart.turn();
            } else {
                cart.direction = state.tracks[cart.y][cart.x].changeDirection(cart.direction);
            }

            cart.checked = true;
            state.carts[i] = cart;

            previousLength = state.carts.length;
            state.carts = removeCollisions(cart, state.carts);

            if (previousLength !== state.carts.length) {
                i = -1;
            }
        }
    }

    state.carts.forEach((c) => delete c.checked);
    return state;
}

module.exports = {
    solveA: function (input) {
        let state = buildInitialState(input.slice(0, -1).split('\n'));
        state.collisionCoordinate = undefined;
        while (undefined === state.collisionCoordinate) {
            state = tickA(state);
        }

        return `${state.collisionCoordinate.x},${state.collisionCoordinate.y}`;
    },

    solveB: function (input) {
        let state = buildInitialState(input.slice(0, -1).split('\n'));
        state.collisionCoordinate = undefined;
        while (1 < state.carts.length) {
            state = tickB(state);
        }

        return `${state.carts[0].x},${state.carts[0].y}`;
    }
};
