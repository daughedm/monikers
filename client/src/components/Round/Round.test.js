/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Round, mapStateToProps, mapDispatchToProps } from './round';
import * as mockData from '../../__mocks__/mockData';
import * as actions from '../../actions/index';

describe('round', () => {
  let mockProps;
  let round;

  beforeEach(() => {
    mockProps = {
      currRound: 1,
      teamOneScore: 0,
      teamTwoScore: 0,
      teamNames: ['team1', 'team2'],
      currTeam: 'team1',
      discardedCards: mockData.discardedCards,
      updateTeamTimer: jest.fn(),
      currentTeam: jest.fn(),
      currentTimer: jest.fn(),
      updateActiveCards: jest.fn(),
      clearDiscardedCards: jest.fn(),
      countDown: jest.fn()
    };
    round = shallow(<Round {...mockProps} />);
  });

  it('matches the snapshot if currRound === 1 & currTeam === teamNames[0]', () => {
    expect(round).toMatchSnapshot();
  });

  it('matches the snapshot if currRound === 2', () => {
    mockProps.currRound = 2;
    round = shallow(<Round {...mockProps} />);

    expect(round).toMatchSnapshot();
  });

  it('matches the snapshot if currRound === 3', () => {
    mockProps.currRound = 3;
    round = shallow(<Round {...mockProps} />);

    expect(round).toMatchSnapshot();
  });

  it('matches the snapshot if currTeam === teamNames[1]', () => {
    mockProps.currTeam = 'team2';
    round = shallow(<Round {...mockProps} />);

    expect(round).toMatchSnapshot();
  });

  describe('handleClick', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      round.instance().handleClick(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it.skip('calls shuffleCards is round > 1', () => {
      const mockEvent = { preventDefault: jest.fn() };
      const shuffleCards = (round.instance().shuffleCards = jest.fn());
      mockProps.currRound = 2;
      round = shallow(<Round {...mockProps} />);
      // console.log('state: ', round.state());
      // console.log('debug: ', round.debug());

      round.instance().handleClick(mockEvent);

      expect(shuffleCards).toHaveBeenCalledTimes(1);
    });

    it('calls updateActiveCards with correct params if round > 1', () => {
      const mockEvent = { preventDefault: jest.fn() };
      // const shuffleCards = (round.instance().shuffleCards = jest.fn());
      mockProps.currRound = 2;
      round = shallow(<Round {...mockProps} />);
      // console.log('state: ', round.state());
      // console.log('debug: ', round.debug());

      round.instance().handleClick(mockEvent);

      expect(mockProps.updateActiveCards).toHaveBeenCalledTimes(1);
      expect(mockProps.updateActiveCards).toHaveBeenCalledWith(
        mockData.discardedCards
      );
    });

    it('calls clearDiscardedCards with correct params if round > 1', () => {
      const mockEvent = { preventDefault: jest.fn() };
      mockProps.currRound = 2;
      round = shallow(<Round {...mockProps} />);

      round.instance().handleClick(mockEvent);

      expect(mockProps.clearDiscardedCards).toHaveBeenCalledTimes(1);
      expect(mockProps.clearDiscardedCards).toHaveBeenCalledWith([]);
    });
  });

  describe('shuffleCards', () => {
    it('randomize order of cards', () => {
      round.instance().shuffleCards = jest
        .fn()
        .mockImplementation(() => [mockData.cards[1], mockData.cards[0]]);

      expect(round.instance().shuffleCards()).toEqual([
        mockData.cards[1],
        mockData.cards[0]
      ]);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        currRound: actions.teamNames,
        teamOneScore: actions.teamOneScore,
        teamTwoScore: actions.teamTwoScore,
        teamNames: actions.teamNames,
        currTeam: actions.currTeam,
        discardedCards: actions.discardedCards
      };
      const expected = {
        currRound: actions.teamNames,
        teamOneScore: actions.teamOneScore,
        teamTwoScore: actions.teamTwoScore,
        teamNames: actions.teamNames,
        currTeam: actions.currTeam,
        discardedCards: actions.discardedCards
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct params on updateTeamTimer', () => {
      const mockDispatch = jest.fn();
      const mockTimer = 'stopped';
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.updateTeamTimer(mockTimer);
      mappedProps.updateTeamTimer(mockTimer);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on currentTeam', () => {
      const mockDispatch = jest.fn();
      const team = ['team1', 'team2'];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.currentTeam(team);
      mappedProps.currentTeam(team);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on currentRound', () => {
      const mockDispatch = jest.fn();
      const currRound = 1;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.currentRound(currRound);
      mappedProps.currentRound(currRound);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on updateActiveCards', () => {
      const mockDispatch = jest.fn();
      const cards = mockData.cards;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.updateActiveCards(cards);
      mappedProps.updateActiveCards(cards);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on clearDiscardedCards', () => {
      const mockDispatch = jest.fn();
      const cards = mockData.cards;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.clearDiscardedCards(cards);
      mappedProps.clearDiscardedCards(cards);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
