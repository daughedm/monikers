import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './Finish.css';

export class Finish extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.resetStore();
    this.props.history.push('/setup');
  };

  render() {
    const { teamNames, teamOneScore, teamTwoScore } = this.props;
    const winningTeam = teamOneScore > teamTwoScore ? 0 : 1;
    let teamColor;

    if (winningTeam === teamNames[0]) {
      teamColor = { color: '#00B4EF' };
    } else {
      teamColor = { color: '#866AAD' };
    }

    return (
      <div className="background-monikers">
        <div className="finish-transition">
          <h2 className="win-headline" style={teamColor}>
            {teamNames[winningTeam]}
          </h2>
          <h2 className="win-headline-two">
           WINS!
          </h2>
          <div className="dashed-line" />
          <button
            className="start-newgame-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            NEW GAME
          </button>
        </div>
        <div className="animation-one"></div>
        <div className="animation-two"></div>
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
