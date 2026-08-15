function twoSum(arr, target) {
    let seen = new Set();
    let pairs = [];

    for (let num of arr) {
        let complement = target - num;

        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }

        seen.add(num);
    }

    return pairs;
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 7)); // [ [4, 3], [5, 2], [6, 1] ]
