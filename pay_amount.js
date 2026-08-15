function pay_amount(amount) {
    // Calculate the maximum number of Rs.5 coins
    let num_rs_5_coins = Math.floor(amount / 5);

    // Calculate the remaining amount
    let remaining_amount = amount - (num_rs_5_coins * 5);

    // Calculate the number of Rs.2 coins
    let num_rs_2_coins = Math.floor(remaining_amount / 2);

    // Calculate the total number of coins used
    let total_coins = num_rs_5_coins + num_rs_2_coins;

    // Return the result
    return `${num_rs_5_coins}*Rs.5 + ${num_rs_2_coins}*Rs.2 = ${total_coins}`;
}

// Example usage
let inputs = [30, 37, 41];

for (let amount of inputs) {
    console.log(`Input: ${amount}, Output: ${pay_amount(amount)}`);
}
