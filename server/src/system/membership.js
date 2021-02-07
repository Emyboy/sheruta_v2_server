const knex = require("../../../knex/knex");

module.exports = class Membership{

    static async findOneUserByUsernameOrEmail(username, email){
        if(email && username)
            return await knex('users').where({ username: username }).orWhere({email: email}).first();
        else if(!email && !username)
            return undefined;
        else if(username)
            return await this.findOneUserByUsername(username);
        else 
            return await this.findOneUserByEmail(email);
    }

    static async findOneUser(param){
        if(username)
            return await knex('users').where(param).first();
        else
            return undefined;
  
    }

    static async findOneUserByUsername(username){
        if(username)
            return await this.findOneUser({ username: username });
        else
            return undefined;
  
    }

    static async findOneUserByEmail(email){
        if(email)
        return await this.findOneUser({ email: email });
        else
            return undefined;
    }

    static async saveUser(param){
        return await knex('users').insert(param, '*');
    }

   

};