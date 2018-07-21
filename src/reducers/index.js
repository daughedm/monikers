import { combineReducers } from 'redux';
import {
  teamNames,
  numPlayers,
  cards,
  discardedCards,
  currentTeam,
  currentRound,
  teamScores
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  cards: cards,
  discarded: discardedCards,
  currTeam: currentTeam,
  currRound: currentRound,
  teamOneScore: teamScores,
  teamTwoScores: teamScores
});

export default rootReducer;
