const request = require('request')


var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/6e3fe6f2836aca94775d60bc9b475538/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.')
    } else if (response.statusCode === 404) {
      callback('Unable to fetch weather.')
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports.getWeather = getWeather
