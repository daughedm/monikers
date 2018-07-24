import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  componentDidMount() {}

  render() {
    const {teamNames, teamOneScore, teamTwoScore, currRound} = this.props;
    const startingTeam = teamOneScore <= teamTwoScore ? teamNames[0] : teamNames[1];
    let roundDescription;

    if (currRound === 1) {
      roundDescription = 'Describe the name using any words, sounds, or gestures except the name itself';
    } else if (currRound === 2) {
      roundDescription = 'Describe the name using only one word, which can be anything except the name itself';
    } else {
      roundDescription = 'Describe the name using just charades. No words. Sound effects are OK.';
    }

    return (
      <div className="round-transition">
        <h2 className="round-headline">Round: {currRound}</h2>
        <p>{roundDescription}</p>
        <h3 className="starting-team">Team {startingTeam} starts.</h3>
        <button className="start-round-button">START ROUND</button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currRound: state.currRound,
  teamOneScore: state.teamOneScore,
  teamTwoScore: state.teamTwoScore,
  teamNames: state.teamNames
});

export const mapDispatchToProps = dispatch => ({});

Round.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
