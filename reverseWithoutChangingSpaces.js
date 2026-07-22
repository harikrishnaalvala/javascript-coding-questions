function reverseWithoutChangingSpaces(str) {
    let chars = str.split("");
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (chars[left] === " ") {
            left++;
        } else if (chars[right] === " ") {
            right--;
        } else {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join("");
}

// Example
const input = "a bc def g";
console.log(reverseWithoutChangingSpaces(input)); // g fe dcb a
