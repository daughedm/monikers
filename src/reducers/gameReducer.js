export const teamNames = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TEAM_NAME':
    return [...state, action.teamName];
  default:
    return state;
  }
};

export const numCards = (state = -1, action) => {
  switch (action.type) {
  case 'NUM_OF_CARDS':
    return action.number;
  default:
    return state;
  }
};

export const activeCards = (state = [], action) => {
  switch (action.type) {
  case 'ADD_CARD':
    return [...state, action.card];
  case 'UPDATE_ACTIVE_CARDS':
    return [...action.cards];
  default:
    return state;
  }
};

export const discardedCards = (state = [], action) => {
  switch (action.type) {
  case 'DISCARDED_CARDS':
    return [...state, action.card];
  case 'CLEAR_DISCARDED_CARDS':
    return [];
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

export const currentRound = (state = 1, action) => {
  switch (action.type) {
  case 'CURRENT_ROUND':
    return state + action.roundNumber;
  default:
    return state;
  }
};

export const teamOneScore = (state = 0, action) => {
  switch (action.type) {
  case 'TEAM_ONE_SCORE':
    return state + action.points;
  default:
    return state;
  }
};

export const teamTwoScore = (state = 0, action) => {
  switch (action.type) {
  case 'TEAM_TWO_SCORE':
    return state + action.points;
  default:
    return state;
  }
};

export const teamTimer = (state = 'pregame', action) => {
  switch (action.type) {
  case 'UPDATE_TEAM_TIMER':
    return action.teamTimer;
  default:
    return state;
  }
};
