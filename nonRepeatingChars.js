function nonRepeatingChars(str) {
    let freq = {};
    let result = "";

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (freq[ch] === 1) {
            result += ch;
        }
    }

    return result;
}

console.log(nonRepeatingChars("programming")); // poain
