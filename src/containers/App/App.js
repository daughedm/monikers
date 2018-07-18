import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import './App.css';

export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monikers</h1>
        </header>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Header.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
