import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Play.css';

export class Play extends Component {
  componentDidMount() {}

  render() {
    return <div className="play" />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Play.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play);
