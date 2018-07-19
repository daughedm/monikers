import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import './Instructions.css';

export class Instructions extends Component {
  componentDidMount() {}

  render() {
    return;
    <div className="instructions">
      <h2>GETTING STARTED</h2>
      <p>
        Monikers only takes about 5-10 minutes to learn. Start by dividing your
        group into 2 teams.
      </p>
      <p>
        Deal 8 cards to each person. Everyone secretly chooses 5 that they like.
        Shuffle all the cards people chose into one deck, which will be used by
        both teams for the entire game. Put the other cards back in the box.
      </p>
      <p>
        You want to aim for using around 40-50 cards in the deck, so deal fewer
        and choose fewer playing with a big group, and deal more and choose more
        with a small group.
      </p>
      <p>
        The team with the best story about meeting someone famous goes first. Or
        totally random. Up to you.
      </p>
      <h2>HOW TO PLAY</h2>
      <p>
        A person from the starting team has 60 seconds to get their team to
        guess as many names as possible from the deck by giving clues about the
        person’s identity, (If you’re playing with more than 10 people, 30—45
        seconds is probably better) There’s no limit to the number of guesses.
      </p>
      <p>Skipping is allowed and highly encouraged in all rounds.</p>
      <p>
        Teams keep the cards they guessed correctly for scoring, Reshuffle
        skipped cards into the deck after each turn.
      </p>
      <p>
        Teams take turns giving clues, Each player should take a turn giving
        clues before any teammates repeat, 60 in clockwise order or feel free to
        use some other system.
      </p>
      <p>
        A round ends when all cards from the deck have been guessed correctly.
        When that happens, teams add the point values from each card they
        correctly guessed, Write those numbers down somewhere, then shuffle all
        the cards back together into one deck. The team with the lowest score
        begins the next round.
      </p>
      <h2>RULES FOR EACH ROUND</h2>
      <p>
        Monikers has 3 rounds. Each has a restriction on how players are allowed
        to give clues:
      </p>
      <p>
        ROUND 1 You can use any words, sounds, or gestures except the name
        itself, including the clue text on the card, If you say any part of the
        name, you have to skip that card this turn.
      </p>
      <p>
        ROUND 2 Use only one word, which can be anything except the name itself,
        You can repeat that word as many times as you like, but no sounds or
        gestures.
      </p>
      <p>ROUND 3 Just charades. No words. Sound effects are OK.</p>
      <h2>ENDING THE GAME</h2>
      <p>
        The team with the highest total score after 3 rounds wins. But feel free
        not to keep score at all. It’s fun to play competitively, but not
        necessary with the right group.
      </p>
    </div>;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({});

Instructions.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Instructions);
