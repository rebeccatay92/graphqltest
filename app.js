const express = require('express')
const bodyParser = require('body-parser')

const Sequelize = require('sequelize')
const db = require('./models/index')

const schema = require('./schema')
const {graphqlExpress, graphiqlExpress } = require('apollo-server-express')

/* -----express routing and port ------ */
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// app.get('/', function (req, res) {
//   res.render('index.html')
// })

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`Graphql is running on port ${port}`)
})
