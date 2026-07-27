function expandNumber(num) {
    let str = num.toString();
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0") {
            let value = str[i] + "0".repeat(str.length - i - 1);
            result.push(value);
        }
    }

    console.log(result.join(" + "));
}

// Test Cases
expandNumber(43018); // 40000 + 3000 + 10 + 8
expandNumber(12345); // 10000 + 2000 + 300 + 40 + 5
