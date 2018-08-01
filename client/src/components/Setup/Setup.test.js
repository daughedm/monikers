/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Setup, mapStateToProps, mapDispatchToProps } from './Setup';
import indexedDB from '../../indexedBD';
jest.mock('../../indexedBD.js');
import * as mockData from '../../__mocks__/mockData';
import * as actions from '../../actions';

describe('setup', () => {
  let setup;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      teamNames: ['team1', 'team2'],
      numCards: 2,
      getTeamNames: jest.fn(),
      numOfCards: jest.fn(),
      currentTeam: jest.fn(),
      addCard: jest.fn(),
      addTeamNames: jest.fn(),
      history: { push: jest.fn() }
    };
    setup = shallow(<Setup {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(setup).toMatchSnapshot();
  });

  describe('getActiveCards', () => {
    it.skip('calls addCard', async () => {
      const indexedDB = {
        allCards: {
          count: jest.fn(),
          toArray: jest.fn().mockImplementation(() => mockData.cards)
        }
      };

      setup.instance().getActiveCards(mockProps.numCards);

      expect(mockProps.addCard).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleChange', () => {
    it('sets state with event target name & value', () => {
      const mockEvent = { target: { name: 'teamOne', value: 'Red' } };
      const expected = { teamOne: 'Red' };

      setup.instance().handleChange(mockEvent);

      expect(setup.state()).toEqual(expect.objectContaining(expected));
    });
  });

  describe('handleSubmit', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      setup.instance().handleSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls storeGameInfo if teamOne && teamTwo && numCards >= 30', () => {
      setup.setState({ teamOne: 'Red', teamTwo: 'Blue', numCards: 30 });
      const mockEvent = { preventDefault: jest.fn() };
      const storeGameInfo = (setup.instance().storeGameInfo = jest.fn());
      setup.instance().getActiveCards = jest.fn();

      setup.instance().handleSubmit(mockEvent);

      expect(storeGameInfo).toHaveBeenCalledTimes(1);
      expect(storeGameInfo).toHaveBeenCalledWith('Red', 'Blue', 30);
    });

    it('calls getActiveCards if teamOne && teamTwo && numCards >= 30', async () => {
      setup.setState({ teamOne: 'Red', teamTwo: 'Blue', numCards: 30 });
      const mockEvent = { preventDefault: jest.fn() };
      setup.instance().storeGameInfo = jest.fn();
      const getActiveCards = (setup.instance().getActiveCards = jest.fn());

      await setup.instance().handleSubmit(mockEvent);

      expect(getActiveCards).toHaveBeenCalledTimes(1);
      expect(getActiveCards).toHaveBeenCalledWith(30);
    });

    it('calls history.push if teamOne && teamTwo && numCards >= 30', async () => {
      setup.setState({ teamOne: 'Red', teamTwo: 'Blue', numCards: 30 });
      const mockEvent = { preventDefault: jest.fn() };
      setup.instance().storeGameInfo = jest.fn();
      setup.instance().getActiveCards = jest.fn();

      await setup.instance().handleSubmit(mockEvent);

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
      expect(mockProps.history.push).toHaveBeenCalledWith('/play');
    });
  });

  describe('storeGameInfo', () => {
    it('calls addTeamNames twice', () => {
      const teamOne = 'team1';
      const teamTwo = 'team2';
      const numCards = 30;

      setup.instance().storeGameInfo(teamOne, teamTwo, numCards);

      expect(mockProps.addTeamNames).toHaveBeenCalledTimes(2);
      expect(mockProps.addTeamNames).toHaveBeenCalledWith(teamOne);
      expect(mockProps.addTeamNames).toHaveBeenCalledWith(teamTwo);
    });

    it('calls numOfCards', () => {
      const teamOne = 'team1';
      const teamTwo = 'team2';
      const numCards = 30;

      setup.instance().storeGameInfo(teamOne, teamTwo, numCards);

      expect(mockProps.numOfCards).toHaveBeenCalledTimes(1);
      expect(mockProps.numOfCards).toHaveBeenCalledWith(30);
    });

    it('calls numOfCards', () => {
      const teamOne = 'team1';
      const teamTwo = 'team2';
      const numCards = 30;

      setup.instance().storeGameInfo(teamOne, teamTwo, numCards);

      expect(mockProps.currentTeam).toHaveBeenCalledTimes(1);
      expect(mockProps.currentTeam).toHaveBeenCalledWith(teamOne);
    });
  });

  describe('handleBackButton', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      setup.instance().handleBackButton(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls history.push', () => {
      const mockEvent = { preventDefault: jest.fn() };

      setup.instance().handleBackButton(mockEvent);

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
      expect(mockProps.history.push).toHaveBeenCalledWith('/');
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        teamNames: actions.teamNames,
        numCards: actions.numCards
      };
      const expected = {
        teamNames: actions.teamNames,
        numCards: actions.numCards
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct params on numOfCards', () => {
      const mockDispatch = jest.fn();
      const number = 30;
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.numOfCards(number);
      mappedProps.numOfCards(number);
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

    it('calls dispatch with the correct params on addCard', () => {
      const mockDispatch = jest.fn();
      const card = {};
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.addCard(card);
      mappedProps.addCard(card);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('calls dispatch with the correct params on addTeamNames', () => {
      const mockDispatch = jest.fn();
      const teamName = 'team1';
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.addTeamNames(teamName);
      mappedProps.addTeamNames(teamName);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
