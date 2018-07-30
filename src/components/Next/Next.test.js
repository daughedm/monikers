import React from 'react';
import { shallow } from 'enzyme';
import { Next, mapStateToProps, mapDispatchToProps } from './Next';
import * as mockData from '../../__mocks__/mockData';
import * as actions from '../../actions/';

describe('next', () => {
  let next;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      currRound: 1,
      currTeam: 'team1',
      teamNames: ['team1', 'team2'],
      activeCards: mockData.activeCards,
      updateTeamTimer: jest.fn(),
      currentTeam: jest.fn(),
      countDown: jest.fn()
    };
    next = shallow(<Next {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(next).toMatchSnapshot();
  });

  it('matches the snapshot if currTeam !== teamNames[0] ', () => {
    mockProps.currTeam = 'team2';
    next = shallow(<Next {...mockProps} />);

    expect(next).toMatchSnapshot();
  });

  describe('startTimer', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      next.instance().startTimer(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls updateTeamTimer with correct params', () => {
      const mockEvent = { preventDefault: jest.fn() };
      const mockTimer = 'counting';

      next.instance().startTimer(mockEvent);

      expect(mockProps.updateTeamTimer).toHaveBeenCalledTimes(1);
      expect(mockProps.updateTeamTimer).toHaveBeenCalledWith(mockTimer);
    });

    it('calls countDown if there are activeCards', () => {
      const mockEvent = { preventDefault: jest.fn() };

      next.instance().startTimer(mockEvent);

      expect(mockProps.countDown).toHaveBeenCalledTimes(1);
    });

    it('does not call countDown if there are no activeCards', () => {
      const mockEvent = { preventDefault: jest.fn() };
      mockProps.activeCards = [];
      next = shallow(<Next {...mockProps} />);

      next.instance().startTimer(mockEvent);

      expect(mockProps.countDown).not.toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        currRound: 1,
        currTeam: '',
        teamNames: [],
        activeCards: []
      };
      const expected = {
        currRound: 1,
        currTeam: '',
        teamNames: [],
        activeCards: []
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
      expect();
    });

    it('calls dispatch with the correct params on currentTeam', () => {
      const mockDispatch = jest.fn();
      const team = ['team1', 'team2'];
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.currentTeam(team);
      mappedProps.currentTeam(team);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
