const express = require('express')
const { atividades, eventos, usuario } = require('../controllers')
const router = express.Router()

router.get('/eventos/:id/atividades', eventos.getEventoAtividades)
router.get('/eventos/:id', eventos.getEvento)
router.get('/eventos', eventos.getAllEventos)

router.get('/atividades/:id', atividades.getAtividade)
router.get('/atividades', atividades.getAllAtividades)
router.post('/atividades', atividades.postAtividade)

router.get('/usuario/atividades', usuario.getAllUsuarioAtividades)
router.get('/usuario', usuario.getAllDataUsuario)
router.post('/usuario/atividades', usuario.postUsuarioAtividade)
router.put('/usuario/atividades/:id', usuario.putUsuarioAtividade)
router.delete('/usuario/atividades/:id', usuario.deleteUsuarioAtividade)

module.exports = router