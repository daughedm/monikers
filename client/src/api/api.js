import { makeFetch } from './fetch';

export const getCards = async () => {
  const url = '/api/v1/cards';
  return await makeFetch(url);
};
