const express = require('express')
const Sequelize = require('sequelize')

/* ----- setting up database config ------ */

// can replace [dev] with [env]
const config = require('../config/config.json')['development']

var sequelize = new Sequelize(config.database, config.username, config.password, config)

var db = {
  User: sequelize.import('user'),
  // Pet: sequelize.import('./models/pet')
}
console.log(db)

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = db;
