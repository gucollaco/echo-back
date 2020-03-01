const { atividades } = require('../db')
const { atividadeInsert, } = atividades

/*
* if you need to make calls to additional tables, data stores (Redis, for example), 
* or call an external endpoint as part of creating the blogpost, add them to this service
*/
const createAtividade = async (user, content) => {
    try {
        return await atividadeInsert(user, content)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retriveAtividade = async (user, content) => {
    try {
        return await atividadeDb(user, content)
    } catch(e) {
        throw new Error(e.message)
    }
}

const retriveAtividades = async (user, content) => {
    try {
        return await atividadeDb(user, content)
    } catch(e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createAtividade,
    retriveAtividade,
    retriveAtividades
}