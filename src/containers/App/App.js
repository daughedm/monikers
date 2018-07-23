import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SplashPage from '../../components/SplashPage/SplashPage';
import Play from '../../components/Play/Play';
import Setup from '../../components/Setup/Setup';
import Instructions from '../../components/Instructions/Instructions';
import Loading from '../../components/Loading/Loading';
import indexedDB from '../../indexedBD';
import { addCard } from '../../actions/gameActions';
import * as api from '../../api/api';
import './App.css';

import { Route } from 'react-router-dom';

export class App extends Component {
  componentDidMount() {
    // this.cardsPGtoIDB();
    // this.cardsIDBtoRDX();
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
        <Route path="/" exact={true} component={SplashPage} />
        <Route path="/instructions" exact={true} component={Instructions} />
        <Route path="/setup" exact={true} component={Setup} />
        <Route path="/play" exact={true} component={Play} />
        <Route path="/loading" exact={true} component={Loading} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(addCard(card))
});

App.propTypes = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
