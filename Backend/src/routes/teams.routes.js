const { Router } = require('express');
const router = Router();

const { handleGetTeams, handleAddTeam } = require('../controllers/equipos.controller')
// const { obtenerJugadores, registrarJugador } = require('../controllers/jugadores')

router.get("/", handleGetTeams)
router.post("/", handleAddTeam)

// router.get("/equipos/:teamID/jugadores", obtenerJugadores)
// router.post("/equipos/:teamID/jugadores", registrarJugador)

module.exports = router