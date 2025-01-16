const { DB } = require('../config/db');
const format = require('pg-format');

const getTeams = async ({ limit = 10, page = 1, order_by = 'id_asc' }) => {
    try {
        const [campo, direccion] = order_by.split("_")
        const offset = Math.abs((page - 1) * limit)

        const SQLQuery = format(`
            SELECT * FROM equipos
            order by %s %s 
            LIMIT %s
            OFFSET %s`,
            campo,
            direccion,
            limit,
            offset
        );

        console.log(SQLQuery)

        const { rows, rowCount } = await DB.query(SQLQuery)
        const { rowCount: count } = await DB.query('SELECT * FROM equipos')

        return {
            rows,
            rowCount,
            pages: Math.ceil(count / limit)
        }
    } catch (error) {
        throw error
    }
}

const addTeam = async ( nombreEquipo ) => {
    try {
        const SQLQuery = format(`
            INSERT INTO equipos (name) VALUES (%L) RETURNING *`,
            nombreEquipo
        );

        const { rowCount,rows } = await DB.query(SQLQuery)
        return rowCount,rows

    } catch (error) {
        throw error
    }
}

module.exports = {
    getTeams,
    addTeam
}

