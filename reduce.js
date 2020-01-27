const arr = [1,2,3,4,5]

function multiplier(x,y){
    return x*y
}

function adder(x,y){
    return x+y
}

const ans = arr.reduce(multiplier)
const anss = arr.reduce(adder)
console.log(arr)
console.log(ans)
console.log(anss)