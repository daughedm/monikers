import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Login.css';

export class Login extends Component {
  componentDidMount() {}

  render() {
    return <div className="login" />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Login.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
