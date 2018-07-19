import { teamNames } from './gameReducer';

describe("Game reducers", () => {
  describe("teamNames", () => {
    it("should return default state when no action passed", () => {
      expect(teamNames([], {})).toEqual([]);
    });

    it("should return an array of team names", () => {
      const expected = ['team one']

      const mockAction = {
        type: 'TEAM_NAMES',
        teamName: 'team one'
      };

      expect(teamNames([], mockAction)).toEqual(expected)
    });
  });
});
