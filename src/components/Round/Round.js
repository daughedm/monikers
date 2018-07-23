import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Round.css';

export class Round extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  currRound: state.currRound,
  teamOneScore:
});

export const mapDispatchToProps = dispatch => ({});

Round.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
