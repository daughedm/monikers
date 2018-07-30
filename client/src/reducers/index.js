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

const appReducer = combineReducers({
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

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
