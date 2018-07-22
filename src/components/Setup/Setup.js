import React, { Component } from 'react';
import PropTypes from 'prop-types';
import indexedDB from '../../indexedBD';
import { connect } from 'react-redux';
import { getTeamNames, numOfPlayers } from '../../actions/gameActions';
import './Setup.css';
import logo from '../../assets/Monikers_logo_lockup-02.svg';

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
    this.props.numOfPlayers(parseInt(numPlayers));

    // clear existing data
    indexedDB.teams.clear();
    indexedDB.numPlayers.clear();
    // add input values to indexedDB
    indexedDB.teams.add({ team: 1, name: this.state.teamOne });
    indexedDB.teams.add({ team: 2, name: this.state.teamTwo });
    indexedDB.numPlayers.add({ num: this.state.numPlayers });

    // get teamOne primary key
    const teamOneID = await indexedDB.teams
      .where('team')
      .equals(1)
      .primaryKeys();
    // get teamOne Object
    const teamOneObj = await indexedDB.teams.get(teamOneID[0]);
    // get teamOne name
    const teamOneName = teamOneObj.name;

    console.log('teamOneID: ', teamOneID);
    console.log('teamOneObj: ', teamOneObj);
    console.log('teamOneName: ', teamOneName);
  };

  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={logo} alt="Monikers logo" />
        <h2 className="game-setup-headline">Game Setup</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <h3 className="label-name">Number of Players</h3>
          <input
            className="input-field"
            placeholder="Player count"
            type="number"
            name="numPlayers"
            onChange={this.handleChange}
          />
          <h3 className="label-name">Team One</h3>
          <input
            className="input-field"
            type="text"
            name="teamOne"
            placeholder="Enter team name"
            onChange={this.handleChange}
          />
          <h3 className="label-name">Team Two</h3>
          <input
            className="input-field"
            type="text"
            name="teamTwo"
            placeholder="Enter team name"
            onChange={this.handleChange}
          />
          <button className="start-button" type="submit">
            START GAME
          </button>
          <button className="back-button" type="submit">
            BACK
          </button>
        </form>
      </div>
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
