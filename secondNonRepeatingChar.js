function secondNonRepeatingChar(str) {
    const freq = {};

    // Count frequency of each character
    for (const ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let count = 0;

    // Find the second non-repeating character
    for (const ch of str) {
        if (freq[ch] === 1) {
            count++;
            if (count === 2) {
                console.log(ch);
                return;
            }
        }
    }

    console.log("No non-repeating character");
}

// Example usage
secondNonRepeatingChar("swiss");     // w
secondNonRepeatingChar("abcad");     // c
secondNonRepeatingChar("aabbcc");    // No non-repeating character
secondNonRepeatingChar("aabcbde");   // d
