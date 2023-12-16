import { Container, Row } from "react-bootstrap";
import RatingCard from "../common/RatingCard";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";

//Hard coded data as we create the skellet. useEffect with GET calls when we establish connection. Async/Await, fetch.
const ratingData = [
  {
    titleid: "Test1",
    grade: 5,
    reviewText: "Test review 1",
    rateDate: "2023-12-05",
    movieRating: 3.2,
    imageUrl: departed,
  },
  {
    titleid: "Test2",
    grade: 7,
    reviewText: "",
    rateDate: "2023-12-05",
    movieRating: 7.3,
    imageUrl: shawshank,
  },
  {
    titleid: "Test3",
    grade: 10,
    reviewText: "Test review 10",
    rateDate: "2023-12-05",
    movieRating: 0.3,
    imageUrl: departed,
  },
  {
    titleid: "Test4",
    grade: 1,
    reviewText: "Test review 1",
    rateDate: "2023-12-03",
    movieRating: 10.3,
    imageUrl: shawshank,
  },
  {
    titleid: "Test5 ",
    grade: 6,
    reviewText: "Test review 6",
    rateDate: "2023-12-01",
    movieRating: -3.2,
    imageUrl: departed,
  },
];
const backgroundContainer = {
  backgroundColor: "#000",
};
const RatingHistory = () => {
  return (
    <Container className="px-5" fluid style={backgroundContainer}>
      {ratingData.map((rating) => (
        <Row key={rating.titleid}>
          <RatingCard
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
