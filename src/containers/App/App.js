import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Play from '../../components/Play/Play';
import Setup from '../../components/Setup/Setup';
import indexedDB from '../../indexedBD';
import { addCards } from '../../actions/cardActions';
import * as api from '../../api/api';
import './App.css';

import { Route } from 'react-router-dom';

export class App extends Component {
  componentDidMount() {
    this.storeCards();
  }

  storeCards = async () => {
    const cardsPG = await api.getCards();

    indexedDB.cards.clear();
    indexedDB.cards.bulkAdd(cardsPG);

    const cardsIDB = await indexedDB.cards.toArray();

    this.props.addCards(cardsIDB);
  };

  render() {
    return (
      <div>
        <Route path="/" exact={true} component={Setup} />
        <Route path="/play" exact={true} component={Play} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  addCards: cards => dispatch(addCards(cards))
});

App.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
