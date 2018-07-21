export const getTeamNames = teamName => ({
  type: 'TEAM_NAMES',
  teamName
});

export const numOfPlayers = number => ({
  type: 'NUM_OF_PLAYERS',
  number
});

export const addCards = cards => ({
  type: 'ADD_CARDS',
  cards
});

export const discardedCards = card => ({
  type: 'DISCARDED_CARDS',
  card
});

export const currentTeam = (currentTeam) => ({
  type: 'CURRENT_TEAM',
  currentTeam
});
