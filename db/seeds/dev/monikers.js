exports.seed = function(knex, Promise) {
  return knex('cards')
    .del()
    .then(function() {
      return Promise.all([
        knex('cards').insert(
          {
            user: null,
            name: 'Doge',
            description:
              'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
            pointValue: 3,
            category: 'CELEBRITY'
          },
          'id'
        ),
        knex('cards').insert(
          {
            user: null,
            name: 'Blacula',
            description:
              'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
            pointValue: 4,
            category: 'FICTIONAL CHARACTER'
          },
          'id'
        ),
        knex('cards').insert(
          {
            user: null,
            name: 'A Furry',
            description:
              'A person who wears a full body animal suit, often for conventions, roleplaying, or personal recreation. Their use in sexual activity is a controversial topic in the community. In a recent survey, 37% reported that it was an important part of their interest in the activity.',
            pointValue: 3,
            category: 'ET CETERA'
          },
          'id'
        )
      ]);
    });
};
