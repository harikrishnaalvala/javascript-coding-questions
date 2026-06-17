// A leader is greater than all elements to its right.

function findLeaders(arr) {
    let leaders = [];
    let maxRight = arr[arr.length - 1];

    leaders.push(maxRight);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
            leaders.push(arr[i]);
        }
    }

    return leaders.reverse();
}

console.log(findLeaders([16,17,4,3,5,2])); // [17,5,2]
