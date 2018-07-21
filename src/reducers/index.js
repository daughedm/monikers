import { combineReducers } from 'redux';
import { teamNames, numPlayers, cards } from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers,
  cards: cards
});

export default rootReducer;
