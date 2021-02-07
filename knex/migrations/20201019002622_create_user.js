
exports.up = function(knex, Promise) {
   return knex.schema.hasTable('users').then((exists) => {
        if(!exists){
            return knex.schema.createTable("users", (t) => {
                t.increments();
                t.string('firstname', 50).notNullable();
                t.string('lastname', 50).notNullable();
                t.string("username", 40)
                  .notNullable()
                  .unique();
                t.string("email", 90)
                  .notNullable()
                  .unique();
                t.string("phoneno", 90);
                t.string("password", 90).notNullable();
                t.string("imageurl", 9999).defaultTo(
                  "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png"
                );
                t.string("bio", 90);
                t.boolean("sharing").defaultTo(false);
                t.boolean("mailing").defaultTo(false);
                t.boolean("uploading").defaultTo(false);
                t.timestamp("date").defaultTo(knex.fn.now());
                t.boolean("emailconfirmed").notNullable().defaultTo(false);
                t.boolean("phonenumberconfirmed").notNullable().defaultTo(false);
                t.boolean("twofactorenabled").notNullable().defaultTo(false);
                t.timestamp("lockoutenddateutc");
                t.boolean("lockoutenabled").notNullable().defaultTo(false);
                t.integer("accessfailedcount").notNullable().defaultTo(0);
                
              });
        }
    }).catch(err => { console.log(err.message);});
    
};

exports.down = function(knex, Promise) {
  
};
