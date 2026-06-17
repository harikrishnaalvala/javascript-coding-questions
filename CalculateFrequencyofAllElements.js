function frequency(arr) {
    let map = {};

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    return map;
}

console.log(frequency([1,2,2,3,1,1,4]));

/* Output : 
{
  1:3,
  2:2,
  3:1,
  4:1
} */
