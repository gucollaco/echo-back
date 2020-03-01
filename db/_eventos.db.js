const eventoSelectAllAtividades = (user, content) => {
    // `INSERT INTO atividade (user_name, blogpost_body)
    // VALUES (user, content);`
    return 1
}
const eventoSelectAll = (user, content) => {
    // `SELECT * FROM atividade (user_name, blogpost_body)
    // VALUES (user, content)
    // WHERE id = 'ble';`
    return 1
}

const eventoSelectSpecific = (user, content) => {
    // `SELECT * FROM atividade (user_name, blogpost_body);
    return 1
}

module.exports = {
    eventoSelectAllAtividades,
    eventoSelectAll,
    eventoSelectSpecific
}