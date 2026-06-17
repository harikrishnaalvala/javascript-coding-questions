function findSubarray(arr, target) {
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            return arr.slice(start, end + 1);
        }
    }

    return [];
}

console.log(findSubarray([1,2,3,7,5], 12)); // [2,3,7]
