import React, { Component } from 'react';
import Card from '../Card/Card'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Play.css';

export class Play extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return (
      <div className="play">
        <div className="game-info-container">
          <h3 className="current-team">Blue Team</h3>
          <h3 className="current-round">Round 1</h3>

        </div>
        <div className="timer"></div>
        {this.props.activeCards.length &&
          <Card />
        }
        <div className="buttons-container">
          <button
            className="pass-button ripple-pass"
            onClick="">
            Pass
          </button>
          <button
            className="got-it-button ripple-got-it"
            onClick="">Got It!
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  activeCards: state.activeCards
});

export const mapDispatchToProps = dispatch => ({});

Play.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
