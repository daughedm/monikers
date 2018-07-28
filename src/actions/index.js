import {
  getTeamNames,
  numOfPlayers,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore,
  updateTeamTimer,
  addTeamNames,
  resetStore
} from './gameActions/gameActions';

import {
  updateActiveCards,
  discardedCards,
  addCard,
  numOfCards,
  clearDiscardedCards
} from './cardActions/cardActions';

export {
  getTeamNames,
  numOfPlayers,
  addCard,
  discardedCards,
  clearDiscardedCards,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore,
  updateActiveCards,
  updateTeamTimer,
  numOfCards,
  addTeamNames,
  resetStore
};
