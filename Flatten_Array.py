// Using flat() Method :

const arr = [1,2,3,[4,5,6,[7,8,[10,11]]],9];

const result = arr.flat(Infinity);

console.log(result);


// Without flat() Method :

const arr = [1,2,3,[4,5,6,[7,8,[10,11]]],9];

function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flattenArray(arr));

