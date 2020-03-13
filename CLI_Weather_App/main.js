#!/usr/bin/env node
const chalk = require("chalk")
const figlet = require("figlet")
console.log(chalk.cyan(figlet.textSync("WEATHER   CLI")))

// Importing packages!
const help = require("./commands/help")
const today = require("./commands/today")
const version = require("./commands/version")
const forecast = require("./commands/forecast")
const loc = require("./utilities/getLocation")

const minimist = require("minimist")



// // Spliting command and values
const input = process.argv.slice(2)
const parsedInput = minimist(input)
// console.log(parsedInput)
// Retreiving location and command value from input using minimist parsed key-value pair
const location = parsedInput.l || parsedInput.location;
const cmd = parsedInput["_"][0] 

if (cmd == "today") {
    today(location)
} else if (cmd == "forecast") {
    forecast(location)
} else if (cmd == "version") {
    version()
} else if (cmd == "help") {
    help();

} else {
    console.log("Wrong command !");

}