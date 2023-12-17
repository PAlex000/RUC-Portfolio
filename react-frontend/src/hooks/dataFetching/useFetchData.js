// useFetchData.js
import { useEffect, useState } from "react";
import { getMovies } from "../../services/dataService";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    getMovies()
      .then((movies) => {
        setData(movies);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, data, error };
};

export default useFetchData;
