import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import Setup from '../../components/Setup/Setup';

import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from '../../components/Home/Home';

const config = {
  issuer: 'https://dev-458733.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oafrod8i3NBZ6qCm0h7'
};

export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <Security
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
        >
          <Route path="/" exact={true} component={Home} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

App.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
