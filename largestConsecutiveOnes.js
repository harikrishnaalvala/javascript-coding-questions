function largestConsecutiveOnes(inputStr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let ch of inputStr) {
        if (ch === '1') {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Example
const inputStr = "0000110111";
console.log("Output:", largestConsecutiveOnes(inputStr)); // Output: 3
