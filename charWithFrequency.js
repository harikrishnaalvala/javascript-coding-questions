function charWithFrequency(string){
    if(!string){
        return -1
    }
    let result=""
    let a=string[0]
    let count=1 
    for(let i=1;i<string.length;i++){
        if(string[i]===a){
            count++
        }else{
            result+=a+count 
            a=string[i]
            count=1
        }
    }
    result+=a+count 
    return result
}
const string="aaabbaccd"
const result=charWithFrequency(string)
console.log(result) // a3b2a1c2d1
