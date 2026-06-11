// With Set

const arr = [1, 2, 3, 2, 4, 1, 5];

const unique = [...new Set(arr)];

console.log(unique); // [1, 2, 3, 4, 5]

// Without Set

const arr = [1, 2, 3, 2, 4, 1, 5];
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i]);
  }
}

console.log(result); // [1, 2, 3, 4, 5]
