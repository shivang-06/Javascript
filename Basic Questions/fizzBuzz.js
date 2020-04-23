//FIZZ-BUZZ Problem:
// In this problem we have to print fizz if a number is divisible by 3
// and buzz if a number is divisible by 5 and if a number is divisible by both 3 and 5
// then we print fizzbuzz on console.

// The range of numbers is from 1-20

for(var i=1; i<=20;i++){
    if(i%3 === 0 && i%5 ===0){
        console.log("FizzBuzz")
    }
    else if(i%3 === 0){
                console.log("Fizz")
            }

    else if(i%5 ===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

