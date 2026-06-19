let str = "National Aeronautics and Space Administration";

let acronym = str
  .split(" ")
  .map(word => word[0].toUpperCase())
  .join("");

console.log(acronym); // NASA
