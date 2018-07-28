export const addTeamNames = teamName => ({
  type: 'ADD_TEAM_NAME',
  teamName
});

export const clearTeamNames = () => ({
  type: 'CLEAR_TEAM_NAMES'
});

export const clearCurrentTeam = () => ({
  type: 'CLEAR_CURRENT_TEAM'
});

export const currentTeam = currentTeam => ({
  type: 'CURRENT_TEAM',
  currentTeam
});

export const currentRound = roundNumber => ({
  type: 'CURRENT_ROUND',
  roundNumber
});

export const clearCurrentRound = () => ({
  type: 'CLEAR_CURRENT_ROUND'
});

export const teamOneScore = points => ({
  type: 'TEAM_ONE_SCORE',
  points
});

export const teamTwoScore = points => ({
  type: 'TEAM_TWO_SCORE',
  points
});

export const updateTeamTimer = teamTimer => ({
  type: 'UPDATE_TEAM_TIMER',
  teamTimer
});

export const clearScore = () => ({
  type: 'CLEAR_SCORE'
});
