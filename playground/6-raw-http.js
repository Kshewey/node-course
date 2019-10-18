const https = require('https')

const url = 'https://api.darksky.net/forecast/114ce9727c99f6fb5af2204f51b9501b/40,-75'

const request = https.request(url, (response)=> {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
      console.log(chunk)
  })

    response.on('end', () => {
      const body = JSON.parse(data)
      console.log(body)
    })
})

request.on('error', (error) => {
  console.log('Danger Will Robinson', error)
})
request.end()
