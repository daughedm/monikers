import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { activeCards } = this.props;
    let pointColor;
    let categoryColor;

    if (activeCards[0].pointValue === 1) {
      pointColor = { backgroundColor: 'rgba(76, 189, 159, 1)' };
    } else if (activeCards[0].pointValue === 2) {
      pointColor = { backgroundColor: '#00B4EF' };
    } else if (activeCards[0].pointValue === 3) {
      pointColor = { backgroundColor: '#866AAD' };
    } else if (activeCards[0].pointValue === 4) {
      pointColor = { backgroundColor: 'rgba(239, 83, 63, 1)' };
    }
    if (activeCards[0].pointValue === 1) {
      categoryColor = { color: 'rgba(76, 189, 159, 1)' };
    } else if (activeCards[0].pointValue === 2) {
      categoryColor = { color: '#00B4EF' };
    } else if (activeCards[0].pointValue === 3) {
      categoryColor = { color: '#866AAD' };
    } else if (activeCards[0].pointValue === 4) {
      categoryColor = { color: 'rgba(239, 83, 63, 1)' };
    }

    return (
      <div className="card-container">
        <h1 className="card-title">{activeCards[0].name}</h1>
        <p className="description">{activeCards[0].description}</p>
        <div className="dashed-line" />
        <h3 className="category" style={categoryColor}>
          {activeCards[0].category}
        </h3>
        {/* this divs colors will change based on category */}
        <div className="circle" style={pointColor}>
          <h1 className="points">{activeCards[0].pointValue}</h1>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  activeCards: state.activeCards
});

Card.propTypes = {};

export default connect(mapStateToProps)(Card);
