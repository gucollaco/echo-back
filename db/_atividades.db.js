const atividadeInsert = (user, content) => {
    // `INSERT INTO atividade (user_name, blogpost_body)
    // VALUES (user, content);`
    return 1
}
const atividadeSelectSpecific = (user, content) => {
    // `SELECT * FROM atividade (user_name, blogpost_body)
    // VALUES (user, content)
    // WHERE id = 'ble';`
    return 1
}

const atividadeSelectAll = (user, content) => {
    // `SELECT * FROM atividade (user_name, blogpost_body);
    return 1
}

module.exports = {
    atividadeInsert,
    atividadeSelectSpecific,
    atividadeSelectAll
}