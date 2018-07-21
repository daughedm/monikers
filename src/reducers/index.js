import { combineReducers } from 'redux';
import {
  teamNames,
  numPlayers,
  activeCards,
  discardedCards,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  activeCards: activeCards,
  discardedCards: discardedCards,
  currTeam: currentTeam,
  currRound: currentRound,
  teamOneScore: teamOneScore,
  teamTwoScore: teamTwoScore
});

export default rootReducer;
