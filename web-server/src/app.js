const path = require('path')
const express = require('express')
const hbs = require('hbs')



const app = express()

//define paths for Express config

const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static director to serve
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
    message: 'Are you lost?  You\'ve come to the right place!',
    name: 'Kevin'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: "It's hot for October",
    location: "Right here"
  })
})



app.get('/help/*', (req, res) => {
    res.render('404', {
      title: '404 Missing article',
      message: "Sorry, the article you're looking for isn't here"
    })
})

app.get('*', (req, res) =>{
  res.render('404' , {
    title: '404 Missing page',
    message: "Sorry, cannot find the page"
  })
})



app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
