// Using Set

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const union = [...new Set([...arr1, ...arr2])];

console.log(union);

// Output

[1, 2, 3, 4, 5]
