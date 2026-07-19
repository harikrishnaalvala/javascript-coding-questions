function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function printPrimes(start, end) {
    let primesArray=[]
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primesArray.push(i)
        }
    }
    return primesArray
}

// Example
let result=printPrimes(10, 30);
console.log(result)
