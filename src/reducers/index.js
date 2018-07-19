import { combineReducers } from 'redux';
import { teamNames, numOfPlayers } from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames,
  numOfPlayers: numOfPlayers
});

export default rootReducer;
