import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class Finish extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.resetStore();
    this.props.history.push('/setup');
  };

  render() {
    const { teamNames, teamOneScore, teamTwoScore } = this.props;
    const winningTeam = teamOneScore > teamTwoScore ? 0 : 1;
    return (
      <div className="background-monikers">
        <div className="round-transition">
          <h2 className="round-headline">
            Team {teamNames[winningTeam]} wins!
          </h2>
          <div className="dashed-line" />
          <button
            className="start-button"
            type="submit"
            onClick={this.handleSubmit}
          >
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
  resetStore: () => dispatch(actions.resetStore())
});

Finish.propTypes = {
  teamNames: PropTypes.array,
  teamOneScore: PropTypes.number,
  teamTwoScore: PropTypes.number,
  resetStore: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Finish)
);
