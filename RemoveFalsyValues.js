// Falsy values in JavaScript:

false
0
""
null
undefined
NaN

// Using filter :

const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

const result = arr.filter(Boolean);

console.log(result); // [1, 2, 3]


// Without Inbuilt Methods :

const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

const result = [];

for (let item of arr) {
  if (item) {
    result.push(item);
  }
}

console.log(result); // [1, 2, 3]
