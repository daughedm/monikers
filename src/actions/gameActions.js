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
