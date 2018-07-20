import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Setup from '../../components/Setup/Setup';
import './App.css';

export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Monikers</h1>
        </header>
        <Setup />
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

App.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
