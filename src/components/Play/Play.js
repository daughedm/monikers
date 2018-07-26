import React, { Component } from 'react';
import Card from '../Card/Card';
import Round from '../Round/Round';
import Next from '../Next/Next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import indexedDB from '../../indexedBD';
import * as actions from '../../actions';

import './Play.css';

export class Play extends Component {
  constructor() {
    super();
    this.state = {
      clock: 'active'
    };
  }

  componentDidMount() {}

  handleGotIt = async e => {
    e.preventDefault();

    if (this.props.currTeam === this.props.teamNames[0]) {
      this.props.teamOneScore(this.props.activeCards[0].pointValue);
      const currentScoreOne = (await indexedDB.teamOneScore.get(1)) || 0;

      indexedDB.teamOneScore.put({
        id: 1,
        score:
          (currentScoreOne.score || 0) + this.props.activeCards[0].pointValue
      });
    } else {
      this.props.teamTwoScore(this.props.activeCards[0].pointValue);
      const currentScoreTwo = (await indexedDB.teamTwoScore.get(1)) || 0;

      indexedDB.teamTwoScore.put({
        id: 1,
        score:
          (currentScoreTwo.score || 0) + this.props.activeCards[0].pointValue
      });
    }
    this.props.discardedCards(this.props.activeCards[0]);
    indexedDB.discardedCards.put(this.props.activeCards[0]);

    const newCards = this.props.activeCards.slice(1);

    this.props.updateActiveCards(newCards);
    indexedDB.activeCards.clear();
    indexedDB.activeCards.bulkPut(newCards);

    if (this.props.activeCards.length === 1) {
      this.props.currentRound(1);
    }
  };

  handleSkipped = e => {
    e.preventDefault();

    const newCards = this.props.activeCards.slice(1);
    this.props.updateActiveCards(newCards);

    this.props.addCard(this.props.activeCards[0]);
  };

  render() {
    if (this.props.teamTimer === 'stopped') {
      return <Next />;
    } else if (this.props.teamTimer === 'pregame') {
      return <Round />;
    } else if (this.props.activeCards.length === 0) {
      return <Round />;
    } else {
      return (
        <div className="play">
          <div className="game-info-container">
            <h3 className="current-team">{this.props.currTeam}</h3>
            <h3 className="current-round">Round {this.props.currRound}</h3>
          </div>
          <div className="timer" />
          {this.props.activeCards.length && <Card />}
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
              Got It!
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

Play.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
