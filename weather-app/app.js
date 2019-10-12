
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
console.log(process.argv[2])
if (!address) {
  console.log('Please provide a location!')
} else {

geocode(address, (error, data) => {
  if (error) {
    return console.log(error)
  }


  forecast(data.longitude, data.latitude, (error, forecastData) => {

  if (error) {
    return console.log(error)
  }

  console.log(data.location)
  console.log(forecastData)
  })



})
}
