function secondSmallest(arr) {
    if (arr.length < 2) return -1;

    let smallest = Infinity;
    let second = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            second = smallest;
            smallest = num;
        } else if (num > smallest && num < second) {
            second = num;
        }
    }

    return second === Infinity ? -1 : second;
}

console.log(secondSmallest([4, 2, 7, 1, 5])); // 2
console.log(secondSmallest([1, 1, 1]));       // -1
console.log(secondSmallest([5]));             // -1
