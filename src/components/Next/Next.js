import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { updateTeamTimer, currentTeam } from '../../actions/gameActions/gameActions';

import * as actions from '../../actions';
import './Next.css';

export class Next extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  startTimer = (e) => {
    e.preventDefault();
    this.props.updateTeamTimer('counting');
    this.countDown();
  }

  countDown = () => {
    let count = 60,
      timer = setInterval(() => {
        count--;
        if (count === 0) {
          this.props.updateTeamTimer('stopped')
          this.props.currTeam === this.props.teamNames[0]
            ? this.props.currentTeam(this.props.teamNames[1])
            : this.props.currentTeam(this.props.teamNames[0]);
          clearInterval(timer);
        }
      }, 1000);
  };

  render() {
    const {currTeam, activeCards} = this.props;

    return (
      <div className="background-monikers">
        <div className="team-transition">
          <h2 className="current-team-headline">Team {currTeam}, your turn</h2>
          <p className="remaining-cards">{activeCards.length} Cards Remaining</p>
          <div className="dashed-line"></div>
          <button className="start-turn-button" onClick={this.startTimer}>START</button>
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

Next.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Next);
