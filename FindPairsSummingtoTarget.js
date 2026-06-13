function findPairs(arr, target) {
    let set = new Set();
    let result = [];

    for (let num of arr) {
        let complement = target - num;

        if (set.has(complement)) {
            result.push([complement, num]);
        }

        set.add(num);
    }

    return result;
}

console.log(findPairs([1,2,3,4,5], 6)); 

// output 
[
  [2,4],
  [1,5]
]
