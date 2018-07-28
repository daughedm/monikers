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
import Finish from '../../components/Finish/Finish';
import indexedDB from '../../indexedBD';
import * as actions from '../../actions';
import * as api from '../../api/api';

import './App.css';

export class App extends Component {
  async componentDidMount() {
    await this.cardsPGtoIDB();
  }

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
        <Route path="/finish" exact={true} component={Finish} />
      </div>
    );
  }
}

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

App.propTypes = {
  addCard: PropTypes.func.isRequired,
  addTeamNames: PropTypes.func.isRequired,
  numOfCards: PropTypes.func.isRequired,
  updateActiveCards: PropTypes.func.isRequired,
  discardedCards: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
