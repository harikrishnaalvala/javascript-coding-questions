function commonValues(arr1, arr2) {
    let result = [];

    for (let num of arr1) {
        if (arr2.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

console.log(commonValues(arr1, arr2)); // [3, 4, 5]

// Set method :

function commonValues(arr1, arr2) {
    let set = new Set(arr2);
    let result = [];

    for (let num of arr1) {
        if (set.has(num)) {
            result.push(num);
        }
    }

    return result;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

console.log(commonValues(arr1, arr2)); // [3, 4, 5]
