import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  componentDidMount() {}


  handleClick = e => {
    e.preventDefault();
    console.log('click')
    this.props.history.push('/play');
  }

  render() {
    const {teamNames, teamOneScore, teamTwoScore, currRound} = this.props;
    const startingTeam = teamOneScore <= teamTwoScore ? teamNames[0] : teamNames[1];
    let roundDescription;
    let round;

    if (currRound === 1) {
      roundDescription = 'Describe the name using any words, sounds, or gestures except the name itself';
      round = 'Round One';

    } else if (currRound === 2) {
      roundDescription = 'Describe the name using only one word, which can be anything except the name itself';
      round = 'Round Two';
    } else if (currRound === 3) {
      roundDescription = 'Describe the name using just charades. No words. Sound effects are OK.';
      round = 'Round Three';
    }

    return (
      <div className="background-monikers">
        <div className="round-transition">
          <h2 className="round-headline">{round}</h2>
          <div className="dashed-line"></div>
          <p className="round-description">{roundDescription}</p>
          <div className="dashed-line"></div>
          {/* color changes between blue and red per team */}
          <h3 className="starting-team">{startingTeam} Team Starts</h3>
          <button className="start-round-button" onClick={this.handleClick}>START ROUND</button>
        </div>
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
