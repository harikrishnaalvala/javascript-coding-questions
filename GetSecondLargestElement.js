// Using Sort

const arr = [10, 5, 20, 8, 15];

const secondLargest = [...new Set(arr)]
  .sort((a, b) => b - a)[1];

console.log(secondLargest); // 15

// Without Sort (Interview Preferred) 

const arr = [10, 5, 20, 8, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log(secondLargest); // 15
