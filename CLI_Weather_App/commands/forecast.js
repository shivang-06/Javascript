const getRawWeather = require("../utilities/getRawWeather");
const loc = require("../utilities/getLocation")
const ora = require("ora")
module.exports = async function (location) {
    const spinner = ora("Loading Weather....");
    if(location == undefined){
        location = await loc();
    }
    spinner.start()
    // spinner.text("Loading Weather....")
    //5-day weather
    const fullWeather = await getRawWeather(location)
    spinner.stop();
    // Loop to print
    for (let i = 0; i < fullWeather.length; i++) {
        const date = fullWeather[i].applicable_date
        const state = fullWeather[i].weather_state_name;
        const temp = Math.ceil(fullWeather[i].the_temp);
        const low = Math.floor(fullWeather[i].min_temp);
        const high = Math.floor(fullWeather[i].max_temp);
        console.log(`Date: ${date} || Low: ${low} || High: ${high} || State: ${state}`);
    }
}