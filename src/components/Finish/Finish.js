import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Finish extends Component {
  constructor() {
    super();
  }

  render() {
    const { teamNames, teamOneScore, teamTwoScore } = this.props;
    const winningTeam = teamOneScore > teamTwoScore ? 0 : 1;
    return (
      <div className="background-monikers">
        <div className="round-transition">
          <h2 className="round-headline">Team {teamNames[winningTeam]} wins!</h2>
          <div className="dashed-line" />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  teamNames: state.teamNames,
  teamOneScore: state.teamOneScore,
  teamTwoScore: state.teamTwoScore
});

export default connect(mapStateToProps)(Finish);
