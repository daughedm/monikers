import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  componentDidMount() {}

  render() {
    const {teamNames, teamOneScore, teamTwoScore} = this.props;
    const startingTeam = teamOneScore <= teamTwoScore ? teamNames[0] : teamNames[1];
    return (
      <div>
        <h2>Round: {this.props.currRound}</h2>
        <h3>Team {startingTeam} starts.</h3>
        <button>START ROUND</button>
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
