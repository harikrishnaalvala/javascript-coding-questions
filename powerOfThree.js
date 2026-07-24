function powerOfThree(arr) {
    let result = [];

    for (let num of arr) {
        let temp = num;

        while (temp > 1 && temp % 3 === 0) {
            temp /= 3;
        }

        if (temp === 1) {
            result.push(num);
        }
    }

    return result;
}

// Example
const arr = [3, 5, 27, 15];
console.log(powerOfThree(arr)); // [3, 27]
