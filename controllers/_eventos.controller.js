const { eventos } = require('../services')
const { retriveEventoAtividades, retriveEvento, retrieveEventos } = eventos

const getEventoAtividades = async (req, res, next) => {
    const { idEvento } = req.param
    try {
        const eventoAtividades = await retriveEventoAtividades(idEvento)
        res.status(200).send(eventoAtividades)
        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getEvento = async (req, res, next) => {
    const { idEvento } = req.param
    try {
        const evento =  await retriveEvento(idEvento)
        res.status(200).send(evento)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const getAllEventos = async (req, res, next) => {
    try {
        const eventos = await retrieveEventos()
        res.status(200).send(eventos)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

module.exports = {
    getEventoAtividades,
    getEvento,
    getAllEventos
}