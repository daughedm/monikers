import React, { Component } from 'react';
import PropTypes from 'prop-types';
import indexedDB from '../../indexedBD';
import { connect } from 'react-redux';
import * as actions from '../../actions'
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

  cardsIDBtoRDX = async numberOfCards => {
    const numberOfCardsInIDB = await indexedDB.allCards.count();
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
    const allCards = await indexedDB.allCards.toArray();
    indexedDB.activeCards.clear();
    uniqueRandomNumbers.forEach(num => {
      this.props.addCard(allCards[num]);
      indexedDB.activeCards.add(allCards[num]);
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

    if (teamOne && teamTwo && numCards) {
      this.storeGameInfo(teamOne, teamTwo, numCards);
      await this.cardsIDBtoRDX(numCards);
      this.props.history.push('/play');
    }
  };

  storeGameInfo = async (teamOne, teamTwo, numCards) => {
    this.props.addTeamNames(teamOne);
    this.props.addTeamNames(teamTwo);
    this.props.numOfCards(parseInt(numCards));
    this.props.currentTeam(teamOne);
    indexedDB.teamNames.clear();
    indexedDB.numCards.clear();
    indexedDB.teamNames.add({ team: 1, name: teamOne });
    indexedDB.teamNames.add({ team: 2, name: teamTwo });
    indexedDB.numCards.add({ num: numCards });
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
  getTeamNames: teamName => dispatch(actions.getTeamNames(teamName)),
  numOfCards: number => dispatch(actions.numOfCards(number)),
  currentTeam: team => dispatch(actions.currentTeam(team)),
  addCard: card => dispatch(actions.addCard(card)),
  addTeamNames: teamName => dispatch(actions.addTeamNames(teamName))
});

Setup.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup);
