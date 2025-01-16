const express = require('express');
const app = express();

app.listen(3000, console.log("SERVER ON"));
app.use(express.json())

const { obtenerJugadores, registrarJugador } = require('./controllers/jugadores')
const { obtenerEquipos, agregarEquipo } = require('./controllers/equipos')

// RUTAS JUGADORES 
app.get("/equipos", obtenerEquipos)
app.post("/equipos", agregarEquipo)

// RUTAS EQUIPOS
app.get("/equipos/:teamID/jugadores", obtenerJugadores)
app.post("/equipos/:teamID/jugadores", registrarJugador)

// Según las rutas debo agregar un controlador para los equipos y otro para los jugadores

// Para los equipos el controlador sería algo como esto:
// obtenerEquipos
// agregarEquipo

// Para los jugadores el controlador sería algo como esto:
// obtenerJugadores
// registrarJugador