function moveZeros(arr) {
    let zeroIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // Swap current zero with element at zeroIndex
            [arr[i], arr[zeroIndex]] = [arr[zeroIndex], arr[i]];
            zeroIndex++;
        }
    }

    return arr;
}

// Example
console.log(moveZeros([3, 5, 0, 6, 0, 0, 6, 0])); // [0, 0, 0, 0, 3, 5, 6, 6]
