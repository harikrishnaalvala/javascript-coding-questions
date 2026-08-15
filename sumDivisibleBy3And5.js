function sumDivisibleBy3And5() {
    let totalSum = 0;

    // Iterate from 1 to 1000
    for (let num = 1; num <= 1000; num++) {
        // Check if divisible by both 3 and 5
        if (num % 3 === 0 && num % 5 === 0) {
            totalSum += num;
        }
    }

    return totalSum;
}

let result = sumDivisibleBy3And5();

console.log(
    "Sum of numbers divisible by both 3 and 5 between 1 and 1000:",
    result
);
