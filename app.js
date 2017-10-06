const express = require('express')
const Sequelize = require('sequelize')
const db = require('./models/index')

/* -----express routing and port ------ */
const app = express()
app.get('/', function (req, res) {
  res.render('index.html')
})
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`express is running on port ${port}`)
})
