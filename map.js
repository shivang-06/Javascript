//This is an implementation of inbuilt map function
//this function traverses an array and try to change its value without chaning the actual value
//This function doesn't change actual array.

const arr= [1,2,3,4,5,6]
function doubleIt(x){
    return 2*x
}
function squarer(x){
    return x*x
}

const sArr = arr.map(squarer)
const dArr = arr.map(doubleIt)

console.log(sArr)
console.log(dArr)