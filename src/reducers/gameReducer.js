export const teamNames = (state = [], action) => {
  switch (action.type) {
    case 'TEAM_NAMES':
      return [...state, action.teamName];
    default:
      return state;
  }
};

export const numPlayers = (state = -1, action) => {
  switch (action.type) {
    case 'NUM_OF_PLAYERS':
      return action.number;
    default:
      return state;
  }
};
