import { combineReducers } from 'redux';
import {
  teamNames,
  numCards,
  activeCards,
  discardedCards,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore,
  teamTimer
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numCards: numCards,
  activeCards: activeCards,
  discardedCards: discardedCards,
  currTeam: currentTeam,
  currRound: currentRound,
  teamOneScore: teamOneScore,
  teamTwoScore: teamTwoScore,
  teamTimer: teamTimer
});

export default rootReducer;
