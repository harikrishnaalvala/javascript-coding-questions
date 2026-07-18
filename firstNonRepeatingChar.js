function firstNonRepeatingChar(string){
    let fre={}
    for (let i of string){
        fre[i]=(fre[i] || 0)+1
        
    }
    for(let i of string){
        if (fre[i]===1){
            return i
        }
    }
    return "there is no non repeating characters"
}
const string="amazon"
const result=firstNonRepeatingChar(string)
console.log(result) // m
