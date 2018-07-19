import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getTeamNames} from '../../actions';
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

    this.props.getTeamNames(this.state.teamName);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          {this.props.teamNames.length === 0
            ? <h3>Team One</h3>
            : <h3>Team Two</h3>
          }
          <input
            type="text"
            placeholder="Enter team name"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  teamNames: state.teamNames
});

export const mapDispatchToProps = dispatch => ({
  getTeamNames: teamName => dispatch(getTeamNames(teamName))
});

Setup.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
