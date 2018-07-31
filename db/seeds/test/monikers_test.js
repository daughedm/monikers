exports.seed = function(knex, Promise) {
  return knex('monikers_test').del()
    .then(() => {
      return Promise.all([
        knex('monikers_test').insert({
          name: 'Log Lady',
          description:
            'A minor character from the television show Twin Peaks. She carries a piece of a tree cradled in her arms at all times, and seems to act as a medium between the object and the outside world, such as when she claims that it "saw something" the night Laura Palmer died.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        },
        {
          name: 'Baby Einstein',
          description:
            'The German theoretical physicist and Nobel Prize winner. as an infant. He devised the "world\'s most famous quation," his mass—energy formula E=mc2. This could also refer to a series of potentially ineffective educational products designed for infants.',
          category: 'HISTORICAL FIGURE',
          pointValue: 4
        },
        {
          name: 'Jareth, the Goblin King',
          description:
            'The villain from the 1986 film Labyrinth by Jim Henson. Played by David Bowie., a 40—year-old Bowie kidnaps the baby brother of a teenage Jennifer Connelly, who he then attempts to woo with his crystal orbs, giant codpiece. and teased-out blonde bangs.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }, 'id')
          // eslint-disable-next-line no-console
          .then(() => console.log('Seeding complete!'))
          // eslint-disable-next-line no-console
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]);
    })
    // eslint-disable-next-line no-console
    .catch(error => console.log(`Error seeding data: ${error}`));
};
