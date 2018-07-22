import React from 'react';
import { NavLink } from 'react-router-dom';
import logolockup from '../../assets/Monikers_logo_lockup-02.svg';
import './SplashPage.css';

const SplashPage = () => {
  return (
    <div className="splash-page">
      <img className="logo-lockup" src={logolockup}/>
      <div>
        <NavLink to="/setup">New Game</NavLink>
        <br />
        <NavLink to="/instructions">Instructions</NavLink>
      </div>
    </div>
  );
};

export default SplashPage;
