function separateDigitsAndStrings(arr) {
    let numbers = [];
    let strings = [];

    for (let item of arr) {
        if (typeof item === "number") {
            numbers.push(item);
        } else if (typeof item === "string") {
            strings.push(item);
        }
    }

    console.log("Numbers:", numbers);
    console.log("Strings:", strings);
}

const arr = [1, "a", 2, "b", 3, "hello", 4, "world"];
separateDigitsAndStrings(arr);

// Numbers: [1, 2, 3, 4]
// Strings: ["a", "b", "hello", "world"]
