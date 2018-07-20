import { combineReducers } from 'redux';
import { teamNames, numPlayers } from './gameReducer';
import { cards } from './cardReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  cards: cards
});

export default rootReducer;
