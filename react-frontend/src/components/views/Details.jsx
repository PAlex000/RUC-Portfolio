import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById, fetchSimilarMovies } from "../../redux/actions/MovieActions";

const Details = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.moviesReducer);
  const [similarMoviesVisible, setSimilarMoviesVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchMovieById());
  }, [dispatch]);

  const handleSeeSimilarMovies = () => {
    dispatch(fetchSimilarMovies(movies.id)); // Assuming movies.id is the unique identifier
    setSimilarMoviesVisible(true);
  };

  console.log("Movies:", movies);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies) return <div>No movie available</div>;

  const { titleid, description, type, endYear, isAdult, poster, rating, startYear } = movies;

  const movieGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridGap: '20px',
  };

  const movieItemStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const moviePosterStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  return (
    <CustomContainer fluid>
      <div style={{ maxWidth: "85%", margin: "0 auto" }}>
        <Row className="justify-content-between align-items-start">
          <Row
            style={{ marginLeft: "60px" }}
            xs={12}
            md={3}
            lg={3}
            className="mb-4 d-none d-md-block"
          >
            <Dropdowns className="ml-4" />
          </Row>
          {}
        </Row>
      </div>
    </CustomContainer>
  );
};

export default Details;


