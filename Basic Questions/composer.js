const arr = [1,2,3,4,5]

function multiplier(x,y){
    return x*y
}

// function adder(x,y){
//     return x+y
// }

function composer(arr , multiplier){
    let total = 1
    for(var i =0; i<arr.length;i++){
        total = multiplier(total,arr[i])
    }
    return total
}

const ans = composer(arr,multiplier)
console.log(ans)
console.log(arr)