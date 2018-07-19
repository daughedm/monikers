import { combineReducers } from 'redux';
import { teamNames } from './gameReducer';

const rootReducer = combineReducers({
  teamNames: teamNames
});

export default rootReducer;
