// Method 1: Using a Loop (Recommended) :

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Method 2: Using Recursion :

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Method 3: Using reduce() :

function factorial(n) {
    if (n === 0) return 1;

    return Array.from({ length: n }, (_, i) => i + 1)
                .reduce((acc, curr) => acc * curr, 1);
}

console.log(factorial(5)); // 120
