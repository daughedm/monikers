import React from 'react';
import logolockup from '../../assets/Monikers_logo_lockup-02.svg';
import loadingGif from '../../assets/loading.svg';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <img className="logo-lockup" src={logolockup} alt="logolockup" />
      <img className="loading-gif" src={loadingGif} alt="loadingGif" />
    </div>
  );
};

export default Loading;
