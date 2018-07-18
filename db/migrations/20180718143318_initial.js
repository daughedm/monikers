exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cards', function (table) {
      table.increments('id').primary();
      table.integer('user');
      table.string('name');
      table.string('summary');
      table.integer('pointValue');
      table.string('category');

      table.timestamps(true, true)
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cards')
  ])
};