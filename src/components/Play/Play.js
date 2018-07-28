import React, { Component } from 'react';
import Card from '../Card/Card';
import Round from '../Round/Round';
import Next from '../Next/Next';
import Finish from '../Finish/Finish';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Play.css';

export class Play extends Component {
  constructor() {
    super();
    this.state = {
      timer: null
    };
  }

  countDown = () => {
    let count = 60;
    let timer = setInterval(() => {
      count--;

      if (count === 0) {
        this.props.updateTeamTimer('stopped');
        clearInterval(this.state.timer);
        this.props.currTeam === this.props.teamNames[0]
          ? this.props.currentTeam(this.props.teamNames[1])
          : this.props.currentTeam(this.props.teamNames[0]);
        clearInterval(timer);
      }
    }, 1000);
    this.setState({ timer });
  };

  handleGotIt = e => {
    e.preventDefault();
    const {currTeam, teamNames, activeCards, teamOneScore, 
      teamTwoScore, discardedCards, updateActiveCards, currentRound, 
      updateTeamTimer, currentTeam} = this.props;

    if (currTeam === teamNames[0]) {
      teamOneScore(activeCards[0].pointValue);
    } else {
      teamTwoScore(activeCards[0].pointValue);
    }
    discardedCards(activeCards[0]);

    const newCards = activeCards.slice(1);

    updateActiveCards(newCards);
    if (activeCards.length === 1) {
      currentRound(1);
      updateTeamTimer('stopped');
      clearInterval(this.state.timer);
      const determineCurrTeam =
      teamOneScore <= teamTwoScore ? teamNames[0] : teamNames[1];

      currentTeam(determineCurrTeam);
    }
  };

  handleSkipped = e => {
    e.preventDefault();
    const {addCard, updateActiveCards, activeCards} = this.props;

    const newCards = activeCards.slice(1);
    updateActiveCards(newCards);

    addCard(activeCards[0]);
  };

  render() {
    const {currTeam, teamNames, teamTimer, activeCards, currRound} = this.props;
    let teamColor;

    if (currTeam === teamNames[0]) {
      teamColor = { color: '#00B4EF'};
    } else {
      teamColor = { color: '#866AAD'};
    }

    if (activeCards.length === 0 && currRound <= 3) {
      return <Round countDown={this.countDown} />;
    } else if (teamTimer === 'pregame') {
      return <Round countDown={this.countDown} />;
    } else if (teamTimer === 'stopped' && currRound <= 3) {
      return <Next countDown={this.countDown} />;
    } else if (currRound === 4) {
      return <Finish />;
    } else {
      return (
        <div className="play">
          <div className="game-info-container">
            <h3 className="current-team" style={teamColor}>{currTeam}</h3>
            <h3 className="current-round" style={teamColor}>Round {currRound}</h3>
          </div>
          <div className="timer" />
          {activeCards.length && <Card />}
          <div className="buttons-container">
            <button
              className="pass-button ripple-pass"
              onClick={this.handleSkipped}
            >
              Pass
            </button>
            <button
              className="got-it-button ripple-got-it"
              onClick={this.handleGotIt}
            >
              Got It
            </button>
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  activeCards: state.activeCards,
  discardPile: state.discardPile,
  currTeam: state.currTeam,
  currRound: state.currRound,
  teamNames: state.teamNames,
  oneScore: state.teamOneScore,
  twoScore: state.teamTwoScore,
  teamTimer: state.teamTimer
});

export const mapDispatchToProps = dispatch => ({
  updateActiveCards: cards => dispatch(actions.updateActiveCards(cards)),
  discardedCards: card => dispatch(actions.discardedCards(card)),
  addCard: card => dispatch(actions.addCard(card)),
  teamOneScore: points => dispatch(actions.teamOneScore(points)),
  teamTwoScore: points => dispatch(actions.teamTwoScore(points)),
  currentTeam: team => dispatch(actions.currentTeam(team)),
  updateTeamTimer: timer => dispatch(actions.updateTeamTimer(timer)),
  currentRound: roundNumber => dispatch(actions.currentRound(roundNumber))
});

Play.propTypes = {
  activeCards: PropTypes.array,
  discardPile: PropTypes.array,
  currTeam: PropTypes.string,
  teamNames: PropTypes.array,
  teamTimer: PropTypes.string,
  twoScore: PropTypes.number,
  oneScore: PropTypes.number,
  currRound: PropTypes.number,
  updateActiveCards: PropTypes.func.isRequired,
  discardedCards: PropTypes.func.isRequired,
  addCard: PropTypes.fun.isRequired,
  teamOneScore: PropTypes.func.isRequired,
  teamTwoScore: PropTypes.func.isRequired,
  currentTeam: PropTypes.func.isRequired,
  updateTeamTimer: PropTypes.func.isRequired,
  currentRound: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
