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

export const cards = (state = [], action) => {
  switch (action.type) {
  case 'ADD_CARDS':
    return action.cards;
  case 'DISCARDED_CARDS':
    return [...state, action.card];
  default:
    return state;
  }
};

export const currentTeam = (state = '', action) => {
  switch (action.type) {
  case 'CURRENT_TEAM':
    return action.currentTeam;
  default:
    return state;
  }
};

export const currentRound = (state = -1, action) => {
  switch (action.type) {
  case 'CURRENT_ROUND':
    return action.roundNumber;
  default:
    return state;
  }
};

export const teamScores = (state = -1, action) => {
  switch (action.type) {
  case 'TEAM_ONE_SCORE':
    return action.points;
  case 'TEAM_TWO_SCORE':
    return action.points;
  default:
    return state;
  }
};
