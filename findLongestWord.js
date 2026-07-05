function findLongestWord(str) {
    const words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(findLongestWord("I love JavaScript programming"));
// Output: programming

//Method 2: Using reduce()
function findLongestWord(str) {
    return str
        .split(" ")
        .reduce((longest, word) =>
            word.length > longest.length ? word : longest
        );
}

console.log(findLongestWord("Frontend development is amazing"));
// Output: development
