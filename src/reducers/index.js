import { combineReducers } from 'redux';
import { teamNames, numPlayers } from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numPlayers: numPlayers
});

export default rootReducer;
