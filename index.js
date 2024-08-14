const express = require('express')
const nunjucks = require('nunjucks')
const path = require("path")

var app = express()

nunjucks.configure('templates', {
  autoescape: true,
  express: app
})

app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, "static")))

const PORT = '8000'

app.get('/', (req, res) => {
    const lista = ["Francisco", "Alanna", "Wendy", "Vitoria", "Bruno"]
  res.render('home/index.html',{lista: lista})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
