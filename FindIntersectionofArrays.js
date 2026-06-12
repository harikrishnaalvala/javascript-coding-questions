const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const intersection = arr1.filter(item =>
  arr2.includes(item)
);

console.log(intersection); // [3, 4]


// Without Inbuilt Methods

const result = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
}

console.log(result); // [3, 4]
