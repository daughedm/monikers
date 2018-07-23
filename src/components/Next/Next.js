import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Next.css';

export class Next extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    const {currTeam} = this.props;

    return (
      <div className="team-transition">
        <h2 className="current-team-headline">Team {currTeam}'s Turn</h2>
        <button className="start-round-button">START</button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currRound: state.currRound,
  currTeam: state.currTeam,
  teamNames: state.teamNames
});

export const mapDispatchToProps = dispatch => ({});

Next.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Next);
