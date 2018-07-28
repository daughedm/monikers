import React, { Component } from 'react';
import logolockup from '../../assets/Monikers_logo_lockup-02.svg';
import loadingGif from '../../assets/loading.svg';
import './Loading.css';

export class Loading extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="loading">
        <img className="logo-lockup" src={logolockup} />
        <img className="loading-gif" src={loadingGif} />
      </div>
    );
  }
}

Loading.propTypes = {};

export default Loading;
