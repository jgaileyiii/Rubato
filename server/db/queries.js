const knex = require('./knex')



module.exports = {
    getOne: function (id) {
      return knex('user').where('id', id).first();
    },
    getByUser: function (id) {
        return knex('project').where('user_id', id);
    },
    getOneByEmail: function (email) {
        return knex('user').where('email', email).first()
    },
    create: function (user) {
        return knex('user').insert(user, 'id').then(ids => {
            return ids[0]
        })
    }
}