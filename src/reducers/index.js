import { combineReducers } from 'redux';
import {
  teamNames,
  numPlayers,
  cards,
  currentTeam,
  currentRound,
  teamScores
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  cards: cards,
  discarded: cards,
  currTeam: currentTeam,
  currRound: currentRound,
  teamOneScore: teamScores,
  teamTwoScores: teamScores
});

export default rootReducer;
