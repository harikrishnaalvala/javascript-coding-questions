let arr = [1, 2, 3, 4, 2];

let hasDuplicate = new Set(arr).size !== arr.length;

console.log(hasDuplicate); // true
