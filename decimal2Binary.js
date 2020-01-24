// In this question we convert a decimal number into binary number.

// I have included to implementation to the above problem

// First implementation : In this converted number is stored in an Array.

function DectoBin(num){
    var arr=[]
    var dig
    while (num!=0) {
        if(num % 2 ===0){
            num = num /2
            dig = 0
        }
        else{
            num = num/2 -0.5
            dig = 1
        }
        arr.unshift(dig)
    }
    console.log(arr)
}

DectoBin(13)


// Second implementation: in this number is stored as a number only.

function dec2Bin(dec){
    var pv = 1      // Place value 
    var bin = 0
    while (dec!=0) {
        var fv = dec%2   //face value
        bin = fv * pv+bin
        dec = Math.floor(dec/2) // to use integer only
        pv = pv*10;   
    }
    return bin
}
var newBin = dec2Bin(13)
console.log(newBin)