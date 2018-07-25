import { combineReducers } from 'redux';
import {
  teamNames,
  numCards,
  activeCards,
  discardedCards,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numCards: numCards,
  activeCards: activeCards,
  discardedCards: discardedCards,
  currTeam: currentTeam,
  currRound: currentRound,
  teamOneScore: teamOneScore,
  teamTwoScore: teamTwoScore
});

export default rootReducer;
