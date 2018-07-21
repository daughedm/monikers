import {teamNames} from './gameActions.js';

describe('Game Actions', () => {
  describe('teamNames', () => {
    it('has a type of TEAM_NAMES', () => {
      const teamName = 'team one';

      const actual = teamNames(teamName);

      expect(actual).toEqual({
        type: 'TEAM_NAMES',
        teamName
      });
    });
  });
});
