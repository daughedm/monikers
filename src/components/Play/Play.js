import React, { Component } from 'react';
import Card from '../Card/Card';
import Next from '../Next/Next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Play.css';

export class Play extends Component {
  constructor() {
    super();
    this.state = {
      clock: 'active'
    };
  }

  componentDidMount() {}

  handleGotIt = e => {
    e.preventDefault();

    this.props.discardedCards(this.props.activeCards[0]);
    const newCards = this.props.activeCards.slice(1);

    this.props.updateActiveCards(newCards);
  };

  countDown = () => {
    let count = 60,
      timer = setInterval(() => {
        count--;
        if (count === 0) {
          this.setState({ clock: 'stopped' });
          clearInterval(timer);
        }
      }, 1000);
  };

  handleSkipped = e => {
    e.preventDefault();

    const newCards = this.props.activeCards.slice(1);
    this.props.updateActiveCards(newCards);

    this.props.addCard(this.props.activeCards[0]);
  };

  render() {
    this.countDown();
    if (this.state.clock === 'stopped') {
      return <Next />;
    } else {
      return (
        <div className="play">
          <div className="game-info-container">
            <h3 className="current-team">{this.props.currTeam}</h3>
            <h3 className="current-round">Round {this.props.currRound}</h3>
          </div>
          <div className="timer" />
          {this.props.activeCards.length && <Card />}
          <div className="buttons-container">
            <button
              className="pass-button ripple-pass"
              onClick={this.handleSkipped}
            >
              Pass
            </button>
            <button
              className="got-it-button ripple-got-it"
              onClick={this.handleGotIt}
            >
              Got It!
            </button>
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  activeCards: state.activeCards,
  discardPile: state.discardPile,
  currTeam: state.currTeam,
  currRound: state.currRound
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
