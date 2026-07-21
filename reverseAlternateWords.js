function reverseAlternateWords(str) {
    const words = str.split(".");

    for (let i = 1; i < words.length; i += 2) {
        words[i] = words[i].split("").reverse().join("");
    }

    return words.join(".");
}

// Example
const input = "i.like.this.programme.very.much";
console.log(reverseAlternateWords(input)); // i.ekil.this.emmargorp.very.hcum
