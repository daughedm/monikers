import { teamNames, currentTeam, currentRound, teamOneScore, teamTwoScore, teamTimer } from './gameReducer';

describe('Game reducers', () => {
  describe('teamNames', () => {
    it('should return default state when no action passed', () => {
      expect(teamNames([], {})).toEqual([]);
    });

    it('should return an array of team names', () => {
      const expected = ['team one'];

      const mockAction = {
        type: 'ADD_TEAM_NAME',
        teamName: 'team one'
      };

      expect(teamNames([], mockAction)).toEqual(expected);
    });
  });

  describe("currentTeam", () => {
    it("should return default state when no action passed", () => {
      expect(currentTeam('', {})).toEqual('');
    });

    it("should return the current team", () => {
      const expected = 'team two';

      const mockAction = {
        type: 'CURRENT_TEAM',
        currentTeam: 'team two'
      };

      expect(currentTeam('', mockAction)).toEqual(expected);
    });
  });

  describe("currentRound", () => {
    it("should return default state when no action passed", () => {
      expect(currentRound(1, {})).toEqual(1);
    });

    it("should increase the current round number by one", () => {
      const expected = 3;

      const mockAction = {
        type: 'CURRENT_ROUND',
        roundNumber: 2
      };

      expect(currentRound(1, mockAction)).toEqual(expected);
    });
  });

  describe("teamOneScore", () => {
    it("should return default state when no action passed", () => {
      expect(teamOneScore(0, {})).toEqual(0);
    });

    it("should return team one's score", () => {
      const expected = 33;

      const mockAction = {
        type: 'TEAM_ONE_SCORE',
        points: 33
      };

      expect(teamOneScore(0, mockAction)).toEqual(expected);
    });
  });

  describe("teamTwoScore", () => {
    it("should return default state when no action passed", () => {
      expect(teamTwoScore(0, {})).toEqual(0);
    });

    it("should return team two's score", () => {
      const expected = 100;

      const mockAction = {
        type: 'TEAM_TWO_SCORE',
        points: 100
      };

      expect(teamTwoScore(0, mockAction)).toEqual(expected);
    });
  });

  describe("teamTimer", () => {
    it("should return default state when no action passed", () => {
      expect(teamTimer('pregame', {})).toEqual('pregame');
    });

    it("should return current round time", () => {
      const expected = 'counting';

      const mockAction = {
        type: 'UPDATE_TEAM_TIMER',
        teamTimer: 'counting'
      };

      expect(teamTimer('pregame', mockAction)).toEqual(expected);
    });
  });
});
