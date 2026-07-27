function minCoinsForAmount(amount) {
    let fiveRupeeCoins = Math.floor(amount / 5);
    let remainder = amount % 5;

    // Check if the remainder can be paid using 2 rupee coins
    if (remainder % 2 === 0) {
        let twoRupeeCoins = Math.floor(remainder / 2);
        let totalCoins = fiveRupeeCoins + twoRupeeCoins;

        return `5 rupee coins: ${fiveRupeeCoins}, 2 rupee coins: ${twoRupeeCoins}, Total coins: ${totalCoins}`;
    } else {
        return "It is not possible";
    }
}

// Example
console.log(minCoinsForAmount(345)); // 5 rupee coins: 69, 2 rupee coins: 0, Total coins: 69
