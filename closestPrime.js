function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function closestPrime(num) {
    if (isPrime(num)) {
        return num;
    }

    let lowerPrime = num - 1;
    let upperPrime = num + 1;

    while (true) {
        if (lowerPrime >= 2 && isPrime(lowerPrime)) {
            return lowerPrime;
        } else if (isPrime(upperPrime)) {
            return upperPrime;
        } else {
            lowerPrime--;
            upperPrime++;
        }
    }
}

// Example usage
let inputs = [20, 28, 12, 5];

for (let num of inputs) {
    console.log(`Input: ${num}, Output: ${closestPrime(num)}`); 
}

/* Input: 20, Output: 19
Input: 28, Output: 29
Input: 12, Output: 11
Input: 5, Output: 5 */
