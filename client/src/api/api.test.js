/* eslint-disable max-len */

import * as fetch from './fetch';
import * as api from './api';

describe('getCards', () => {
  it('calls makeFetch', async () => {
    const simulatedResponse = { data: 'simulated response' };
    const mock = jest.spyOn(fetch, 'makeFetch');

    mock.mockReturnValue(Promise.resolve(simulatedResponse));
    const result = await api.getCards();

    expect(result).toEqual(simulatedResponse);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('/api/v1/cards');

    mock.mockRestore();
  });
});
