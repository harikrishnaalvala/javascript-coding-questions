function isPerfectSquare(x) {
    let s = Math.sqrt(x);
    return s === Math.floor(s);
}

function isFibonacci(num) {
    return (
        isPerfectSquare(5 * num * num + 4) ||
        isPerfectSquare(5 * num * num - 4)
    );
}

console.log(isFibonacci(21)); // true
console.log(isFibonacci(22)); // false

// Method-2:

function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (a < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return a === num;
}

// Example
console.log(isFibonacci(21)); // true
console.log(isFibonacci(22)); // false
console.log(isFibonacci(0));  // true
console.log(isFibonacci(1));  // true
