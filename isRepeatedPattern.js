function isRepeatedPattern(str) {
    for (let i = 1; i <= str.length / 2; i++) {
        if (str.length % i === 0) {
            let pattern = str.slice(0, i);

            if (pattern.repeat(str.length / i) === str) {
                return true;
            }
        }
    }
    return false;
}

console.log(isRepeatedPattern("abcabc")); // true
console.log(isRepeatedPattern("abcd"));   // false
