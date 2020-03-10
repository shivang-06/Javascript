const print = console.log;
const chalk = require("chalk")
const figlet = require("figlet")
const readline = require("readline");
const task = []

print(chalk.blue(figlet.textSync("Tasker")))
print(chalk.cyan("Type a command ()Type help to see the list of commands)"))

// creating interface
const reader = readline.createInterface({
    input: process.stdin,  // For input using CLI
    output: process.stdout, //For output on CLI
    prompt: ">>"  //To select CLI prompt symbol
})
reader.prompt()

reader.on("line", function(data){
    var cmd_data = data.split(" ");
    var cmd = data.split(" ")[0];
    var task_data = data.split(" ").slice(1).join(" ")
  if(cmd === "help"){
      print("Available Commands : ")
      print("1. add Task_name")
      print("2. ls (To list all tasks)")
      print("3. delete id (enter task if to delete it)")
    }
    else if(cmd === "ls"){
        for(let i =0 ;i <task.length;i++){
            print(chalk.magenta((i+1)+": "+task[i]))
        }
    }
    else if(cmd === "add" && task_data){
        task.push(task_data)  ;
        print(chalk.green("One task added"))
    }
    else if(cmd_data[0] === "delete"){
        let index = Number(cmd_data[1]);
        if(index>task.length){
            print("Wrong position given")
        }else{
            
        }
        let deleted = task.splice((index -1),1)
        print(chalk.red(deleted +" was deleted"))
    }
    else{
        print(chalk.red("Wrong command"))
    }

    
    reader.prompt()

})
reader.on("close" , function(){
    console.log("Thank you for using our cli")
})