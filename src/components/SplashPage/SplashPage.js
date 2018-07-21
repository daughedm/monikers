import React from 'react';
import { NavLink } from 'react-router-dom';

const SplashPage = () => {
  return (
    <form>
      <h1>Monikers</h1>
      <NavLink to="/setup">New Game</NavLink>
      <br />
      <NavLink to="/instructions">Instructions</NavLink>
    </form>
  );
};

export default SplashPage;
