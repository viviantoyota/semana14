const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contatoSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    dataNascimento:{
        type: Number,
        required: true
    },
    fotoPerfil:{
        type: String,
        required: false
    }

})

const agendaCollection = mongoose.model('agenda', contatoSchema)

module.exports = agendaCollection

