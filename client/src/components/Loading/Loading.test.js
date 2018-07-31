/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import Loading from './loading';

describe('loading', () => {
  let loading;

  beforeEach(() => {
    loading = shallow(<Loading />);
  });

  it('matches the snapshot', () => {
    expect(loading).toMatchSnapshot();
  });
});
