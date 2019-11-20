
exports.up = function(knex) {
  return knex.schema.createTable('project', table => {
      table.increments()
      table.text('project_name').notNullable()
      table.integer('user_id').references('user.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project')
};
