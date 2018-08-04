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

  handleGotIt = async e => {
    e.preventDefault();
    const { activeCards, discardedCards, updateActiveCards } = this.props;

    discardedCards(activeCards[0]);

    const newCards = activeCards.slice(1);
    updateActiveCards(newCards);

    await this.updateScore();

    if (activeCards.length === 1) {
      this.updateRound();
    }
  };

  handleSkipped = e => {
    e.preventDefault();
    const { addCard, updateActiveCards, activeCards } = this.props;

    const newCards = activeCards.slice(1);
    updateActiveCards(newCards);

    addCard(activeCards[0]);
  };

  skipCardAfterTurn = () => {
    const { addCard, updateActiveCards, activeCards } = this.props;

    const newCards = activeCards.slice(1);
    updateActiveCards(newCards);

    addCard(activeCards[0]);
  }

  countDown = () => {
    const { updateTeamTimer, currTeam, currentTeam, teamNames } = this.props;

    let count = 60;
    let timer = setInterval(() => {
      count--;

      if (count === 0) {
        updateTeamTimer('stopped');
        clearInterval(this.state.timer);
        currTeam === teamNames[0]
          ? currentTeam(teamNames[1])
          : currentTeam(teamNames[0]);
        this.skipCardAfterTurn();
        clearInterval(timer);
      }
    }, 1000);
    this.setState({ timer });
  };

  updateScore = () => {
    const {
      currTeam,
      teamNames,
      teamOneScore,
      teamTwoScore,
      activeCards
    } = this.props;

    if (currTeam === teamNames[0]) {
      teamOneScore(activeCards[0].pointValue);
    } else {
      teamTwoScore(activeCards[0].pointValue);
    }
  };

  updateRound = () => {
    const {
      teamNames,
      oneScore,
      twoScore,
      currentRound,
      updateTeamTimer,
      currentTeam
    } = this.props;

    currentRound(1);
    updateTeamTimer('stopped');
    clearInterval(this.state.timer);

    const determineCurrTeam =
      oneScore <= twoScore ? teamNames[0] : teamNames[1];

    currentTeam(determineCurrTeam);
  };

  render() {
    const {
      currTeam,
      teamNames,
      teamTimer,
      activeCards,
      currRound
    } = this.props;
    let teamColor;

    if (currTeam === teamNames[0]) {
      teamColor = { color: '#00B4EF' };
    } else {
      teamColor = { color: '#866AAD' };
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
        <div className="background-image">
          <div className="play">
            <div className="game-info-container">
              <h3 className="current-team" style={teamColor}>
                {currTeam}
              </h3>
              <h3 className="current-round" style={teamColor}>
                Round {currRound}
              </h3>
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
  addCard: PropTypes.func.isRequired,
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
