const { eventos } = require('../db')
const { eventoSelectAllAtividades, eventoSelectAll, eventoSelectSpecific } = atividades

const retriveEventoAtividades = async (id) => {
    try {
        return await eventoSelectAllAtividades(id)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retriveEvento = async (id) => {
    try {
        return await eventoSelectSpecific(id)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retrieveEventos = async () => {
    try {
        return await eventoSelectAll()
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    retriveEventoAtividades,
    retriveEvento,
    retrieveEventos
}