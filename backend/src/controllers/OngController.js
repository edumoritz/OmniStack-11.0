const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) - request.query
 * Route Params: Parâmetros utilizados para identificar recursos - request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos - request.body
 */
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId(); 

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}