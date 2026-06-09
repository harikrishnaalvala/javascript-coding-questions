// Method-1 :

function sum(a) {
  let total = a;

  function inner(b) {
    if (b === undefined) {
      return total;
    }

    total += b;
    return inner;
  }

  return inner;
}

console.log(sum(10)(20)(30)());             // 60
console.log(sum(10)(20)(30)(40)(50)(60)()); // 210


// Method -2 :

function sum(a) {
  return function next(b) {
    if (b === undefined) return a;

    return sum(a + b);
  };
}

console.log(sum(10)(20)(30)());             // 60
console.log(sum(10)(20)(30)(40)(50)(60)()); // 210
