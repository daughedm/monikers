export const getTeamNames = teamName => ({
  type: 'TEAM_NAMES',
  teamName
});

export const numOfCards = number => ({
  type: 'NUM_OF_CARDS',
  number
});

export const addCard = card => ({
  type: 'ADD_CARD',
  card
});

export const updateActiveCards = cards => ({
  type: 'UPDATE_ACTIVE_CARDS',
  cards
})

export const discardedCards = card => ({
  type: 'DISCARDED_CARDS',
  card
});

export const currentTeam = currentTeam => ({
  type: 'CURRENT_TEAM',
  currentTeam
});

export const currentRound = roundNumber => ({
  type: 'CURRENT_ROUND',
  roundNumber
});

export const teamOneScore = points => ({
  type: 'TEAM_ONE_SCORE',
  points
});

export const teamTwoScore = points => ({
  type: 'TEAM_TWO_SCORE',
  points
});

export const updateTeamTimer = timer => ({
  type: 'UPDATE_TEAM_TIMER',
  timer
});
