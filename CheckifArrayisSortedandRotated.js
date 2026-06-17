function isSortedRotated(arr) {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }

    return count <= 1;
}

console.log(isSortedRotated([3,4,5,1,2])); // true
