function payAmount(amount) {
    // Calculate the maximum number of Rs.5 coins
    const numRs5Coins = Math.floor(amount / 5);

    // Calculate the remaining amount
    const remainingAmount = amount - (numRs5Coins * 5);

    // Calculate the number of Rs.2 coins
    const numRs2Coins = Math.floor(remainingAmount / 2);

    // Calculate the total number of coins used
    const totalCoins = numRs5Coins + numRs2Coins;

    // Return the result
    return `${numRs5Coins}*Rs.5 + ${numRs2Coins}*Rs.2 = ${totalCoins}`;
}

// Example usage
const inputs = [30, 37, 41];

for (const amount of inputs) {
    console.log(`Input: ${amount}, Output: ${payAmount(amount)}`);
}
/* Input: 30, Output: 6*Rs.5 + 0*Rs.2 = 6
Input: 37, Output: 7*Rs.5 + 1*Rs.2 = 8
Input: 41, Output: 8*Rs.5 + 0*Rs.2 = 8 */
