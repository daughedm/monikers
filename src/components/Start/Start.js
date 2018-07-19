import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Start.css';

export class Start extends Component {
  componentDidMount() {}

  render() {
    return <div className="start" />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Start.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
