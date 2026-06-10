function firstRepeatedIndex(arr) {
  const seen = new Set();

  for (let i = arr.length - 1; i >= 0; i--) {
    if (seen.has(arr[i])) {
      var index = i;
    }
    seen.add(arr[i]);
  }

  return index ?? -1;
}

console.log(firstRepeatedIndex([4, 5, 1, 2, 5, 3]));
