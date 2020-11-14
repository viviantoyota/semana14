const { request, response } = require('../app')
const contatosCollection = require('../model/agendaSchema')

const getAll = (request, response) => {
    console.log(request.url)
    contatosCollection.find((error, contatos) => {
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: 'Get feito com sucesso',
                contatos
            })
        }
    })
}

const createContact = (request, response) => {
    console.log(req.url)
    const contatosBody = req.body
    const contatos = new contatosTeste.agendaCollection(contatosBody)

    contatos.save((error) => {
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(201).send(contatos)
        }
    })
}

const getContactByName =  (req,res) => {
    const nameParam = req.params.name
    contatosTeste.agendaCollection.getContactByName(nameParam, (error, contatos) =>{
        if(error){
            return res.status(500).send(error)
        } else {
            if(contatos){
                return res.status(200).send(contatos)
            } else{
                return res.status(404).send("Contatinho não encontrado :( ")
            }
        }
    }) 
}

const getContactById =  (req,res) => {
    const idParam = req.params.id
    contatosTeste.agendaCollection.getContactById(idParam, (error, contatos) =>{
        if(error){
            return res.status(500).send(error)
        } else {
            if(contatos){
                return res.status(200).send(contatos)
            } else{
                return res.status(404).send("Contatinho não encontrado :( ")
            }
        }
    }) 
}

const deleteById = (req, res) => {
    const idParam = req.params.id
    contatosTeste.agendaCollection.findByIdAndDelete(idParam, (error, contatos) =>
    {
        if(error){
            return res.status(500).send(error)
            } else{
                if(contatos){
                    return res.status(200).send("O contatinho foi apagado :( ")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
} 

const updateNumberById = (req, res) => {
    const idParam = req.params.id
    const mcontatosBody = req.body
    const novo = {new: true}

    contatosTeste.agendaCollection.findByIdAndUpdate(
        idParam,
        contatosBody,
        novo,
        (error, contatos) =>{
            if(error){
                return res.status(500).send(error)
            } else if (contatos) {
                return res.status(200).send(contatos)
            } else{
                return res.sendStatus(404)
            }
        }
    )    
}


module.exports = {
    getAll,
    createContact,
    getContactByName,
    getContactById,
    deleteById,
    updateNumberById
}

