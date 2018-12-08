function retrieveMetadata (arr, idx = 0) {
    let nbOfChildren = arr[idx];
    let nbOfMetadata = arr[idx + 1];
    let firstBodyIdx = idx + 2;

    if(0 === arr[idx]) {
        arr[idx] = arr.slice(firstBodyIdx, firstBodyIdx + nbOfMetadata).reduce((acc, v) => acc + v, 0);
        arr.splice(idx + 1, nbOfMetadata + 1);
        return arr;
    }

    let i = 0;
    while (i < nbOfChildren) {
        arr = retrieveMetadata(arr, idx + 2 + i);
        i++;
    }

    let slice = arr.slice(firstBodyIdx, firstBodyIdx + nbOfChildren + nbOfMetadata);
    arr[idx] = slice.reduce((acc, v) => acc + v, 0);
    arr.splice(idx + 1, 1 + nbOfChildren + nbOfMetadata);
    return arr;
}

function reduceNode (arr, idx = 0) {
    let nbOfChildren = arr[idx];
    let nbOfMetadata = arr[idx + 1];
    let firstBodyIdx = idx + 2;

    if (0 === nbOfChildren) {
        arr[idx] = arr.slice(firstBodyIdx, firstBodyIdx + nbOfMetadata).reduce((acc, v) => acc + v, 0);
        arr.splice(idx + 1, nbOfMetadata + 1);
        return arr;
    }

    let i = 0;
    while (i < nbOfChildren) {
        arr = reduceNode(arr, firstBodyIdx + i);
        i++;
    }

    arr[idx] = arr.slice(firstBodyIdx + nbOfChildren, firstBodyIdx + nbOfChildren + nbOfMetadata)
        .filter((x) => x <= nbOfChildren).map((x) => x - 1)
        .reduce((acc, v) => acc + arr[firstBodyIdx + v], 0);

    arr.splice(idx + 1, 1 + nbOfChildren + nbOfMetadata);
    return arr;
}

module.exports = {
    solveA: function (input) {
        let arr = input.slice(0, -1).split(' ').map((x) => parseInt(x, 10));
        return retrieveMetadata(arr)[0];
    },

    solveB: function (input) {
        let arr = input.slice(0, -1).split(' ').map((x) => parseInt(x, 10));
        return reduceNode(arr)[0];
    }
};
