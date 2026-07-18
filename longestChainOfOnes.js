function longestChainOfOnes(arr){
    let current=0
    let max_chain=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]===1){
            current++
            max_chain=Math.max(max_chain,current)
        }else{
            current=0
        }
    }
    return max_chain
}
const arr=[0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0]
const result=longestChainOfOnes(arr)
console.log(result)
