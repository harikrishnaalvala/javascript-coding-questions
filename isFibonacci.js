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
