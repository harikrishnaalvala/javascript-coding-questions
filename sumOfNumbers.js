// Using reduce() method :

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// Using Recursion :

const arr = [1, 2, 3, 4, 5];

function findSum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + findSum(arr.slice(1));
}

console.log(findSum(arr));
