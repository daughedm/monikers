export const makeFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);



//jgjh



    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Network request failed. (error: ${error.message})`);
  }
};
