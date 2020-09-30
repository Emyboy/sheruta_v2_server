const knex = require("../../Knex")



module.exports = class PropertyController {
    
    static addNewProperty(req, res){
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
        }).returning('*')
            .then(upload => {
                res.send(upload)
                console.log(upload)
            })
            .catch(err => {
                res.send(err);
                console.log(err);

            })
    }

}

