
const events = require("events")
const eventEmitter = new events()

//server side
eventEmitter.on("login", function(email,password){
    if(email == "abc@gmail.com" && password == 12345678){
        console.log("User verified")
    }
    else{
        console.log("User not verified")
    }
})

//email => abc@gmail.com

eventEmitter.on("login" , function(email,password){
    if(email == "abc@admin.com" && password == 1234){
        console.log("Welcome Admin")
    }
    else{
        console.log("You are not admin")
    }

})

//client
eventEmitter.emit("login","abc@gmail.com", 12345678)
console.log("_____________________________________________")

eventEmitter.emit("login", "abc@admin.com" , 1234)