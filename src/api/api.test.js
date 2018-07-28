import { makeFetch, getCards } from './api';
// jest.mock('./api', () => {
//   return {
//     makeFetch: jest.fn(data => {
//       new Promise((resolve, reject) => {
//         if (data) {
//           resolve(data);
//         } else {
//           reject();
//         }
//       });
//     })
//   };
// });

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

    await makeFetch(url, options);

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
    await expect(makeFetch()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(makeFetch()).rejects.toEqual(expected);
  });
});

describe('getCards', () => {
  it.skip('calls makeFetch', async () => {
    await getCards();

    expect(makeFetch).toHaveBeenCalledTimes(1);
  });
});
