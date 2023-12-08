//potentially not needed anymore as the thunk actions now seems responsible for the api calls.
export const getMovies = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};
