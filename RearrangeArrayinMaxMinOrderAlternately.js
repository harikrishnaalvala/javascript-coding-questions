function rearrange(arr) {
    let result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (left !== right) {
            result.push(arr[right--]);
            result.push(arr[left++]);
        } else {
            result.push(arr[left++]);
        }
    }

    return result;
}

console.log(rearrange([1,2,3,4,5,6])); // [6,1,5,2,4,3]
