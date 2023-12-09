import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";
import Header from "../layout/Header";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import header from "../../assets/movieHeader.jpg";
import Navigation from "../layout/Navigation";

//Hard coded data as we create the skellet. useEffect with GET calls when we establish connection. Async/Await, fetch.
const bookmarkData = [
  {
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageUrl: shawshank,
    rating: 10,
  },
  {
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: departed,
    rating: 5,
  },
  {
    title: "The Avengers",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: shawshank,
    rating: 0,
  },
  {
    title: "Spiderman Homecoming",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: departed,
    rating: 3,
  },
  {
    title: "Remember the Titans",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: shawshank,
    rating: 5,
  },
  {
    title: "Dangerous Minds",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: departed,
    rating: 3,
  },
  {
    title: "Get Rich Or Die Tryin'",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: shawshank,
    rating: 2,
  },
  {
    title: "American Gangster",
    text: "A different set of text for the second card, explaining something else.",
    imageUrl: departed,
    rating: 8,
  },
];

const backgroundContainer = {
  backgroundColor: "#000",
};

const Bookmark = () => {
  return (
    <Container className="px-5" fluid style={backgroundContainer}>
      <Navigation />
      <Row className="d-flex justify-content-center">
        <Row className="mr-4"></Row>
        {bookmarkData.map((data) => (
          <Col key={data.id} sm={6} md={4} lg={2} className="mb-4 mx-2">
            <CardComp
              title={data.title}
              text={data.text}
              image={data.imageUrl}
              rating={data.rating}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Bookmark;
