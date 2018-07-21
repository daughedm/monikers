import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Next.css';

export class Next extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return <div className="next" />;
  }
}

export const mapStateToProps = state => ({
  cards: state.cards
});

export const mapDispatchToProps = dispatch => ({});

Next.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Next);
