import { makeFetch } from './fetch';

export const getCards = async () => {
  const url = 'http://localhost:3001/api/v1/cards';
  return await makeFetch(url);
};
