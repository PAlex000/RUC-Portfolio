import { Container, Row } from "react-bootstrap";
import RateHistory from "../common/RateHistory";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";

//Hard coded data as we create the skellet. useEffect with GET calls when we establish connection. Async/Await, fetch.
const ratingData = [
  {
    titleid: "The Departed",
    grade: 5,
    type: "R",
    year: "2006",
    reviewText: "Test review 1",
    rateDate: "2023-12-05",
    movieRating: 3.2,
    imageUrl: departed,
    titleRating: "Great movie",
    description: "ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
  {
    titleid: "Shawshank Redemption",
    grade: 7,
    type: "R",
    year: "1994",
    reviewText: "",
    rateDate: "2023-12-05",
    movieRating: 7.3,
    imageUrl: shawshank,
    titleRating: "Great movie",
    description: "ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
  {
    titleid: "The Departed",
    grade: 10,
    type: "R",
    year: "2006",
    reviewText: "Test review 10",
    rateDate: "2023-12-05",
    movieRating: 0.3,
    imageUrl: departed,
    titleRating: "Great movie",
    description: "ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
  {
    titleid: "Shawsank Redemption",
    grade: 1,
    type: "R",
    year: "1994",
    reviewText: "Test review 1",
    rateDate: "2023-12-03",
    movieRating: 10.3,
    imageUrl: shawshank,
    titleRating: "Great movie",
    description: "ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
  {
    titleid: "The Departed",
    grade: 6,
    type: "R",
    year: "2006",
    reviewText: "Test review 6",
    rateDate: "2023-12-01",
    movieRating: -3.2,
    imageUrl: departed,
    titleRating: "Great movie",
    description: "ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
];
const backgroundContainer = {
  backgroundColor: "#000",
};
const RatingHistory = () => {
  return (
    <Container className="px-5 d-flex flex-column" fluid style={backgroundContainer}>
      <h1 style={{textAlign: "center", color: "#FFF", margin: "2.5rem 0"}}>Your ratings</h1>
      {ratingData.map((rating) => (
        <Row key={rating.titleid} className="justify-content-center">
          <RateHistory
            title={rating.titleid}
            grade={rating.grade}
            reviewText={rating.reviewText}
            movieRating={rating.movieRating}
            rateDate={rating.rateDate}
            image={rating.imageUrl}
          />
        </Row>
      ))}
    </Container>
  );
};

export default RatingHistory;
