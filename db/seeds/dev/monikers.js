const cardData = require('../../../data/demoData');

exports.seed = function(knex, Promise) {
  return knex('cards')
    .del()
    .then(function() {
      return Promise.all([knex('cards').insert(cardData)]);
    });
};
