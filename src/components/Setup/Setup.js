import React, { Component } from 'react';
import PropTypes from 'prop-types';
import indexedDB from '../../indexedBD';
import { connect } from 'react-redux';
import {
  getTeamNames,
  numOfCards,
  currentTeam,
  addCard
} from '../../actions/gameActions';
import './Setup.css';
import logo from '../../assets/Monikers_logo_lockup-02.svg';

export class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamOne: '',
      teamTwo: '',
      numCards: -1
    };
  }

  componentDidMount() {}

  cardsIDBtoRDX = async (numberOfCards) => {
    const numberOfCardsInIDB = await indexedDB.cards.count();

    const lowerBound = 1;
    const upperBound = numberOfCardsInIDB;
    const uniqueRandomNumbers = [];

    while (uniqueRandomNumbers.length < numberOfCards) {
      const randomNumber = Math.floor(
        Math.random() * (upperBound - lowerBound) + lowerBound
      );

      if (uniqueRandomNumbers.indexOf(randomNumber) === -1) {
        uniqueRandomNumbers.push(randomNumber);
      }
    }

    const allCards = await indexedDB.cards.toArray();

    uniqueRandomNumbers.forEach(num => {
      this.props.addCard(allCards[num]);
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { teamOne, teamTwo, numCards } = this.state;

    this.props.getTeamNames(teamOne);
    this.props.getTeamNames(teamTwo);
    this.props.numOfCards(parseInt(numCards));
    this.props.currentTeam(teamOne);

    // clear existing data
    indexedDB.teams.clear();
    indexedDB.numCards.clear();
    // add input values to indexedDB
    indexedDB.teams.add({ team: 1, name: this.state.teamOne });
    indexedDB.teams.add({ team: 2, name: this.state.teamTwo });
    indexedDB.numCards.add({ num: this.state.numCards });

    // get teamOne primary key
    const teamOneID = await indexedDB.teams
      .where('team')
      .equals(1)
      .primaryKeys();
    // get teamOne Object
    const teamOneObj = await indexedDB.teams.get(teamOneID[0]);
    // get teamOne name
    const teamOneName = teamOneObj.name;

    if (teamOne && teamTwo && numCards) {
      await this.cardsIDBtoRDX(this.props.numCards);
      this.props.history.push('/play');
    }
  };

  handleBackButton = e => {
    e.preventDefault();

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="wrapper">
        <img className="logo" src={logo} alt="Monikers logo" />
        <h2 className="game-setup-headline">Game Setup</h2>
        <form action="" onSubmit={this.handleSubmit}>

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
          <h3 className="label-name">Number of Cards</h3>
          <input
            className="input-field"
            type="number"
            min="30"
            max="60"
            placeholder="Enter number 30-60"
            name="numCards"
            onChange={this.handleChange}
          />
          <button className="start-button" type="submit">
            START GAME
          </button>
          <button
            className="back-button"
            type="submit"
            onClick={this.handleBackButton}
          >
            BACK
          </button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  teamNames: state.teamNames,
  numCards: state.numCards
});

export const mapDispatchToProps = dispatch => ({
  getTeamNames: teamName => dispatch(getTeamNames(teamName)),
  numOfCards: number => dispatch(numOfCards(number)),
  currentTeam: team => dispatch(currentTeam(team)),
  addCard: card => dispatch(addCard(card)),

});

Setup.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
