import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import indexedDB from '../../indexedBD';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  componentDidMount() {}

  handleClick = e => {
    e.preventDefault();

    if (this.props.currRound > 1) {
      const shuffled = this.shuffleCards(this.props.discardedCards);
      this.props.updateActiveCards(shuffled);
      indexedDB.activeCards.bulkAdd(shuffled);
      this.props.clearDiscardedCards([]);
      indexedDB.discardedCards.clear();
    }

    this.props.updateTeamTimer('counting');
    this.countDown();
  };

  shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  countDown = () => {
    let count = 60,
      timer = setInterval(() => {
        count--;
        if (count === 0) {
          this.props.updateTeamTimer('stopped');
          this.props.currTeam === this.props.teamNames[0]
            ? this.props.currentTeam(this.props.teamNames[1])
            : this.props.currentTeam(this.props.teamNames[0]);
          clearInterval(timer);
        }
      }, 1000);
  };

  render() {
    const { teamNames, teamOneScore, teamTwoScore, currRound } = this.props;
    const startingTeam =
      teamOneScore <= teamTwoScore ? teamNames[0] : teamNames[1];
    let roundDescription;
    let round;

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

    return (
      <div className="background-monikers">
        <div className="round-transition">
          <h2 className="round-headline">{round}</h2>
          <div className="dashed-line" />
          <p className="round-description">{roundDescription}</p>
          <div className="dashed-line" />
          {/* color changes between blue and red per team */}
          <h3 className="starting-team">{startingTeam} Team Starts</h3>
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

Round.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
