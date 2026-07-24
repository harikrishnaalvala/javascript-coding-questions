function changeAlternateWords(array, formatWord) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i] = formatWord;
        }
    }
    return array;
}

// Example
let array = ["apple", "banana", "orange", "grape"];
let formatWord = "fruit";

console.log(changeAlternateWords(array, formatWord)); // ["apple", "fruit", "orange", "fruit"]
