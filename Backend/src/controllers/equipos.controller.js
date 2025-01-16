const Teams = require('../models/equipos.model');

const handleGetTeams = async (req, res, next) => {
    try {
        const { limit, page, order_by } = req.query
        const { rows, rowCount, pages} = await Teams.getTeams({ limit, page, order_by })

        res.status(200).json({
            msg: "Equipos obtenidos con éxito",
            meta: { rowCount, pages },
            data: rows
        })

    } catch (error) {
        next(error);
    }
};

const handleAddTeam = async (req, res, next) => {
    try {
        const { equipo } = req.body

        const teamExists = await Teams.getTeamsByName(equipo)

        if (teamExists) {
            return res.status(400).json({
                msg: "El equipo ya existe"
            })
        }
        
        const response = await Teams.addTeam(equipo)

        res.status(200).json({
            msg: "Equipo agregado con éxito",
            data: response
        })

    } catch (error) {
        next(error);
    }
};

module.exports = {
    handleGetTeams,
    handleAddTeam
}