// Method 1: Using the built-in repeat() method :

function repeatString(str, n) {
    return str.repeat(n);
}

console.log(repeatString("abc", 3)); // "abcabcabc"

// Method 2: Using a loop :

function repeatString(str, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString("abc", 3)); // "abcabcabc"

// Method 3: Using Array.join() :

function repeatString(str, n) {
    return new Array(n + 1).join(str);
}

console.log(repeatString("abc", 3)); // "abcabcabc"
