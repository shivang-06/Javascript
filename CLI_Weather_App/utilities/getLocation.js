module.exports = async function () {
    const axios = require("axios")
    try {
        const response = await axios.get(`http://ip-api.com/json/`)
        return (response.data.city)
    } catch (err) {
        console.log(err)
    }
}