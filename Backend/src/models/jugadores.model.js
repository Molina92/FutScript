const { DB } = require('../config/db');
const format = require('pg-format');

const getPlayers = async ({ limit = 10, page = 1, order_by = 'id_asc' }) => {
    try {
        const [campo, direccion] = order_by.split("_")
        const offset = Math.abs((page - 1) * limit)

        const SQLQuery = format(`
            SELECT * FROM jugadores
            order by %s %s 
            LIMIT %s
            OFFSET %s`,
            campo,
            direccion,
            limit,
            offset
        );

        const { rows, rowCount } = await DB.query(SQLQuery)
        const { rowCount: count } = await DB.query('SELECT * FROM jugadores')

        return {
            rows,
            rowCount,
            pages: Math.ceil(count / limit)
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    getPlayers
}