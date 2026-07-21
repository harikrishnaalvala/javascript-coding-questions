function countVowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    for (let ch of str) {
        if (ch >= 'a' && ch <= 'z') {
            if ("aeiou".includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log("Vowel Count:", vowels);
    console.log("Consonant Count:", consonants);
}

// Example
countVowelsAndConsonants("Hello World");
// Vowel Count: 3
// Consonant Count: 7
