function printNumbers(arr) {
    let result = [];

    for (let num of arr) {
        if (num % 5 === 4) {
            result.push(num);
        }
    }

    console.log(result.join(" "));
}

// Example 1
printNumbers([19, 10, 44, 3, 11, 129]); // 19 44 129

// Example 2
printNumbers([13, 4]); // 4
