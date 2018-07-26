import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import SplashPage from '../../components/SplashPage/SplashPage';
import Play from '../../components/Play/Play';
import Setup from '../../components/Setup/Setup';
import Round from '../../components/Round/Round';
import Next from '../../components/Next/Next';
import Instructions from '../../components/Instructions/Instructions';
import Loading from '../../components/Loading/Loading';
import indexedDB from '../../indexedBD';
import * as actions from '../../actions';
import * as api from '../../api/api';

import './App.css';

export class App extends Component {
  async componentDidMount() {
    await this.cardsPGtoIDB();
    this.loadInProgressGameInfo();
  }

  loadInProgressGameInfo = async () => {
    this.loadTeamNames();
    this.loadNumCards();
    this.loadActiveCards();
    this.loadDiscardedCards();
  };

  loadTeamNames = async () => {
    const teamsIDB = await indexedDB.teamNames.toArray();

    if (teamsIDB.length) {
      teamsIDB.forEach(team => {
        this.props.addTeamNames(team.name);
      });
    } else {
      this.props.history.push('/');
    }
  };

  loadNumCards = async () => {
    const numCardsIDB = await indexedDB.numCards.toArray();

    if (numCardsIDB.length) {
      this.props.numOfCards(parseInt(numCardsIDB[0].num));
    } else {
      this.props.history.push('/');
    }
  };

  loadActiveCards = async () => {
    const activeCardsIDB = await indexedDB.activeCards.toArray();

    if (activeCardsIDB.length) {
      this.props.updateActiveCards(activeCardsIDB);
    } else {
      this.props.history.push('/');
    }
  };

  loadDiscardedCards = async () => {
    const discardedCardsIDB = await indexedDB.discardedCards.toArray();

    if (discardedCardsIDB.length) {
      discardedCardsIDB.forEach(discardedCard => {
        this.props.discardedCards(discardedCard);
      });
    } else {
      this.props.history.push('/');
    }
  };

  cardsPGtoIDB = async () => {
    const cardsPG = await api.getCards();
    indexedDB.cards.clear();
    indexedDB.cards.bulkAdd(cardsPG);
  };

  render() {
    return (
      <div>
        <Route path="/" exact={true} component={SplashPage} />
        <Route path="/instructions" exact={true} component={Instructions} />
        <Route path="/setup" exact={true} component={Setup} />
        <Route path="/play" exact={true} component={Play} />
        <Route path="/loading" exact={true} component={Loading} />
        <Route path="/round" exact={true} component={Round} />
        <Route path="/next" exact={true} component={Next} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(actions.addCard(card)),
  addTeamNames: teamName => dispatch(actions.addTeamNames(teamName)),
  numOfCards: number => dispatch(actions.numOfCards(number)),
  updateActiveCards: cards => dispatch(actions.updateActiveCards(cards)),
  discardedCards: card => dispatch(actions.discardedCards(card))
});

App.propTypes = {};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
