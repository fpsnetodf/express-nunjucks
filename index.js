const express = require('express')
const nunjucks = require('nunjucks')

var app = express()

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

app.set('view engine', 'html')

const PORT = '8000'

app.get('/', (req, res) => {
    const lista = ["Francisco", "Alanna", "Wendy", "Vitoria", "Bruno"]
  res.render('home/index.html',{lista: lista})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
