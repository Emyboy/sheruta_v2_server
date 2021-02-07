/* eslint-disable no-unused-vars */
//const knex = require('../../knex/knex');
const {check, validationResult} = require('express-validator');
const membership = require('../system/membership');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const userHelper = require('../Helper/user.helper');

dotenv.config();

const confirmEmailTemplate = require('../EmailTemplate/EmailComferm');
const { generateToken } = require('../Helper/user.helper');

class UserController {
    /**
     * @description - This method signs a user up each time
     * @param {object} req 
     * @param {object} res 
     */
    static async signupUser(req, res) {
        
        // Validate inputs
        await  check('firstname', "Please enter your firstname").trim().notEmpty().run(req);
        await  check('firstname', 'Firstname requires 50 or less characters').trim().isLength({max: 50}).run(req);
        await check('lastname', 'Please enter your lastname').trim().notEmpty().run(req);
        await  check('lastname', 'Lastname requires 50 or less characters').trim().isLength({max: 50}).run(req);
        await  check('username', "Please enter your username").trim().notEmpty().run(req);
        await  check('username', 'Please enter a username between 6 to 40 characters').trim().isLength({min:6, max: 40}).run(req);
        await  check('email', 'Please enter a valid email').trim().isEmail().run(req); 
        await  check('email', 'Please enter an email address with 90 or less characters').trim().isLength({max: 90}).run(req);
        await  check('password', 'Please enter a password between 6 to 90 characters').exists().isLength({min: 6, max: 90}).run(req);
        await  check('confirmpassword', 'Password does not match').exists().custom((value,{req}) => value === req.body.password).run(req);           
        await  check('phoneno', 'Please enter a valid phone number').trim().optional().isMobilePhone().run(req);
            
        const errors = validationResult(req);

        // Check if errors occur
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
    
       
        try {
            
            let { firstname, lastname, password, email, phoneno, username} = req.body;
           
            username = username.toLowerCase();
            email = email.toLowerCase();
           
            let user = await membership.findOneUserByUsernameOrEmail(username, email);
           
            if(user && user.username === username){
                return res.status(409).json({errors: [{param: 'username' ,message: 'Username is taken'}]});
            }else if(user && user.email === email){
                return res.status(409).json({errors: [{param: 'email' ,message: 'Email is taken'}]});
            }
                
          
            firstname = firstname.replace(/\s+/g,' ').toLowerCase();
            lastname = lastname.replace(/\s+/g,' ').toLowerCase();
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            /*const avatar = gravatar.url(email,{
                s: '200',
                r: 'pg',
                d: 'mm'
            });*/

            user = await membership.saveUser({ 
                firstname: firstname, 
                lastname: lastname,
                email: email, 
                phoneno: phoneno, 
                username: username, 
                password: password //imageurl: avatar
                 });

            
            if (!user) {
                throw "Something Went Wrong. Try again";  
            } else {
               await userHelper.sendMail(email,
                    'chika.callis@gmail.com',
                    'Validate Email',
                    `Welcome ${email}`,
                    confirmEmailTemplate(firstname.charAt(0).toUpperCase() + firstname.slice(1), username, email, phoneno));

                const newUser = (({firstname,lastname, username, email, phoneno}) => ({firstname,lastname, username, email, phoneno}))(user[0]);
              
                return res.status(200).json({
                    message: "Signup Successful",
                    user: newUser
                });
            }

        } catch (error) {
            console.error(error.message);
           return res.status(500).json({
                message: 'Server Error!'
            })
        }
    };

