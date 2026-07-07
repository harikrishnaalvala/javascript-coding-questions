// Method 1: Using Sorting (Most Common) :

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    return str1.split('').sort().join('') ===
           str2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


// Method 2: Using Character Frequency (Optimal) :

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


// Method 3: Ignore Spaces and Case :

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) {
        return false;
    }

    return str1.split('').sort().join('') ===
           str2.split('').sort().join('');
}

console.log(isAnagram("Dormitory", "Dirty Room")); // true
console.log(isAnagram("School Master", "The Classroom")); // true
