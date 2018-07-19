import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'monikers.auth0.com',
    clientID: 'lhrOncjUYmU3-HRKVrX6ye4DHt2fNkym',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://monikers.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}