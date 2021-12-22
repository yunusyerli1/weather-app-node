const request = require('request');

const forecast = (lat,lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3f28f1c434ef1eb684dc506f1546ed9d&query='+lng+','+lat+'&units=m'
    request({url, json:true}, (error,{body}={}) => {
        if(error){
            callback('unable to connect to weather api', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0]+". It is currently " + body.current.temperature +" but feels like "+body.current.feelslike)
        }
    })



}






module.exports = forecast;