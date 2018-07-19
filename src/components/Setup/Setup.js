import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Setup.css';

export class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamName: ''
    };
  }

  componentDidMount() {}

  handleChange = e => {
    this.setState({
      teamName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.teamName);

    this.props.teamNames(this.state.teamName);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Team Name"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  teamNames: teamName => dispatch(actions.teamNames(teamName))
});

Setup.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
