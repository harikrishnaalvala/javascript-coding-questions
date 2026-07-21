function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }

        if (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
    }

    return result;
}

const arr1 = [1, 2, 3, 4];
const arr2 = ['a', 'b'];

console.log(mergeArrays(arr1, arr2)); // [1, 'a', 2, 'b', 3, 4]
