function findNumbersWithRemainderThree(nums) {
    return nums.filter(num => num % 7 === 3);
}

// Test
const inputArray = [7, 17, 5, 45];
const output = findNumbersWithRemainderThree(inputArray);

console.log("Output:", output); // Output: [17, 45]
