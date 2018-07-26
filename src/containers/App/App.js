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
    await this.loadInProgressGameInfo();
  }

  loadInProgressGameInfo = async () => {
    await this.loadTeamNames();
    await this.loadNumCards();
    await this.loadActiveCards();
    await this.loadDiscardedCards();
    await this.loadTeamOneScore();
    await this.loadTeamTwoScore();
    await this.loadCurrTeam();
    await this.loadCurrRound();
    await this.loadTeamTimer();
  };

  loadTeamNames = async () => {
    const teamsIDB = await indexedDB.teamNames.toArray();

    if (teamsIDB.length) {
      teamsIDB.forEach(team => {
        this.props.addTeamNames(team.name);
      });
    }
  };

  loadNumCards = async () => {
    const numCardsIDB = await indexedDB.numCards.toArray();

    if (numCardsIDB.length) {
      this.props.numOfCards(parseInt(numCardsIDB[0].num));
    }
  };

  loadActiveCards = async () => {
    const activeCardsIDB = await indexedDB.activeCards.toArray();

    if (activeCardsIDB.length) {
      this.props.updateActiveCards(activeCardsIDB);
    }
  };

  loadDiscardedCards = async () => {
    const discardedCardsIDB = await indexedDB.discardedCards.toArray();

    if (discardedCardsIDB.length) {
      discardedCardsIDB.forEach(discardedCard => {
        this.props.discardedCards(discardedCard);
      });
    }
  };

  loadTeamOneScore = async () => {
    const teamOneScoreIDB = await indexedDB.teamOneScore.toArray();

    if (teamOneScoreIDB.length) {
      this.props.teamOneScore(teamOneScoreIDB[0].score);
    }
  };

  loadTeamTwoScore = async () => {
    const teamTwoScoreIDB = await indexedDB.teamTwoScore.toArray();

    if (teamTwoScoreIDB.length) {
      this.props.teamTwoScore(teamTwoScoreIDB[0].score);
    }
  };

  loadCurrTeam = async () => {
    const currTeamIDB = await indexedDB.currTeam.toArray();

    if (currTeamIDB.length) {
      this.props.currentTeam(currTeamIDB[0].name);
    }
  };

  loadCurrRound = async () => {
    const currRoundIDB = await indexedDB.currRound.toArray();

    if (currRoundIDB.length) {
      this.props.currentRound(currRoundIDB[0].round - 1);
    }
  };

  loadTeamTimer = async () => {
    const teamTimerIDB = await indexedDB.teamTimer.toArray();

    if (teamTimerIDB.length) {
      this.props.updateTeamTimer(teamTimerIDB[0].state);
    }
  };

  cardsPGtoIDB = async () => {
    const cardsPG = await api.getCards();
    indexedDB.allCards.clear();
    indexedDB.allCards.bulkAdd(cardsPG);
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
  discardedCards: card => dispatch(actions.discardedCards(card)),
  teamOneScore: points => dispatch(actions.teamOneScore(points)),
  teamTwoScore: points => dispatch(actions.teamTwoScore(points)),
  currentTeam: currentTeam => dispatch(actions.currentTeam(currentTeam)),
  currentRound: roundNumber => dispatch(actions.currentRound(roundNumber)),
  updateTeamTimer: teamTimer => dispatch(actions.updateTeamTimer(teamTimer))
});

App.propTypes = {};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
