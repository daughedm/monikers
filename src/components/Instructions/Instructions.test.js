import React from 'react';
import { shallow } from 'enzyme';
import Instructions from './instructions';

describe('Instructions', () => {
  let instructions;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      history: { push: jest.fn() }
    };
    instructions = shallow(<Instructions {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(instructions).toMatchSnapshot();
  });

  describe('handleBackButton', () => {
    it('is called on click of back-button', () => {
      const handleBackButton = jest.fn();

      instructions.find('.back-button').simulate('click', {
        preventDefault: jest.fn()
      });

      expect(handleBackButton).toHaveBeenCalledTimes(1);
    });
  });
});
