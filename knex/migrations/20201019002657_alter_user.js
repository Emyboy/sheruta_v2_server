
exports.up = function(knex) {
   return knex.schema.hasTable('users').then((exists) => {
        if(exists){
           return knex.schema.hasColumn('users','fullname').then((exists) => {
                if(exists){
                    return knex.schema.table('users', (t) => {
                        t.string("lastname", 50).notNullable().defaultTo("");
                        t.renameColumn("fullname","firstname");
                        t.boolean("emailconfirmed").notNullable().defaultTo(false);
                        t.boolean("phonenumberconfirmed").notNullable().defaultTo(false);
                        t.boolean("twofactorenabled").notNullable().defaultTo(false);
                        t.timestamp("lockoutenddateutc");
                        t.boolean("lockoutenabled").notNullable().defaultTo(false);
                        t.integer("accessfailedcount").notNullable().defaultTo(0);
   
                    }).then(() =>{
                       return  knex('users')
                       .whereRaw("POSITION(? in TRIM(FROM ??)) > ?", [' ', "firstname",0]) 
                        .update({
                            lastname: knex.raw('TRIM(FROM SUBSTRING("firstname" FROM POSITION(? in ??)))',[' ',"firstname"]),
                            firstname:  knex.raw('TRIM(FROM LEFT("firstname",POSITION(? in "firstname") - ?))', [' ',1])
                            
                        });
            
                    }).then(() => {
                        return knex.schema.alterTable('users', (t) => {
                                t.string("lastname", 50).notNullable().alter();
                        });
                    });
                }
            })
        }
    }).catch(err => console.log(err.message));
};

exports.down = function(knex) {
  
};
