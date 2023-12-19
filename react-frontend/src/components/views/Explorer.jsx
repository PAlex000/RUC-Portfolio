import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMoviesByRating,
} from "../../redux/actions/MovieActions";
import CustomContainer from "../common/CustomContainer";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";
import "./../common/Button.scss";

const h2Style = {
  marginTop: "1em",
  color: "white",
  textAlign: "center",
};

const marginStyle = {
  marginTop: "14.9px",
};

const Explorer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 16;
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => {
    return state.moviesReducer;
  });

  const handleRefresh = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const handleRatingSelect = (ratingCategory) => {
    let minRating;
    let maxRating;
    if (ratingCategory === "high") {
      minRating = 7;
      maxRating = 10;
    } else if (ratingCategory === "low") {
      minRating = 1;
      maxRating = 3;
    }
    setCurrentPage(0);
    dispatch(fetchMoviesByRating(0, pageSize, minRating, maxRating));
  };

  useEffect(() => {
    dispatch(fetchMovies(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies) return <div>No movies available</div>;
  return (
    <CustomContainer fluid>
      <h2 style={h2Style}>
        Welcome to the Explorer Page! <br /> This is where we will ensure that
        you can find everything you will need! <br /> Scroll and find your movie
        choice!
      </h2>

      <div style={{ maxWidth: "85%", margin: "0 auto" }}>
        <Row className="justify-content-between align-items-start">
          <Row
            style={{ marginLeft: "60px" }}
            xs={12}
            md={3}
            lg={3}
            className="mb-4 d-none d-md-block"
          >
            <div className="d-flex align-items-center" style={{ gap: "10px" }}>
              <Dropdowns onRatingSelect={handleRatingSelect} />
              <div style={marginStyle}>
                <Button onClick={handleRefresh} className="blackBtn mt-2">
                  Refresh
                </Button>
              </div>
            </div>
          </Row>
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <Col
                key={movie.id}
                xs={12}
                sm={6}
                md={3}
                lg={3}
                className="d-flex justify-content-center mb-4"
              >
                <CardComp
                  titleId={movie.titleId}
                  title={
                    movie.akas.$values[0]
                      ? movie.akas.$values[0].title
                      : "Unknown title"
                  }
                  description={movie.description}
                  btnText="Learn More"
                  image={movie.poster}
                  rating={movie.rating}
                  dispatchMovie={dispatch}
                />
              </Col>
            ))
          ) : (
            <div>No movies to display</div>
          )}
        </Row>
      </div>
    </CustomContainer>
  );
};

export default Explorer;
