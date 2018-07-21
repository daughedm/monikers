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
        <div className="game-info-container">
          <h3 className="current-team">Blue Team</h3>
          <h3 className="current-round">Round 1</h3>

        </div>
        {this.props.cards.length && 
        <div className="card-container">
          <h1 className="card-title">{this.props.cards[0].name}</h1>

          <p className="description">{this.props.cards[0].description}</p>
          <div className="dashed-line" ></div>
          <h3 className="category">{this.props.cards[0].category}</h3>
          {/* this divs colors will change based on category */}
          <div className="circle">
            <h1 className="points">{this.props.cards[0].pointValue}</h1>
          </div>
        </div>
        }
        <div className="buttons-container">
          <button className="pass-button ripple-pass">Pass</button>
          <button className="got-it-button ripple-got-it">Got It!</button>
        </div>
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
