module.exports = async function (location) {

    // request => Promise based library
    const axios = require("axios")
    //to take multiple i/ps
    // var input = process.argv.slice(2);
    // var location = input.slice(1).join(" ")

    // Async function is used so that we can wait unti the response is arrived.
    //http request!

    // make http get request to a server
    // await halts the code at its used line until the response is achieved.
    try {

        const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`)
        
        // your requested information will be inside "data" key.
        //woeid
        const woeid = response.data[0].woeid
        // another request.
        const anotherResponse = await axios.get("https://www.metaweather.com/api/location/" + woeid + "/")
        const fullweather = anotherResponse.data["consolidated_weather"]
        const todaysWeather = anotherResponse.data["consolidated_weather"][0]; 
        const temperature = Math.ceil(todaysWeather.the_temp);
        const state = todaysWeather.weather_state_name
       return fullweather 
        //     console.log(`Current conditions in ${location}
        //    ${temperature} ${state}
        //                 `);
    } catch (err) {
        console.log(err)
    }

}




