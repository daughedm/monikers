const intialState = [];

export const teamNames = (state = intialState, action) => {
  switch (action.type) {
    case 'TEAM_NAMES':
      return [...state, action.teamName];
    default:
      return state;
  }
};
