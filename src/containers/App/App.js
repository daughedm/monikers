import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Play from '../../components/Play/Play';
import Setup from '../../components/Setup/Setup';
import indexedDB from '../../indexedBD';
import { addCard } from '../../actions/cardActions';
import * as api from '../../api/api';
import './App.css';

import { Route } from 'react-router-dom';

export class App extends Component {
  componentDidMount() {
    this.cardsPGtoIDB();
    this.cardsIDBtoRDX();
  }

  cardsPGtoIDB = async () => {
    const cardsPG = await api.getCards();
    indexedDB.cards.clear();
    indexedDB.cards.bulkAdd(cardsPG);
  };

  cardsIDBtoRDX = async () => {
    const numberOfCardsInIDB = await indexedDB.cards.count();

    const amount = 10;
    const lowerBound = 1;
    const upperBound = numberOfCardsInIDB;
    const uniqueRandomNumbers = [];

    while (uniqueRandomNumbers.length < amount) {
      const randomNumber = Math.floor(
        Math.random() * (upperBound - lowerBound) + lowerBound
      );

      if (uniqueRandomNumbers.indexOf(randomNumber) === -1) {
        uniqueRandomNumbers.push(randomNumber);
      }
    }

    const allCards = await indexedDB.cards.toArray();

    uniqueRandomNumbers.forEach(num => {
      this.props.addCard(allCards[num]);
    });
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
  addCard: card => dispatch(addCard(card))
});

App.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
