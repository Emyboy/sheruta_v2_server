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
            company_logo,
            location
        } = req.body;
        console.log(req.body);

        knex('agent').insert({
            user_id,
            company_name,
            company_phone_no,
            company_address,
            company_logo,
            location
        }).returning('*')
            .then(data => {
                if (data.length === 0) {
                    res.status(400).json({
                        message: 'error'
                    })
                } else {
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
    static updateAgentAccount(req, res) {
        console.log(req.body);
        const {
            user_id,
            company_name,
            company_phone_no,
            company_address,
            company_logo,
            company_website,
            instagram,
            facebook,
            twitter
        } = req.body;
        knex('agent').where({ user_id }).update({
            user_id,
            company_name,
            company_phone_no,
            company_address,
            company_logo,
            company_website,
            instagram,
            facebook,
            twitter
        }).returning('*')
            .then(data => {
                if (data.length === 0) {
                    res.status(400).json({ message: 'error' })
                } else {
                    res.status(200).json({
                        message: 'Saved',
                        data: data[0]
                    })
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'error' })
            })
    };

    static getAgentByUserId(req, res) {
        const { user_id } = req.params;
        knex('agent').where({ user_id }).returning('*')
            .then(account => {
                if (account.length === 0) {
                    res.status(404).json({ message: 'no found' })
                } else {
                    res.status(200).json({ account })
                }
            })
            .catch(err => {
                res.json(500).json({ message: 'error' })
            })
    };

    static getAllAgent(req, res) {
        knex.select('*').from('agent').returning('*')
            .then(list => {
                res.json({ list })
            })
            .catch(err => {
                res.status(500).json({ message: 'error' })
            })
    }

}

module.exports = AgentController;
