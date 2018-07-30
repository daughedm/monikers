import * as fetch from './fetch';
import * as api from './api';

describe('makeFetch', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ data: 'mock data' })
      })
    );
  });

  it('calls fetch with correct params', async () => {
    const url = 'www.example.com';
    const options = {};

    await fetch.makeFetch(url, options);

    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenLastCalledWith(url, {});
  });

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ data: 'mock data' })
      })
    );

    const expected = Error(`Network request failed. (error: 500)`);
    await expect(fetch.makeFetch()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(fetch.makeFetch()).rejects.toEqual(expected);
  });
});

describe('getCards', () => {
  it('calls makeFetch', async () => {
    const simulatedResponse = { data: 'simulated response' };
    const mock = jest.spyOn(fetch, 'makeFetch');

    mock.mockReturnValue(Promise.resolve(simulatedResponse));
    const result = await api.getCards();

    expect(result).toEqual(simulatedResponse);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('http://localhost:3001/api/v1/cards');

    mock.mockRestore();
  });
});
