const knex = require('../../Knex');


class AgentController {

    /**
     * @description - This makes a user an agent
     * @param {object} req 
     * @param {object} res 
     */
    static becomeAnAgent(req, res) {
        const { 
            user_id,
            company_name,
            company_phone_no,
            company_address,
            company_logo
        } = req.body;
        console.log(req.body);

        knex('agent').insert({
            user_id,
            company_name,
            company_phone_no,
            company_address,
            company_logo
        }).returning('*')
            .then(data => {
                if(data.length === 0){
                    res.status(400).json({
                        message: 'error'
                    })
                }else {
                    res.status(200).json({
                        message: "Account Created",
                        data
                    })
                }
            })
            .catch(err => {
                console.log('error ---', err);
                res.status(500).json({ message: 'error' })
            })
    };

    /**
     * @description - this update an gent's account.
     * @param {object} req 
     * @param {object} res 
     */
    static updateAgentAccount(req, res){
        const {
            user_id,
            company_name,
            company_phone_no,
            company_location,
            company_image,
            company_website,
            instagram,
            facebook,
            twitter
        } = req.body;
        knex('agent').insert({
            user_id,
            company_name,
            company_phone_no,
            company_location,
            company_image,
            company_website,
            instagram,
            facebook,
            twitter
        }).returning('*')
            .then(data => {
                if(data.length === 0){
                    res.status(400).json({ message: 'error' })
                }else {
                    res.status(200).json({
                        message: 'Saved',
                        data
                    })
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'error' })
            })
    }

}

module.exports = AgentController;
