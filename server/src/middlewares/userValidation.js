const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');



class UserValidation {
    /**
     * @description - This method validates user token 
     * @param {object} req 
     * @param {object} res 
     */
    static validateToken(req, res, next) {
        const { token } = req.params;
        try {
            console.log('validating', token);
            jwt.verify(token, process.env.SECRET_KEY);
            console.log('heades', req.headers);
            next();
        } catch (error) {
            return res.json({
                message: "auth failed",
                status: 401,
            })
        }
        
    }

    /**
     * @method verifyAuthHeader
     * @description Verifies that the authorization was set
     * @param {object} req - The Request Object
     * @param {object} res - The Response Object
     * @returns {object} - JSON response object
     */

    static async verifyAuthHeader(req, res, next) {
        const { authorization, sheruta_header } = req.headers;
        console.log('Headers -----', authorization)
        try {
            // const token = await authorization.split(' ')[1];
            const payload = await jwt.verify(authorization, process.env.SECRET_KEY);
            console.log('PAYLOAD ---', payload)
            if (payload.data.id) {
                next();
            }
        } catch (error) {
            console.log('ERROR --', error)
            res.status(401).json({
                status: 401,
                message: 'Unauthorized - Auth Error!'
            })
        }

    }

}

 
module.exports = UserValidation;