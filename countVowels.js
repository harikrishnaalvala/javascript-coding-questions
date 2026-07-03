function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); // 3

// Method 2: Using filter() :

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return str
        .toLowerCase()
        .split('')
        .filter(char => vowels.includes(char))
        .length;
}

console.log(countVowels("Hello World")); // 3
