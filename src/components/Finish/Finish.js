import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import * as actions from '../../actions/'

export class Finish extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();


    this.props.updateActiveCards([]);
    this.props.clearDiscardedCards([]);
    this.props.clearScore();
    this.props.clearNumOfCards();
    this.props.clearTeamNames();
    this.props.clearCurrentRound();
    this.props.clearCurrentTeam();
    this.props.history.push('/setup');
  }

  render() {
    const { teamNames, teamOneScore, teamTwoScore } = this.props;
    const winningTeam = teamOneScore > teamTwoScore ? 0 : 1;
    return (
      <div className="background-monikers">
        <div className="round-transition">
          <h2 className="round-headline">Team {teamNames[winningTeam]} wins!</h2>
          <div className="dashed-line" />
          <button className="start-button" type="submit" onClick={this.handleSubmit}>
            NEW GAME
          </button>
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

export const mapDispatchToProps = dispatch => ({
  updateActiveCards: cards => dispatch(actions.updateActiveCards(cards)),
  clearDiscardedCards: card => dispatch(actions.clearDiscardedCards(card)),
  clearScore: () => dispatch(actions.clearScore()),
  clearCurrentRound: () => dispatch(actions.clearCurrentRound()),
  clearTeamNames: () => dispatch(actions.clearTeamNames()),
  clearNumOfCards: () => dispatch(actions.clearNumOfCards()),
  clearCurrentTeam: () => dispatch(actions.clearCurrentTeam())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Finish));
