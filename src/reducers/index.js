import { combineReducers } from 'redux';
import {
  teamNames,
  numPlayers,
  cards,
  discardedCards
} from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  cards: cards,
  discarded: discardedCards
});

export default rootReducer;
