const { usuario } = require('../services')
const {
    retrieveUsuarioAtividades,
    retriveUsuario,
    insertUsuarioAtividade,
    updateUsuarioAtividade,
    removeUsuarioAtividade
} = usuario

const getAllUsuarioAtividades = async (req, res, next) => {
    const { idUsuario } = req.user
    try {
        const usuarioAtividades = await retrieveUsuarioAtividades(idUsuario)
        res.status(200).send(usuarioAtividades)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const getAllDataUsuario = async (req, res, next) => {
    const { idUsuario } = req.user
    try {
        const usuario = await retriveUsuario(idUsuario)
        res.status(200).send(usuario)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const postUsuarioAtividade = async (req, res, next) => {
    const { idUsuario } = req.user
    const { idAtividade } = req.param
    try {
        await insertUsuarioAtividade(idUsuario, idAtividade)
        res.status(201)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const putUsuarioAtividade = async (req, res, next) => {
    const { idUsuario } = req.user
    const { idAtividade } = req.param
    try {
        await updateUsuarioAtividade(idUsuario, idAtividade)
        res.status(204)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

const deleteUsuarioAtividade = async (req, res, next) => {
    const { idUsuario } = req.user
    const { idAtividade } = req.param
    try {
        await removeUsuarioAtividade(idUsuario, idAtividade)
        res.status(204)
        next()
    } catch(e) {
        console.log(e.message)
        res.status(500) && next(e)
    }
}

module.exports = {
    getAllUsuarioAtividades,
    getAllDataUsuario,
    postUsuarioAtividade,
    putUsuarioAtividade,
    deleteUsuarioAtividade
}