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
    <div>
      <section className="bg-white dark:bg-gray-900 m-6 p-4">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
              src={poster}
            />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
              {type}
            </h2>

            <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
              Start/End year: {startYear} - {endYear}
            </p>

            <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
              Type: {type}
            </p>

            <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
              Rating: {rating}
            </p>

            <span className="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
              {description}
            </span>

            <button onClick={handleSeeSimilarMovies}>See similar Movies</button>

            <button>Bookmark</button>
            <button>Rate</button>
          </div>
        </div>
      </section>

      {similarMoviesVisible && (
        <div>
          <h2>List of Similar Movies</h2>
          <div style={movieGridStyle}>
            {movies.$values.map((movie) => (
              <div key={movie.id} style={movieItemStyle}>
                <img src={movie.poster} alt={`Poster for ${movie.id}`} style={moviePosterStyle} />
                <div className="movie-details">
                  <h3 className="movie-title">
                    {movie.akas && movie.akas.$values && movie.akas.$values[0] && movie.akas.$values[0].title}
                  </h3>
                  <p className="movie-description">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Details;


