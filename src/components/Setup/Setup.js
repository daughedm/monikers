import React, { Component } from 'react';
import PropTypes from 'prop-types';
import indexedDB from '../../indexedBD';
import { connect } from 'react-redux';
import { getTeamNames, numOfPlayers } from '../../actions';
import './Setup.css';

export class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamOne: '',
      teamTwo: '',
      numPlayers: -1
    };
  }

  componentDidMount() {}

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { teamOne, teamTwo, numPlayers } = this.state;

    this.props.getTeamNames(teamOne);
    this.props.getTeamNames(teamTwo);
    this.props.numOfPlayers(numPlayers);
    this.props.teamNames(this.state.teamName);

    // add input value to redux
    this.props.teamNames(this.state.teamName);

    // add input value to indexedDB
    indexedDB.teams.add({ name: this.state.teamName });

    // get teams from indexedDB
    const teamNamesDB = await indexedDB.teams.toArray();
    console.log('teamNamesDB: ', teamNamesDB);
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h3>Number of Players</h3>
        <input type="number" name="numPlayers" onChange={this.handleChange} />
        <h3>Team One</h3>
        <input
          type="text"
          name="teamOne"
          placeholder="Enter team name"
          onChange={this.handleChange}
        />
        <h3>Team Two</h3>
        <input
          type="text"
          name="teamTwo"
          placeholder="Enter team name"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  teamNames: state.teamNames,
  numPlayers: state.numPlayers
});

export const mapDispatchToProps = dispatch => ({
  getTeamNames: teamName => dispatch(getTeamNames(teamName)),
  numOfPlayers: number => dispatch(numOfPlayers(number))
});

Setup.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
