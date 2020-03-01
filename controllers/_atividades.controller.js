const { atividades } = require('../services')
const { createAtividade, retriveAtividade, retrieveAtividades } = atividades

const getAtividade = async (req, res, next) => {
    const { id } = req.param
    try {
        const atividade =  await retriveAtividade(id)
        res.status(200).send(atividade)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const getAllAtividades = async (req, res, next) => {
    try {
        const atividades = await retrieveAtividades()
        res.status(200).send(atividades)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const postAtividade = async (req, res, next) => {
    const { user, content } = req.body
    try {
        await createAtividade(user, content)
        res.sendStatus(201)
        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    getAtividade,
    getAllAtividades,
    postAtividade
}