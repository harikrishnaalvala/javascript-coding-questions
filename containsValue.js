function containsValue(arr, value) {
    return arr.includes(value);
}

console.log(containsValue([1, 2, 3], 2)); // true
console.log(containsValue([1, 2, 3], 4)); // false

// Method 2: Using indexOf() :

function containsValue(arr, value) {
    return arr.indexOf(value) !== -1;
}

console.log(containsValue([1, 2, 3], 2)); // true
console.log(containsValue([1, 2, 3], 4)); // false

// Method 3: Without Built-in Methods :
function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(containsValue([1, 2, 3], 2)); // true
console.log(containsValue([1, 2, 3], 4)); // false
