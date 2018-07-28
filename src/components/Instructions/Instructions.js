import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Instructions.css';

export class Instructions extends Component {
  handleBackButton = e => {
    e.preventDefault();

    this.props.history.push('/');
  };

  render() {
    return (
      <div className="instructions">
        <h2 className="headline">GETTING STARTED</h2>

        <div className="dashed-line-instructions" />
        <p className="body-text">
          Monikers only takes about 5-10 minutes to learn. Start by dividing
          your group into 2 teams.
        </p>
        <p className="body-text">
          Choose the number of cards for your deck. For lower amounts of players
          (4-6) choose around 40 cards. For larger groups (6+) select around 60
          cards.
        </p>
        <p className="body-text last-paragraph ">
          Next, create your team names and hit START GAME. The team that is
          prompted will be the first team to go.
        </p>
        <h2 className="subtitle ">HOW TO PLAY</h2>
        <p className="body-text">
          A person from the starting team has 60 seconds to get their team to
          guess as many names as possible from the deck by giving clues about
          the person’s identity, (If you’re playing with more than 10 people,
          30—45 seconds is probably better) There’s no limit to the number of
          guesses. Skipping is allowed and highly encouraged in all rounds.
        </p>
        <p className="body-text">
          Teams take turns giving clues, Each player should take a turn giving
          clues before any teammates repeat. Go in clockwise order or feel free
          to use some other system.
        </p>
        <p className="body-text last-paragraph">
          A round ends when all cards from the deck have been guessed correctly.
          The team with the lowest score begins the next round.
        </p>
        <h2 className="subtitle">RULES FOR EACH ROUND</h2>
        <p className="body-text">
          Monikers has 3 rounds. Each has a restriction on how players are
          allowed to give clues:
        </p>
        <p className="body-text">
          ROUND 1 You can use any words, sounds, or gestures except the name
          itself, including the clue text on the card, If you say any part of
          the name, you have to skip that card this turn.
        </p>
        <p className="body-text">
          ROUND 2 Use only one word, which can be anything except the name
          itself, You can repeat that word as many times as you like, but no
          sounds or gestures.
        </p>
        <p className="body-text last-paragraph">
          ROUND 3 Just charades. No words. Sound effects are OK.
        </p>
        <h2 className="subtitle">ENDING THE GAME</h2>
        <p className="body-text">
          The team with the highest total score after 3 rounds wins. But feel
          free not to keep score at all. It’s fun to play competitively, but not
          necessary with the right group.
        </p>
        <button
          className="back-button"
          type="submit"
          onClick={this.handleBackButton}
        >
          BACK
        </button>
      </div>
    );
  }
}

Instructions.propTypes = {
  history: PropTypes.object.isRequired
};

export default Instructions;
