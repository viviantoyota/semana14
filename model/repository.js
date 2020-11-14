const { response } = require("express");

const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/reprograma'
const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true})
    const connection = mongoose.connection
    connection.on('error', () => console.error('erro ao se conectar'))
}

module.exports = {
    connect
}