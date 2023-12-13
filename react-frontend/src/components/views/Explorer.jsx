import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "../layout/Navigation";
import Col  from "react-bootstrap/Col";
import home_alone from "../../assets/home_alone.jpg";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import CardSearch from "../common/CardSearch";

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
    title: "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
  {
    id: 4,
    title: "Hunger Games",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: hunger_games,
  },
  {
    id: 5,
    title: "Home Alone",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: home_alone,
  },

  {
    id: 6,
    title: "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
  {
    id: 7,
    title: "Hunger Games",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: hunger_games,
  },
  {
    id: 8,
    title: "Home Alone",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: home_alone,
  },

  {
    id: 9,
    title: "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
  {
    id: 10,
    title: "Hunger Games",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: hunger_games,
  },
  {
    id: 11,
    title: "Home Alone",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: home_alone,
  },
]

const backgroundStyle = {
  backgroundColor: "#000"
}

const titleStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "25px",
  textAlign: "center",
  textDecoration: "underline"
}

const list = {
  color: "#FFFFFF",
  fontWeight: "bold",
  listStyle: "none",
}

const listing = {
  display: "inline",
  padding: "10px",
}

const Explorer = () => {
  return <div>
    <Navigation />
    <Container fluid style={backgroundStyle}>
      <Row className="justify-content-center p-5">
        <h2 style={titleStyle}>Filter options</h2>
        <ul className="d-flex flex-row mt-5 justify-content-center" style={list}>
          <li style={listing}>Action</li>
          <li style={listing}>Adventure</li>
          <li style={listing}>Animation</li>
          <li style={listing}>Biography</li>
          <li style={listing}>Comedy</li>
          <li style={listing}>Crime</li>
          <li style={listing}>Documentary</li>
          <li style={listing}>Drama</li>
          <li style={listing}>Family</li>
          <li style={listing}>Fantasy</li>
        </ul>
        <ul className="d-flex flex-row justify-content-center" style={list}>
          <li style={listing}>Film-Noir</li>
          <li style={listing}>Game-Show</li>
          <li style={listing}>History</li>
          <li style={listing}>Horror</li>
          <li style={listing}>Music</li>
          <li style={listing}>Musical</li>
          <li style={listing}>Mystery</li>
          <li style={listing}>News</li>
          <li style={listing}>Reality-Tv</li>
          <li style={listing}>Romance</li>
          <li style={listing}>Sci-fi</li>
          <li style={listing}>Short</li>
        </ul>
        <ul className="d-flex flex-row justify-content-center" style={list}>
          <li style={listing}>Sport</li>
          <li style={listing}>Thriller</li>
          <li style={listing}>Talk-Show</li>
          <li style={listing}>War</li>
          <li style={listing}>Western</li>
        </ul>
      </Row>
      
      <Row className="d-flex justify-content-center p-5">
        {movieData.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={2} className="mb-5 mx-2">
            <CardSearch
              title={movie.title}
              text={movie.text}
              btnText={movie.btnText}
              image={movie.imageUrl}
            />
          </Col>
        ))}

      </Row>
    </Container>
  </div>;
};

export default Explorer;
