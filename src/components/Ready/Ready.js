import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Ready.css';

export class Ready extends Component {
  componentDidMount() {}

  render() {
    return <div className="ready" />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Ready.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ready);
