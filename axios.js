// request => Promise based library
const axios = require("axios")

// Async function is used so that we can wait unti the response is arrived.
//http request!me
async function helper(){
    // make http get request to a server
    // await halts the code at its used line until the response is achieved.
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    // your requested information will be inside "data" key.

    console.log(response.data)
}

helper();