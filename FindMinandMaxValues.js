// Using Math Methods

const arr = [10, 5, 20, 8, 15];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min); // 5
console.log(max); // 20

// Without Inbuilt Methods

const arr = [10, 5, 20, 8, 15];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
  if (arr[i] > max) max = arr[i];
}

console.log(min); // 5
console.log(max); // 20
