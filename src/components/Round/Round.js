import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    e.preventDefault();

    if (this.props.currRound > 1) {
      const shuffled = this.shuffleCards(this.props.discardedCards);
      this.props.updateActiveCards(shuffled);
      this.props.clearDiscardedCards([]);
    }

    this.props.updateTeamTimer('counting');
    this.props.countDown();
  };

  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  render() {
    const { teamNames, teamOneScore, teamTwoScore, currRound, currTeam } = this.props;
    const startingTeam =
      teamOneScore <= teamTwoScore ? teamNames[0] : teamNames[1];
    let roundDescription;
    let round;
    let teamColor;

    if (currRound === 1) {
      roundDescription =
        'Describe the name using any words, sounds, or gestures except the name itself';
      round = 'Round One';
    } else if (currRound === 2) {
      roundDescription =
        'Describe the name using only one word, which can be anything except the name itself';
      round = 'Round Two';
    } else if (currRound === 3) {
      roundDescription =
        'Describe the name using just charades. No words. Sound effects are OK.';
      round = 'Round Three';
    }

    if (currTeam === teamNames[0]) {
      teamColor = { color: '#00B4EF'};
    } else {
      teamColor = { color: '#866AAD'};
    }

    return (
      <div className="background-monikers">
        <div className="flex">
          <h5 className="scores blue">{teamNames[0]} : {teamOneScore}</h5>
          <h5 className="scores purple">{teamNames[1]} : {teamTwoScore}</h5>
        </div>
        <div className="round-transition">
          <h2 className="round-headline">{round}</h2>
          <div className="dashed-line" />
          <p className="round-description">{roundDescription}</p>
          <div className="dashed-line" />
          {/* color changes between blue and red per team */}
          <h3 className="starting-team" style={teamColor}>{startingTeam} Starts</h3>
          <button className="start-round-button" onClick={this.handleClick}>
            START ROUND
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currRound: state.currRound,
  teamOneScore: state.teamOneScore,
  teamTwoScore: state.teamTwoScore,
  teamNames: state.teamNames,
  currTeam: state.currTeam,
  discardedCards: state.discardedCards
});

export const mapDispatchToProps = dispatch => ({
  updateTeamTimer: timer => dispatch(actions.updateTeamTimer(timer)),
  currentTeam: team => dispatch(actions.currentTeam(team)),
  currentRound: roundNumber => dispatch(actions.currentRound(roundNumber)),
  updateActiveCards: cards => dispatch(actions.updateActiveCards(cards)),
  clearDiscardedCards: cards => dispatch(actions.clearDiscardedCards(cards))
});

Round.propTypes = {
  currRound: PropTypes.number.isRequired,
  teamOneScore: PropTypes.number.isRequired,
  teamTwoScore: PropTypes.number.isRequired,
  teamNames: PropTypes.array.isRequired,
  currTeam: PropTypes.string.isRequired,
  discardedCards: PropTypes.array,
  updateTeamTimer: PropTypes.func.isRequired,
  currentTeam: PropTypes.func.isRequired,
  currentTimer: PropTypes.func,
  updateActiveCards: PropTypes.func.isRequired,
  clearDiscardedCards: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
