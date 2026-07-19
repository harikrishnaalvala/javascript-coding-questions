function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function sumOfNonPrimes(arr) {
    let sum = 0;

    for (let num of arr) {
        if (!isPrime(num)) {
            sum += num;
        }
    }

    return sum;
}

// Example
const arr = [2, 4, 5, 6, 7, 8, 9, 11];
console.log(sumOfNonPrimes(arr)); // 27
