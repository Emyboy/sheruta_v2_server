const knex = require("../../Knex")



module.exports = class PropertyController {
    
    static addNewProperty(req, res){
        console.log('adding', req.body);
        const {
            agent_id,
            user_id,
            location,
            bedrooms,
            sittingrooms,
            title,
            toilets,
            image_urls,
            description,
            price,
            type,
            status,
            features,
            uuid
        } = req.body;
        knex('property').insert({
            agent_id,
            user_id,
            location,
            bedrooms,
            sittingrooms,
            title,
            toilets,
            image_urls,
            description,
            price,
            type,
            status,
            features,
            uuid
        }).returning('*')
            .then(upload => {
                res.send(upload)
                console.log(upload)
            })
            .catch(err => {
                res.send(err);
                console.log(err);

            })
    };

    static getAgentsProperty(req, res){
        const { agent_id } = req.params;
        knex('property').where({ agent_id }).returning('*')
            .then(list => {
                res.json(list)
            })
            .catch(err => {
                res.status(500).json({ 
                    message: 'error'
                })
            })
    }

}

