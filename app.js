const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./model/repository')
db.connect()
const index = require('./routes/index')
const contatos = require('./routes/agendaRoutes')
app.use(cors())
app.use(express.json())
app.use('/', index)
app.use('/contatos', contatos)

module.exports = app
