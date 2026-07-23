function sortDigits(num) {
    return Number(
        num
            .toString()
            .split("")
            .sort((a, b) => a - b)
            .join("")
    );
}

// Example
const input = 842957;
console.log(sortDigits(input)); // 245789
