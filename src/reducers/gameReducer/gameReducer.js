export const teamNames = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TEAM_NAME':
    return [...state, action.teamName];
  case 'CLEAR_TEAM_NAMES':
    return [];
  default:
    return state;
  }
};

export const currentTeam = (state = '', action) => {
  switch (action.type) {
  case 'CURRENT_TEAM':
    return action.currentTeam;
  case 'CLEAR_CURRENT_TEAM':
    return '';
  default:
    return state;
  }
};

export const currentRound = (state = 1, action) => {
  switch (action.type) {
  case 'CURRENT_ROUND':
    return state + action.roundNumber;
  case 'CLEAR_CURRENT_ROUND':
    return 1;
  default:
    return state;
  }
};

export const teamOneScore = (state = 0, action) => {
  switch (action.type) {
  case 'TEAM_ONE_SCORE':
    return state + action.points;
  case 'CLEAR_SCORE':
    return 0;
  default:
    return state;
  }
};

export const teamTwoScore = (state = 0, action) => {
  switch (action.type) {
  case 'TEAM_TWO_SCORE':
    return state + action.points;
  case 'CLEAR_SCORE':
    return 0;
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
