import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Play from '../../components/Play/Play';
import Setup from '../../components/Setup/Setup';
import indexedDB from '../../indexedBD';
import * as api from '../../api/api';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export class App extends Component {
  componentDidMount() {
    this.storeCards();
  }

  storeCards = async () => {
    const cards = await api.getCards();
    console.log('cards: ', cards);

    indexedDB.cards.bulkAdd(cards);
  };

  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Setup} />
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
