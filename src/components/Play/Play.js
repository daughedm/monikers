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

  handleGotIt = e => {
    e.preventDefault();

    this.props.discardedCards(this.props.activeCards[0]);
    const newCards = this.props.activeCards.slice(1);

    this.props.updateActiveCards(newCards);
  }

  handleSkipped = e => {
    e.preventDefault();

    const newCards = this.props.activeCards.slice(1);
    this.props.updateActiveCards(newCards);

    this.props.addCard(this.props.activeCards[0]);
  }

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
            onClick={this.handleSkipped}>
            Pass
          </button>
          <button
            className="got-it-button ripple-got-it"
            onClick={this.handleGotIt}>Got It!
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  activeCards: state.activeCards,
  discardPile: state.discardPile
});

export const mapDispatchToProps = dispatch => ({
  updateActiveCards: cards => dispatch(actions.updateActiveCards(cards)),
  discardedCards: card => dispatch(actions.discardedCards(card)),
  addCard: card => dispatch(actions.addCard(card))
});

Play.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
