const getRawWeather = require("../utilities/getRawWeather")
const ora = require("ora")
const loc = require("../utilities/getLocation")
module.exports = async function (location) {
    const spinner = ora("Loading weather....");
    if(location == undefined){
        location = await loc();
    }
    spinner.start()
    //5-day weather
    const fullWeather = await getRawWeather(location)
    // filter data for retreiving today's weather data
    const TodaysWeather = fullWeather[0];
    const currentState = TodaysWeather["weather_state_name"];
    // to remove decimals
    const temp = Math.ceil(TodaysWeather["the_temp"]);
    spinner.stop()
    // template String syntax=> you can also use normal strings
    console.log(`Current conditions in ${location}
                    ${temp} ${currentState}
                          `);
}