    /**
     * @description - This label logs in a user each time
     * @param {objct} req 
     * @param {object} respo 
     */
    static async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = await knex.select('*').from('users').where({ email });
            console.log(user);
            const isPassword = bcrypt.compareSync(password, user[0].password);
            console.log(isPassword);
            const token = userHelper.generateToken({ email, id: user[0].id });
            console.log('token', token);
            if (isPassword) {
                return res.json({
                    status: 200,
                    message: 'Logged In',
                    user, token
                })
            } else {
                return res.json({
                    status: 401,
                    message: 'Incorrect username or password',
                    alert: 'Incorrect username or password',
                    error: ''
                })
            }
        } catch (error) {
            res.json({
                status: 400,
                message: 'Incorrect username or password *',
                error
            })
        }
    };

    /**
     * @description - This method gets all users from db
     * @param {obejct} req 
     * @param {object} res 
     */
    static getAllUser(req, res) {
        knex('users').returning('*')
            .then(users => {
                delete users[0].password;
                res.send({
                    message: 'success',
                    alert: 'Found all',
                    users
                })
            })
            .catch(err => {
                res.send({
                    message: 'success',
                    alert: 'network error please refresh',
                    err
                })
            })
    }

    /**
     * @description - This method decodes user token
     * @param {object} req 
     * @param {object} res 
     */
    static decodeToken(req, res) {
        const decodedValue = userHelper.decodeTokne(req.params.token);
        console.log('decoded', decodedValue)
        knex('users').where('email', decodedValue.payload.email).returning('*')
            .then(user => {
                res.send({
                    message: 'success',
                    alert: 'users was decoded',
                    user,
                    decodedVal: decodedValue
                })
            })
            .catch(err => {
                res.send({
                    message: 'Auth Error',
                    alert: 'network error please refresh',
                    err
                })
            })
    }

    /**
     * @description - This method gets a user profile by id
     * @param {object} req 
     * @param {object} res 
     */
    static async getUserProfile(req, res) {
        const { userid } = req.params;
        try {
            const user = await knex.select('*').from('users').where({ id: userid }).returning('*');
            if (user.length === 0) {
                return res.json({
                    message: 'no user found',
                    status: 404
                })
            } else {
                return res.status(200).json({
                    message: 'success',
                    status: 200,
                    user: user[0]
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @description - This method updates a user profile
     * @param {obejct} req 
     * @param {object} res 
     */
    static updateUserProfile(req, res) {
        const { userid } = req.params;
        const { fullname, username, phoneno } = req.body;
        knex('users').where({ userid }).update({ fullname, username, phoneno }).returning('*')
            .then(update => {
                res.send({
                    message: 'success',
                    alert: 'Profile is updated',
                    update
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Something went wrong please try again',
                    err
                })
            })
    }

    /**
     * @description - This method get a user by id
     * @param {object} req 
     * @param {object} res 
     */
    static async getUserByEmail(req, res) {
        const { token } = req.params;
        const decodedToken = userHelper.validateToken(token);
        try {
            const user = await knex.select('*').from('users').where({ email: decodedToken.data }).returning('*');
            if (user.length === 0) {
                res.status(404).json({
                    message: "user not found",
                    status: 404
                })
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async editUserProfile(req, res) {
        const { fullname, username, phoneno, email, bio, userid } = req.body;
        try {
            const update = await knex('users').where({ id: userid })
        } catch (error) {

        }
    }

    /**
     * @description - This method activate user
     * @param {object} req 
     * @param {object} res 
     */
    static async activate(req, res) {
        const { userid } = req.params.userId;
        try {
            const activate = await knex('users').where({ id: userid }).update({
                mailing: true,
            }).returning('*');
            if (activate.length !== 0) {
                res.json({
                    status: 200,
                    message: 'success',
                })
            } else {
                res.json({
                    status: 400,
                    message: 'failed',
                })
            }

        } catch (error) {
            res.json({
                status: 400,
                message: 'failed'
            })
        }
    };

    static googleLogin(req, res) {
        const {
            fullname,
            username,
            email,
            phoneno,
            password,
            imageurl,
            login_type
        } = req.body;
        knex.select('*').from('users').where({
            email
        }).returning('*')
            .then(async user => {
                if (user.length > 0) {
                    // send user data
                    const agent = await knex('agent').where({ user_id: user[0].id }).returning('*');
                    console.log(agent)
                    res.json({
                        user: { ...user[0], agent: agent.length > 0 ? agent[0] : false },
                        token: generateToken({ email: user[0].email, id: user[0].id }),
                    })
                } else {
                    knex('users').insert({
                        fullname,
                        username,
                        email,
                        phoneno,
                        password,
                        imageurl,
                        login_type
                    }).returning('*')
                        .then(user => {
                            res.json({
                                user: user[0],
                                token: generateToken({ email: user[0].email, id: user[0].id })
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(400).json({ message: 'bad request' })
                        })
                }
            })

    }

}

module.exports = UserController;
