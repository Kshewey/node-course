const request = require('request')
//
// const url = 'https://api.darksky.net/forecast/114ce9727c99f6fb5af2204f51b9501b/37.8267,-122.4233'
//
// request({ url: url, json: true }, (error, response) => {
//
//   if (error) {
//     console.log("Unable to connect to weather service")
//   } else if (response.body.error) {
//     console.log('Unalbe to find location')
//   } else {
//   console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out.  There is a ' + response.body.currently.precipProbability + '% chance of rain')
// }
// })

// geocoding

const mapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3NoZXdleSIsImEiOiJjazFnb29mcmgwMjVsM2l0ZjhnOGJzMDN5In0.edL7638VFPHORKBsovXREw"

request({ url: mapBoxURL, json: true }, (error, response) => {

  if (error) {
    console.log("Unable to connect to location services")
  } else if (response.body.features.length == 0) {
    console.log("Unable to find location")
  } else {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude, longitude)
}
})
