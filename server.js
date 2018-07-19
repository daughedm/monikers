const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Monikers';

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/v1/cards', (request, response) => {
  database('monikers')
    .select()
    .then(cards => {
      response.status(200).json(cards);
    })
    .catch(error => {
      response.status(500).json({
        error
      });
    });
});

app.post('/api/v1/cards', (request, response) => {
  let newCard = request.body;

  for (let requiredParameter of ['name', 'summary', 'pointValue', 'category']) {
    if (!newCard[requiredParameter]) {
      return response.status(422).send({
        error: `You are missing a ${requiredParameter}`
      });
    }
  }

  database('monikers')
    .insert(newCard, 'id')
    .then(cardId => {
      return response.status(201).json({
        id: cardId[0]
      });
    })
    .catch(error => {
      return response.status(500).json({
        error
      });
    });
});

app.delete('/api/v1/cards/:id', (request, response) => {
  let id = request.params.id;

  database('monikers')
    .where('id', id)
    .del()
    .then(res => {
      if (res === 1) {
        return response.status(204).json({
          message: 'Success'
        });
      } else {
        return response.status(404).json({
          message: 'This item does not exist'
        });
      }
    })
    .catch(error => {
      return response.status(500).json({
        error
      });
    });
});

app.put('/api/v1/cards/:id', (request, response) => {
  const { id } = request.params;
  const { title, packed } = request.body;
  database('monikers')
    .where('id', id)
    .update({
      title,
      packed
    })
    .then(updatedCard => {
      response.status(200).send(`Updated ${updatedCard} item.`);
    })
    .catch(error => response.status(400).send(error));
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});

module.exports = {
  app,
  database
};
