/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Play, mapStateToProps, mapDispatchToProps } from './Play';
import * as actions from '../../actions/index';
import * as mockData from '../../__mocks__/mockData';

describe('play', () => {
  let mockProps;
  let play;

  beforeEach(() => {
    mockProps = {
      activeCards: mockData.activeCards,
      discardPile: mockData.discardedCards,
      currTeam: 'team1',
      teamNames: ['team1', 'team2'],
      teamTimer: 'stopped',
      twoScore: 1,
      oneScore: 0,
      currRound: 1,
      updateActiveCards: jest.fn(),
      discardedCards: jest.fn(),
      addCard: jest.fn(),
      teamOneScore: jest.fn(),
      teamTwoScore: jest.fn(),
      currentTeam: jest.fn(),
      updateTeamTimer: jest.fn(),
      currentRound: jest.fn()
    };
    play = shallow(<Play {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(play).toMatchSnapshot();
  });

  it('matches the snapshot if currTeam !== teamNames[0]', () => {
    mockProps.currTeam = 'team2';
    play = shallow(<Play {...mockProps} />);

    expect(play).toMatchSnapshot();
  });

  it('matches the snapshot if activeCards.length === 0 && currRound <= 3', () => {
    mockProps.currTeam = 'team2';
    mockProps.activeCards = [];
    play = shallow(<Play {...mockProps} />);

    expect(play).toMatchSnapshot();
  });

  it('matches the snapshot if teamTimer === pregame', () => {
    mockProps.teamTimer = 'pregame';
    play = shallow(<Play {...mockProps} />);

    expect(play).toMatchSnapshot();
  });

  it('matches the snapshot if teamTimer === stopped && currRound <= 3', () => {
    mockProps.teamTimer = 'stopped';
    play = shallow(<Play {...mockProps} />);

    expect(play).toMatchSnapshot();
  });

  it('matches the snapshot if currRound === 4', () => {
    mockProps.currRound = 4;
    play = shallow(<Play {...mockProps} />);

    expect(play).toMatchSnapshot();
  });

  describe('handleGotIt', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      play.instance().handleGotIt(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls discardedCards', () => {
      const mockEvent = { preventDefault: jest.fn() };

      play.instance().handleGotIt(mockEvent);

      expect(mockProps.discardedCards).toHaveBeenCalledTimes(1);
      expect(mockProps.discardedCards).toHaveBeenCalledWith(
        mockProps.activeCards[0]
      );
    });

    it('calls updateActiveCards', () => {
      const mockEvent = { preventDefault: jest.fn() };

      play.instance().handleGotIt(mockEvent);

      expect(mockProps.updateActiveCards).toHaveBeenCalledTimes(1);
      expect(mockProps.updateActiveCards).toHaveBeenCalledWith([]);
    });

    it('calls updateScore', () => {
      const mockEvent = { preventDefault: jest.fn() };
      const updateScore = (play.instance().updateScore = jest.fn());
      const expected = [];

      play.instance().handleGotIt(mockEvent);

      expect(updateScore).toHaveBeenCalledTimes(1);
      expect(updateScore).toHaveBeenCalledWith(...expected);
    });

    it('calls updateRound if activeCards.length === 1', async () => {
      const mockEvent = { preventDefault: jest.fn() };
      const updateRound = (play.instance().updateRound = jest.fn());

      await play.instance().handleGotIt(mockEvent);

      expect(updateRound).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleSkipped', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      play.instance().handleSkipped(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls updateActiveCards', () => {
      const mockEvent = { preventDefault: jest.fn() };

      play.instance().handleSkipped(mockEvent);

      expect(mockProps.updateActiveCards).toHaveBeenCalledTimes(1);
      expect(mockProps.updateActiveCards).toHaveBeenCalledWith([]);
    });

    it('calls addCard', () => {
      const mockEvent = { preventDefault: jest.fn() };

      play.instance().handleSkipped(mockEvent);

      expect(mockProps.addCard).toHaveBeenCalledTimes(1);
      expect(mockProps.addCard).toHaveBeenCalledWith(mockData.activeCards[0]);
    });
  });

  describe('countDown', () => {
    it('calls setInterval', async () => {
      jest.useFakeTimers();

      await play.instance().countDown();

      expect(setInterval).toHaveBeenCalledTimes(1);
    });

    it.skip('calls updateTeamTimer if count === 0', async () => {
      jest.useFakeTimers();
      jest.runAllTimers();

      await play.instance().countDown();

      expect(mockProps.updateTeamTimer).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateRound', () => {
    it('calls currentRound', () => {
      play.instance().updateRound();

      expect(mockProps.currentRound).toHaveBeenCalledTimes(1);
      expect(mockProps.currentRound).toHaveBeenCalledWith(1);
    });

    it('calls currentRound', () => {
      play.instance().updateRound();

      expect(mockProps.updateTeamTimer).toHaveBeenCalledTimes(1);
      expect(mockProps.updateTeamTimer).toHaveBeenCalledWith('stopped');
    });

    it('calls clearInterval', () => {
      play.instance().updateRound();

      expect(clearInterval).toHaveBeenCalled();
    });

    it('calls clearInterval', () => {
      play.instance().updateRound();

      expect(mockProps.currentTeam).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        currRound: mockProps.currRound,
        currTeam: mockProps.currTeam,
        teamNames: mockProps.teamNames,
        activeCards: mockProps.activeCards,
        discardPile: mockProps.discardPile,
        teamOneScore: mockProps.oneScore,
        teamTwoScore: mockProps.twoScore,
        teamTimer: mockProps.teamTimer
      };
      const expected = {
        currRound: mockProps.currRound,
        currTeam: mockProps.currTeam,
        teamNames: mockProps.teamNames,
        activeCards: mockProps.activeCards,
        discardPile: mockProps.discardPile,
        oneScore: mockProps.oneScore,
        twoScore: mockProps.twoScore,
        teamTimer: mockProps.teamTimer
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct params on updateActiveCards', () => {
      const mockDispatch = jest.fn();
      const cards = [];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.updateActiveCards(cards);
      mappedProps.updateActiveCards(cards);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on discardedCards', () => {
      const mockDispatch = jest.fn();
      const card = [];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.discardedCards(card);
      mappedProps.discardedCards(card);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on addCard', () => {
      const mockDispatch = jest.fn();
      const card = [];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.addCard(card);
      mappedProps.addCard(card);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on teamOneScore', () => {
      const mockDispatch = jest.fn();
      const points = 1;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.teamOneScore(points);
      mappedProps.teamOneScore(points);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on teamTwoScore', () => {
      const mockDispatch = jest.fn();
      const points = 1;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.teamTwoScore(points);
      mappedProps.teamTwoScore(points);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on currentTeam', () => {
      const mockDispatch = jest.fn();
      const team = 'team1';
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.currentTeam(team);
      mappedProps.currentTeam(team);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on updateTeamTimer', () => {
      const mockDispatch = jest.fn();
      const timer = 'stopped';
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.updateTeamTimer(timer);
      mappedProps.updateTeamTimer(timer);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on currentRound', () => {
      const mockDispatch = jest.fn();
      const roundNumber = 1;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.currentRound(roundNumber);
      mappedProps.currentRound(roundNumber);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
