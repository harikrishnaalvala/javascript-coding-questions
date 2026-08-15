function moveHyphens(arr) {
    let result = [];

    for (let x of arr) {
        if (x !== '-') {
            result.push(x);
        }
    }

    while (result.length < arr.length) {
        result.push('-');
    }

    return result;
}

console.log(moveHyphens(['a', 'b', '-', 'c', '-', '-', 'd', '-']));
