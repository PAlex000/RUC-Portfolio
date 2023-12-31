const fetchData = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const getMovies = async () => {
  return await fetchData("group10/api/endpoint/movies");
};
