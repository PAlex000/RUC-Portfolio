import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComp from "../common/CardComp";
import Dropdowns from "../common/Dropdown";
import Header from "../layout/Header";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import header from "../../assets/movieHeader.jpg";
import CustomContainer from "../common/CustomContainer";

//Hard coded data as we create the skellet. useEffect with GET calls when we establish connection. Async/Await, fetch.
const movieData = [
  {
    id: 1,
    title:
      "Shawshank Redemption Shawshank Redemption Shawshank Redemption Shawshank Redemption",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Learn More",
    imageUrl: shawshank,
    rating: 10,
  },
  {
    id: 2,
    title: "Spiderman No Way Home",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
    rating: 5,
  },
  {
    id: 3,
    title: "The Avengers",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
    rating: 0,
  },
  {
    id: 4,
    title: "Spiderman Homecoming",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
    rating: 3,
  },
  {
    id: 5,
    title: "Remember the Titans",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
    rating: 2,
  },
  {
    id: 6,
    title: "Dangerous Minds",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
    rating: 8,
  },
  {
    id: 7,
    title: "Get Rich Or Die Tryin'",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: shawshank,
    rating: 6,
  },
  {
    id: 8,
    title: "American Gangster",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: departed,
    rating: 2,
  },
];

const Home = () => {
  return (
    <CustomContainer fluid>
      <Header header={header} />
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
          {movieData.map((movie) => (
            <Col
              key={movie.id}
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <CardComp
                title={movie.title}
                text={movie.text}
                btnText={movie.btnText}
                image={movie.imageUrl}
              />
            </Col>
          ))}
        </Row>
      </div>
    </CustomContainer>
  );
};

export default Home;
