export const makeFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Network request failed. (error: ${error.message})`);
  }
};

export const getCards = async () => {
  const url = 'http://localhost:3001/api/v1/cards';
  return await makeFetch(url);
};
