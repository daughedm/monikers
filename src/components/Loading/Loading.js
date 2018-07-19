import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Loading.css';

export class Loading extends Component {
  componentDidMount() {}

  render() {
    return <div className="loading" />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Loading.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
