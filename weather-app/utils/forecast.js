const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/114ce9727c99f6fb5af2204f51b9501b/'+ latitude + ',' + longitude




request({ url: url, json: true }, (error, response) => {

  if (error) {
    callback("Unable to connect to weather service", undefined)
  } else if (response.body.error) {
    callback('Unable to find location', undefined)
  } else {
  callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.  There is a ' + response.body.currently.precipProbability + '% chance of rain')
}
})



}

module.exports = forecast
