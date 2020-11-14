const express = require('express')
const router = express.Router()
const controller = require('../controller/agendaController')

router.get('/contatos', controller.getAll)
router.post('/contatos/criar', controller.createContact)
router.get('/contatos/**nome/[NOME]', controller.getContactByName)
router.get('/contatos/**id/[ID]', controller.getContactById)
router.delete('/contatos/deletar/[ID]', controller.deleteById)
router.patch('/contatos/atualizar/telefone/[ID]', controller.updateNumberById)


