const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Monikers';

app.use(bodyParser.json());

app.get('/api/v1/cards', (request, response) => {
  database('cards')
    .select()
    .then(cards => response.status(200).json(cards))
    .catch(error => response.status(500).json({ error }));
});

app.post('/api/v1/cards', (request, response) => {
  let newCard = request.body;

  for (let requiredParameter of ['name', 'description', 'pointValue', 'category']) {
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
  console.log(`${app.locals.title} is running on ${app.get('port')}`);
});

module.exports = { app, database };






const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-458733.oktapreview.com/oauth2/default',
  assertClaims: {
    aud: 'api://default'
  }
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((error) => {
      res.status(401).send(error.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

app.listen(3000, () => {
  console.log('Serve Ready on port 3000');
});
