const knex = require('../../../knex/knex');

class MessageController {

    /**
     * @description - This method gets all messages
     * @param {object} req 
     * @param {object} res 
     */
    static getAllMessage(req, res){
        knex.select('*').from('message').returning('*')
            .then(messages => {
                res.json(messages);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }

    /**
     * @description - This method adds a message
     * @param {object} req 
     * @param {object} res 
     */
    static sendMessage(req, res) {
        const { message, type, phoneno, name, email } = req.body;
        console.log(req.body);
        knex('message').insert({ message, type, phoneno, name, email }).returning('*')
            .then(response => {
                console.log(response);
                if(response.length === 1){
                    res.json({
                        status: 200,
                        message: 'Message Sent',
                        response
                    })
                }else {
                    res.json({
                        status: 401,
                        message: 'Message Not Sent',
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: 'Message Error!',
                    error: err
                })
            })
    }

    /**
     * @description - This method sets a message a read
     * @param {object} req 
     * @param {object} res 
     */

    static readMessage(req, res){
        const { message_id } = req.params;
        knex('message').where({ id: message_id }).update({read: true}).returning('*')
            .then(update => {
                if(update.length === 1){
                    res.json({
                        status: 200,
                        message: "success",
                        update
                    })
                }else {
                    res.json({
                        status: 400,
                        message: "failed to read",
                        update
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: "Error !",
                    error: err
                })
            })
    }
    
    /**
     * @description - This method deletes a message
     * @param {object} req 
     * @param {object} res 
     */
    static deleteMessage(req, res) {
        const { message_id } = req.params;
        knex('message').where({id: message_id }).delete().returning("*")
            .then(deleted => {
                if(deleted.length === 1 ){
                    res.json({
                        status: 200,
                        message: "Deleted",
                        deleted
                    })
                }else {
                    res.json({
                        status: 500,
                        message: "Delete Error",
                        deleted
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: "Error",
                    error: err
                })
            })
    }
}


module.exports = MessageController;
