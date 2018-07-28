import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import logolockup from '../../assets/Monikers_logo_lockup-02.svg';
import loadingGif from '../../assets/loading.svg';
import './Loading.css';

export class Loading extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="loading">
        <img className="logo-lockup" src={logolockup} alt="logolockup" />
        <img className="loading-gif" src={loadingGif} alt="loadingGif" />
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Loading.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
