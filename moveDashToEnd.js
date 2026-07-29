function moveDashToEnd(arr) {
    let result = [];

    // Add all non-dash elements
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "-") {
            result.push(arr[i]);
        }
    }

    // Add all dashes at the end
    while (result.length < arr.length) {
        result.push("-");
    }

    return result;
}

// Example
let arr = ["a", "b", "-", "c", "-", "-", "d", "-"];
console.log(moveDashToEnd(arr)); // ["a", "b", "c", "d", "-", "-", "-", "-"]
