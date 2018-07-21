const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('express-cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Monikers';

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api/v1/cards', (request, response) => {
  database('cards')
    .select()
    .then(cards => response.status(200).json(cards))
    .catch(error => response.status(500).json({ error }));
});

app.post('/api/v1/cards', (request, response) => {
  let newCard = request.body;

  for (let requiredParameter of [
    'name',
    'description',
    'pointValue',
    'category'
  ]) {
    if (!newCard[requiredParameter]) {
      response.status(422).send({
        error: `You are missing a ${requiredParameter}`
      });
    }
  }

  database('cards')
    .insert(newCard, 'id')
    .then(cardId => response.status(201).json({ id: cardId[0] }))
    .catch(error => response.status(500).json({ error }));
});

app.put('/api/v1/cards/:id', (request, response) => {
  const { id } = request.params;
  const { name, description, pointValue, category } = request.body;

  database('cards')
    .where('id', id)
    .update({ name, description, pointValue, category })
    .then(updatedCard =>
      response.status(200).send(`Updated ${updatedCard} item.`)
    )
    .catch(error => response.status(400).send(error));
});

app.delete('/api/v1/cards/:id', (request, response) => {
  let id = request.params.id;

  database('cards')
    .where('id', id)
    .del()
    .then(result => {
      if (result === 1) {
        response.status(204).json({ message: 'Success' });
      } else {
        response.status(404).json({ message: 'This item does not exist' });
      }
    })
    .catch(error => response.status(500).json({ error }));
});

app.listen(app.get('port'), () => {
  /* eslint-disable-next-line */
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});

module.exports = { app, database };
