// Method 1: Using a Loop :

function findLongestWordLength(str) {
    const words = str.split(" ");
    let maxLength = 0;

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped")); // 6

// Method 2: Using Math.max() :

function findLongestWordLength(str) {
    return Math.max(
        ...str.split(" ").map(word => word.length)
    );
}

console.log(findLongestWordLength("I love JavaScript programming")); // 11

// Method 3: Using reduce() :

function findLongestWordLength(str) {
    return str
        .split(" ")
        .reduce((max, word) =>
            Math.max(max, word.length), 0);
}

console.log(findLongestWordLength("Frontend development is amazing")); // 11
