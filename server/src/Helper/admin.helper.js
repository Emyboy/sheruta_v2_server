const sendGrid = require('@sendgrid/mail');
const knex = require('../../../knex/knex');

module.exports = class AdminHelper {

    static async sendNotification({ userid, type, notification }, email, number) {
        sendGrid.setApiKey(process.env.MAIL_API_KEY);
        var message;
        const user = await knex('users').where({ id: userid }).returning('*')
        switch (type) {
            case 'SHARED_SIGNUP':
                message = {
                    to: 'sheruta.ng@gmail.com',
                    from: 'chukwuemekaifeora@gmail.com',
                    subject: 'Shared Signup',
                    text: notification,
                    html: `
                    <div>
                        <h4>${user[0].email}</h4> <br /> 
                        <h5>just signup to share an apartment</h5> <br />
                    </div>
                    `
                };
                break;
            case 'SHARE_UPLOAD':
                message = {
                    to: 'sheruta.ng@gmail.com',
                    from: 'chukwuemekaifeora@gmail.com',
                    subject: 'IMPORTANT',
                    text: notification,
                    html: `
                    <div>
                        <h4>${email}</h4> <br /> 
                        <h5>has an apartment for share</h5>
                        <p>whatsapp number: ${number}</p>
                    </div>`
                };
                break;
            default:
                break;
        }
        return sendGrid.send(message);
    }

    static async sendFeaturedUpload({ userid, notification }){
        sendGrid.setApiKey(process.env.MAIL_API_KEY);
        var message;
        const user = await knex('users').where({ id: userid }).returning('*')
        message = {
            to: 'sheruta.ng@gmail.com',
            from: 'chukwuemekaifeora@gmail.com',
            subject: 'Someone Uploaded An Apartment',
            text: notification,
            html: `
            <div>
                <h4>Email: <small>${user[0].email}</small></h4> <br /> 
                <h4>Username: <small>${user[0].username}</small></h4> <br /> 
                <h4>Phone NO: <small>${user[0].phoneno}</small></h4> <br /> 
                <h5>${user[0].fullname} Just uploaded an apartment</h5> <br />
            </div>
            `
        };
        return sendGrid.send(message);
    }
}
