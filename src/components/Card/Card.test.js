import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from './Card';
import * as mockData from '../../__mocks__/mockData';

describe('Card', () => {
  let card;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      activeCards: mockData.activeCards
    };

    card = shallow(<Card {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it('matches the snapshot if point value is 1', () => {
    mockProps.activeCards.pointValue = 1;
    card = shallow(<Card {...mockProps} />);
    expect(card).toMatchSnapshot();
  });

  it('matches the snapshot if point value is 2', () => {
    mockProps.activeCards[0].pointValue = 2;
    card = shallow(<Card {...mockProps} />);
    expect(card).toMatchSnapshot();
  });

  it('matches the snapshot if point value is 3', () => {
    mockProps.activeCards.pointValue = 3;
    card = shallow(<Card {...mockProps} />);
    expect(card).toMatchSnapshot();
  });

  it('matches the snapshot if point value is 4', () => {
    mockProps.activeCards.pointValue = 4;
    card = shallow(<Card {...mockProps} />);
    expect(card).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('maps state properties to props', () => {
      const mockState = {
        activeCards: mockData.activeCards
      };
      const expected = {
        activeCards: mockData.activeCards
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
