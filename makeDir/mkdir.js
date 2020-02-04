#!/usr/bin/env node

//How to make a script global

//1.npm init -y => Package
//2.bin property in JSON
//3. rename file
//4. shebang syntax 
//5. npm link

var fs = require("fs");

var folderName = process.argv[2]
if(typeof folderName == true){
    console.log("Please enter folderName")
    return
}
if(fs.existsSync(folderName)){          //To check if folderName already exists
    console.log(folderName + " already exists")
    return
}
fs.mkdirSync(folderName); // function to make a directory

//print the folder created
console.log("Folder "+ folderName+ " has been created");    

