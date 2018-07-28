import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Next.css';

export class Next extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  startTimer = e => {
    e.preventDefault();
    this.props.updateTeamTimer('counting');
  };

  render() {
    const { currTeam, activeCards, teamNames } = this.props;
    let teamColor;
    
    if (currTeam === teamNames[0]) {
      teamColor = { color: '#00B4EF'};
    } else {
      teamColor = { color: '#866AAD'};
    }

    return (
      <div className="background-monikers">
        <div className="team-transition">
          <h2 className="current-team-headline" style={teamColor}>{currTeam}, your turn</h2>
          <p className="remaining-cards">
            {activeCards.length} Cards Remaining
          </p>
          <div className="dashed-line" />
          <button className="start-turn-button" onClick={this.startTimer}>
            START
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currRound: state.currRound,
  currTeam: state.currTeam,
  teamNames: state.teamNames,
  activeCards: state.activeCards
});

export const mapDispatchToProps = dispatch => ({
  updateTeamTimer: timer => dispatch(actions.updateTeamTimer(timer)),
  currentTeam: team => dispatch(actions.currentTeam(team))
});

Next.propTypes = {
  currRound: PropTypes.number,
  currTeam: PropTypes.string,
  teamNames: PropTypes.array,
  activeCards: PropTypes.array,
  updateTeamTimer: PropTypes.func.isRequired,
  currentTeam: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Next);
