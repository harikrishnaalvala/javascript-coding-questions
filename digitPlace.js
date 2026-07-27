function digitPlace(num) {
    let str = num.toString();
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let digit = Number(str[i]);
        let place = Math.pow(10, str.length - i - 1);

        result.push(digit * place);
    }

    console.log(result.join(", "));
}

// Example
digitPlace(4521); // 4000, 500, 20, 1
