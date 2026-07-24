function secondMaxDifference(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let firstMax = -Infinity;
    let secondMax = -Infinity;

    // Find the largest and second largest adjacent differences
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];

        if (diff > firstMax) {
            secondMax = firstMax;
            firstMax = diff;
        } else if (diff > secondMax && diff !== firstMax) {
            secondMax = diff;
        }
    }

    return secondMax;
}

// Example
const arr = [14, 12, 70, 15, 95, 65, 22, 30];
console.log("Output:", secondMaxDifference(arr)); // Output: 25
