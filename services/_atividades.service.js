const { atividades } = require('../db')
const { atividadeInsert, atividadeSelectAll, atividadeSelectSpecific } = atividades

const createAtividade = async (user, content) => {
    try {
        return await atividadeInsert(user, content)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retriveAtividade = async (id) => {
    try {
        return await atividadeSelectSpecific(id)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retriveAtividades = async () => {
    try {
        return await atividadeSelectAll()
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createAtividade,
    retriveAtividade,
    retriveAtividades
}