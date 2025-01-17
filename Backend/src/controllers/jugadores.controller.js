const Players = require('../models/jugadores.model')

const handleGetPlayers = async (req, res, next) => {
    try {
        const { limit, page, order_by } = req.query
        const { rows, rowCount, pages } = await Players.getPlayers({ limit, page, order_by })

        res.status(200).json({
            msg: "Jugadores obtenidos con éxito",
            meta: { rowCount, pages },
            data: rows
        })

    } catch (error) {
        next(error);
    }
};


const obtenerJugadores = async (req, res) => {
    const { teamID } = req.params
    const jugadores = await getPlayers(teamID)
    res.json(jugadores)
}

const registrarJugador = async (req, res) => {
    const { teamID } = req.params
    const jugador = req.body
    await addPlayer({ jugador, teamID })
    res.json({ message: "Jugador agregado con éxito" })
}


module.exports = {
    handleGetPlayers,
    obtenerJugadores,
    registrarJugador
}