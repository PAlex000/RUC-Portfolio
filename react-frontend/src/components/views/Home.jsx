import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import header from "../../assets/movieHeader.jpg";

//Hard coded data as we create the skellet. useEffect with GET calls when we establish connection. Async/Await, fetch.
const movieData = [
  {
    id: 1,
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 2,
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 3,
    title: "The Avengers",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 4,
    title: "Spiderman Homecoming",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 5,
    title: "Remember the Titans",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 6,
    title: "Dangerous Minds",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
  {
    id: 7,
    title: "Get Rich Or Die Tryin'",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
  },
  {
    id: 8,
    title: "American Gangster",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
  },
];

const backgroundContainer = {
  backgroundColor: "#000",
};

const headerStyle = {
  position: "relative",
  textAlign: "center",
  color: "white",
  width: "80%",
  paddingTop: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  borderRadius: "15px",
};

const overlayTextStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "2rem",
};

const Home = () => {
  return (
    <Container className="px-5" fluid style={backgroundContainer}>
      <div style={headerStyle}>
        <img
          src={header}
          alt="Header Image"
          style={{ width: "100%", height: "auto" }}
        />
        <div style={overlayTextStyle}>Welcome to Our Movie Collection</div>
      </div>
      <Row className="d-flex justify-content-center">
        <Row className="mr-4">
          <Col className="d-flex justify-content-end">
            <Dropdowns />
          </Col>
        </Row>
        {movieData.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={2} className="mb-4 mx-2">
            <CardComp
              title={movie.title}
              text={movie.text}
              btnText={movie.btnText}
              image={movie.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
