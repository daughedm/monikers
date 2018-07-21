import React, { Component } from 'react';
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
        <div>
          <h3>props.currentTeam</h3>
          <h3>props.currentRound</h3>
        </div>
        <div>
          <h1>{this.props.cards[0].name}</h1>
          <h1>{this.props.cards[0].name}</h1>

          <p>{this.props.cards[0].name}</p>
          <h3>{this.props.cards[0].name}</h3>
        </div>
        <button>Pass</button>
        <button>Got It!</button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  cards: state.cards
});

export const mapDispatchToProps = dispatch => ({});

Play.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
