const axios = require('axios');

const getClima = async(lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=485940bcd87cfccb04241bea156b83c9&units=metric`)

    return res.data.main.temp;
}

module.exports = {
    getClima
}