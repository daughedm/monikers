import {
  addTeamNames,
  currentTeam,
  currentRound,
  teamOneScore,
  teamTwoScore,
  updateTeamTimer
} from './gameActions.js';

describe('Game Actions', () => {
  describe('addTeamNames', () => {
    it('has a type of TEAM_NAMES', () => {
      const teamName = ['team one', 'team two'];

      const actual = addTeamNames(teamName);

      expect(actual).toEqual({
        type: 'ADD_TEAM_NAME',
        teamName
      });
    });
  });

  describe('currentTeam', () => {
    it('has a type of CURRENT_TEAM', () => {
      const teamName = 'team one';

      const actual = currentTeam(teamName);

      expect(actual).toEqual({
        type: 'CURRENT_TEAM',
        currentTeam: teamName
      });
    });
  });

  describe('currentRound', () => {
    it('has a type of CURRENT_ROUND', () => {
      const roundNumber = 2;

      const actual = currentRound(roundNumber);

      expect(actual).toEqual({
        type: 'CURRENT_ROUND',
        roundNumber
      });
    });
  });

  describe('teamOneScore', () => {
    it('has a type of TEAM_ONE_SCORE', () => {
      const points = 33;

      const actual = teamOneScore(points);

      expect(actual).toEqual({
        type: 'TEAM_ONE_SCORE',
        points
      });
    });
  });

  describe('teamTwoScore', () => {
    it('has a type of TEAM_TWO_SCORE', () => {
      const points = 70;

      const actual = teamTwoScore(points);

      expect(actual).toEqual({
        type: 'TEAM_TWO_SCORE',
        points
      });
    });
  });

  describe('updateTeamTimer', () => {
    it('has a type of UPDATE_TEAM_TIMER', () => {
      const teamTimer = 'stopped';

      const actual = updateTeamTimer(teamTimer);

      expect(actual).toEqual({
        type: 'UPDATE_TEAM_TIMER',
        teamTimer
      });
    });
  });
});
