function reverseAlternateWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");

    // Reverse alternate words (odd index)
    for (let i = 0; i < words.length; i++) {
        if (i % 2 !== 0) {
            let reversed = "";

            // Reverse the word manually
            for (let j = words[i].length - 1; j >= 0; j--) {
                reversed += words[i][j];
            }

            words[i] = reversed;
        }
    }

    // Join the words back into a sentence
    return words.join(" ");
}

// Example
let sentence = "This is a test sentence to reverse alternate words";
console.log(reverseAlternateWords(sentence)); // This si a tset sentence ot reverse etanretla words
