import { combineReducers } from 'redux';
import {
  teamNames,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore,
  teamTimer
} from './gameReducer/gameReducer';
import {
  numCards,
  activeCards,
  discardedCards
} from './cardReducer/cardReducer';

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
