const { usuario } = require('../db')
const {
    usuarioSelectAllAtividades,
    usuarioSelectSpecific,
    usuarioInsertUsuarioAtividade,
    usuarioUpdateUsuarioAtividade,
    usuarioDeleteUsuarioAtividade
} = usuario

const retrieveUsuarioAtividades = async (id) => {
    try {
        return await usuarioSelectAllAtividades(id)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retriveUsuario = async (id) => {
    try {
        return await usuarioSelectSpecific(id)
    } catch(e) {
        throw new Error(e.message)
    }
}

const insertUsuarioAtividade = async (idUsuario, idAtividade) => {
    try {
        return await usuarioInsertUsuarioAtividade(idUsuario, idAtividade)
    } catch(e) {
        throw new Error(e.message)
    }
}

const updateUsuarioAtividade = async (idUsuario, idAtividade) => {
    try {
        return await usuarioUpdateUsuarioAtividade(idUsuario, idAtividade)
    } catch(e) {
        throw new Error(e.message)
    }
}

const removeUsuarioAtividade = async (idUsuario, idAtividade) => {
    try {
        return await usuarioDeleteUsuarioAtividade(idUsuario, idAtividade)
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    retrieveUsuarioAtividades,
    retriveUsuario,
    insertUsuarioAtividade,
    updateUsuarioAtividade,
    removeUsuarioAtividade
}