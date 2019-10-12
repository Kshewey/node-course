const express = require('express')

const app = express()

app.get('', (req, res) => {
      res.send('Hello express!')
})

app.get('/help', (req, res) => {
  res.send('This is the help page')
})

app.get('/about', (req, res) => {
  res.send('This is the about page (dummy!)')
})

app.get('/weather', (req, res) => {
  res.send('This is where the weather app would go - if I had made it yet')
})





app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
