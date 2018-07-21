const getTeamNames = teamName => ({
  type: 'TEAM_NAMES',
  teamName
});

const numOfPlayers = number => ({
  type: 'NUM_OF_PLAYERS',
  number
});

export {
  getTeamNames, numOfPlayers
};
