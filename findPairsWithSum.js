function findPairsWithSum(arr, targetSum) {
    const seen = new Set();
    const pairs = [];

    for (const num of arr) {
        const complement = targetSum - num;

        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }

        seen.add(num);
    }

    return pairs;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6];
const targetSum = 7;

console.log("Pairs with sum", targetSum, ":", findPairsWithSum(arr, targetSum)); // Pairs with sum 7 : [ [ 4, 3 ], [ 5, 2 ], [ 6, 1 ] ]
