const path = require('path')
const express = require('express')



const app = express()
const publicDirectory = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Kevin'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Kevin Shewey'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'Are you lost?  You\'ve come to the right place!'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: "It's hot for October",
    location: "Right here"
  })
})





app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
