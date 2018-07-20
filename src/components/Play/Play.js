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
        <h3>TeamOne</h3>
        <h3>Round 1</h3>
      </div>
      <div>
        <h1>Blacula</h1>
        <p>The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.</p>
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
