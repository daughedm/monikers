/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import * as api from '../../api/api';
jest.mock('../../api/api.js');

describe('app', () => {
  let app;
  let mockProps;

  beforeEach(() => {
    mockProps = {};
    app = shallow(<App {...mockProps} />, { disableLifecycleMethods: true });
  });

  it('matches the snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls cardsPGtoIDB', async () => {
      const cardsPGtoIDB = (app.instance().cardsPGtoIDB = jest.fn());

      await app.instance().componentDidMount();

      expect(cardsPGtoIDB).toHaveBeenCalledTimes(1);
    });
  });

  describe('cardsPGtoIDB', () => {
    it('calls getCards if navigator.onLine is true', async () => {
      await app.instance().cardsPGtoIDB();

      expect(api.getCards).toHaveBeenCalledTimes(1);
    });

    it.skip('calls indexedDB', async () => {
      const indexedDB = { allCards: { clear: jest.fn() } };

      await app.instance().cardsPGtoIDB();

      expect(indexedDB.allCards.clear).toHaveBeenCalledTimes(1);

      expect();
    });
  });
});
