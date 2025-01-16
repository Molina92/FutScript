const express = require('express')
const teamsRoutes = require('./teams.routes')

const app = express()

app.use('/equipos', teamsRoutes)

module.exports = app