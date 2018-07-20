import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Play.css';

export class Play extends Component {
  componentDidMount() {}

  render() {
    return (
    <div className="play">
      <div>
        {/* All text is placeholder calls to redux store. */}
        <h3>this.props.currentTeam</h3>
        <h3>this.props.currentRound</h3>
      </div>
      <div>
        <h1>this.props.cards[0].name</h1>
        <h1>this.props.cards[0].pointValue</h1>

        <p>this.props.cards[0].description</p>
        <h3>this.props.cards[0].category</h3>
      </div>
      <button>Pass</button>
      <button>Got It!</button>

    </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Play.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
