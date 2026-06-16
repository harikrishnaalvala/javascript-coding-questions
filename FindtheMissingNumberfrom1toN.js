let arr = [1, 2, 3, 5];
let n = 5;

let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((sum, num) => sum + num, 0);

console.log(expectedSum - actualSum);
