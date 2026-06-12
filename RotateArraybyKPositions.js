// Right Rotation

const arr = [1, 2, 3, 4, 5];
const k = 2;

const result = [
  ...arr.slice(-k),
  ...arr.slice(0, arr.length - k)
];

console.log(result); // [4, 5, 1, 2, 3]



// Without Inbuilt Methods

function rotate(arr, k) {
  k = k % arr.length;

  for (let i = 0; i < k; i++) {
    let last = arr[arr.length - 1];

    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[0] = last;
  }

  return arr;
}

console.log(rotate([1,2,3,4,5], 2)); // [4, 5, 1, 2, 3]
