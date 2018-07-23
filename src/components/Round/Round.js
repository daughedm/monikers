import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>Round: {this.props.currRound}</h2>
        <button>HI</button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currRound: state.currRound,
  teamOneScore: state.teamOneScore,
  teamTwoScore: state.teamTwoScore
});

export const mapDispatchToProps = dispatch => ({});

Round.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
