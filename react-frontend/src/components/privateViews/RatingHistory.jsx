import { Container, Row } from "react-bootstrap";
import RatingCard from "../common/RatingCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRatingHistory } from "../../redux/actions/RatingActions";

const backgroundContainer = {
  backgroundColor: "#000",
};
const RatingHistory = () => {
  const dispatch = useDispatch();
  const { ratings, ratedMovies, loading, error } = useSelector((state) => {
    return state.ratingsReducer;
  });

  useEffect(() => {
    dispatch(fetchRatingHistory(localStorage.getItem("userId")));
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!ratings) return <div>No ratings available</div>;
  return (
    <Container className="px-5" fluid style={backgroundContainer}>
      {ratedMovies.map((rating) => (
        <Row key={rating.titleid}>
          <RatingCard
            title={rating.titleid}
            grade={rating.grade}
            reviewText={rating.reviewText}
            movieRating={rating.rating}
            rateDate={rating.rateDate}
            image={rating.poster}
          />
        </Row>
      ))}
    </Container>
  );
};

export default RatingHistory;
