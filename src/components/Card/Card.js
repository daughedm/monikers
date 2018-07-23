import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Card extends Component() {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card-container">
        <h1 className="card-title">{this.props.activeCards[0].name}</h1>

        <p className="description">{this.props.activeCards[0].description}</p>
        <div className="dashed-line" ></div>
        <h3 className="category">{this.props.activeCards[0].category}</h3>
        {/* this divs colors will change based on category */}
        <div className="circle">
          <h1 className="points">{this.props.activeCards[0].pointValue}</h1>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  activeCards: state.activeCards
});

export default connect(mapStateToProps)(Card);
