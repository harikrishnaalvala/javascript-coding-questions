let str = "banana";
let ch = "a";

let result = "";

for (let c of str) {
  if (c !== ch) {
    result += c;
  }
}

console.log(result); // bnn

// method -2 :

let str = "banana";
let ch = "a";

console.log(str.split(ch).join("")); // bnn

// method -3 :

console.log(str.replaceAll(ch, ""));
