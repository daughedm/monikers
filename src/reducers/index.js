import { combineReducers } from 'redux';
import {
  teamNames,
  numPlayers,
  cards,
  discardedCards,
  currentTeam
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  cards: cards,
  discarded: discardedCards,
  currTeam: currentTeam
});

export default rootReducer;
