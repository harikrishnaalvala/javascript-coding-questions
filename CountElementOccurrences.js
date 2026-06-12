const arr = [1, 2, 3, 2, 1, 1, 4];

const count = {};

for (let num of arr) {
  count[num] = (count[num] || 0) + 1;
}

console.log(count);

// Output :

{
  1: 3,
  2: 2,
  3: 1,
  4: 1
}

// Time Complexity: O(n)
