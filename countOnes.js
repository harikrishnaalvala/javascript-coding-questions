function countOnes(num) {
    let count = 0;

    while (num > 0) {
        num = num & (num - 1);
        count++;
    }

    return count;
}

console.log(countOnes(10)); // 2
