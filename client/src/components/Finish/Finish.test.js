/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import { Finish, mapStateToProps, mapDispatchToProps } from './Finish';
import * as actions from '../../actions/';
describe('finish', () => {
  let finish;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      history: { push: jest.fn() },
      teamNames: ['team1', 'team2'],
      teamOneScore: 1,
      teamTwoScore: 2,
      resetStore: jest.fn()
    };
    finish = shallow(<Finish {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(finish).toMatchSnapshot();
  });

  it('matches the snapshot if teamOneScore is higher', () => {
    mockProps.teamOneScore = 3;
    finish = shallow(<Finish {...mockProps} />);

    expect(finish).toMatchSnapshot();
  });

  describe('handleSubmit', () => {
    it('calls preventDefault', () => {
      const mockEvent = { preventDefault: jest.fn() };

      finish.instance().handleSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('calls resetStore', () => {
      const mockEvent = { preventDefault: jest.fn() };

      finish.instance().handleSubmit(mockEvent);

      expect(mockProps.resetStore).toHaveBeenCalledTimes(1);
    });

    it('calls history.push', () => {
      const mockEvent = { preventDefault: jest.fn() };

      finish.instance().handleSubmit(mockEvent);

      expect(mockProps.history.push).toHaveBeenCalledTimes(1);
    });
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        teamNames: actions.teamNames,
        teamOneScore: actions.teamOneScore,
        teamTwoScore: actions.teamTwoScore
      };
      const expected = {
        activeCards: actions.activeCards,
        teamOneScore: actions.teamOneScore,
        teamTwoScore: actions.teamTwoScore
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct params on resetStore', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = actions.resetStore();
      mappedProps.resetStore();
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
      expect();
    });
  });
});
