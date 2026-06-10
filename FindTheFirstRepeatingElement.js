function firstRepeatingElement(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return -1;
}

console.log(firstRepeatingElement([4, 5, 1, 2, 5, 3])); // 5
