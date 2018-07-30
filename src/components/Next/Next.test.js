import React from 'react';
import { shallow } from 'enzyme';
import { Next, mapStateToProps, mapDispatchToProps } from './Next';

describe('next', () => {
  let next;
  let mockProps;

  beforeEach(() => {
    mockProps = {};
    next = shallow(<Next {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(next).toMatchSnapshot();
  });
});
