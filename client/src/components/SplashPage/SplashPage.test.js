/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import SplashPage from './splashPage';

describe('splashPage', () => {
  let splashPage;

  beforeEach(() => {
    splashPage = shallow(<SplashPage />);
  });

  it('matches the snapshot', () => {
    expect(splashPage).toMatchSnapshot();
  });
});
