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
import hunger_games_cropped from "../../assets/poster_movie_cropped.jpg";
import Button from "react-bootstrap/Button";

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

  {
    id: 12,
    title: "Home Alone",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: home_alone,
  },

  {
    id: 13,
    title: "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
  {
    id: 14,
    title: "Hunger Games",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: hunger_games,
  },
  {
    id: 15,
    title: "Home Alone",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: home_alone,
  },
]

const backgroundStyle = {
  backgroundColor: "#000",
  backgroundImage: `linear-gradient(0deg, 
    rgba(0,0,0,1) 10%, rgba(0,0,0,0) 95%), url(${hunger_games_cropped}`,
  backgroundSize: "cover",
  width: "100%",
  height: "700px",
  backgroundPosition: "center",
  position: "relative",
}

const titleBackground = {
  position: "absolute",
  fontSize: "45px",
  color: "#FFA869",
  fontWeight: "bold",
  left: 30,
  top: 40,
  width: "100%",
  padding: "2rem",
  textShadow: "2px 3px 5px black"
}

const titleBackground2 = {
  position: "absolute",
  fontSize: "55px",
  color: "#FFF",
  fontWeight: "bold",
  left: 30,
  top: 110,
  width: "60%",
  padding: "2rem",
  textShadow: "1px 4px 5px black"
}

const plot = {
  position: "absolute",
  fontSize: "25px",
  color: "#FFF",
  left: 30,
  top: 260,
  width: "40%",
  padding: "2rem",
  textShadow: "1px 3px 5px black" // offset-x | offset-y | blur | color
}

const buttons = {
  position: "absolute",
  left: 45,
  top: 430,
  margin: "2rem 0",

}

const buttonsCol = {
  display: "inline",
  margin: "18px",
  fontSize: "23px",
  color: "#FFF",
  backgroundColor: "#E27F38",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  border: "none"
}

const backgroundStyle_1 = {
  backgroundColor: "#000"
}

const titleStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "35px",
  textAlign: "center",
  textDecoration: "underline",
}

const list = {
  color: "#FFFFFF",
  fontWeight: "bold",
  listStyle: "none",
}

const listing = {
  display: "inline",
  padding: "15px",
  fontSize: "20px"
}

const Explorer = () => {
  return <div>
    <Navigation />
    <Container fluid style={backgroundStyle}>
      <h1 style={titleBackground}>Featured movie</h1>
      <h3 style={titleBackground2}>The Hunger Games - The Ballad Of Songbirds And Snakes</h3>
      <p style={plot}>The Ballad of Songbirds and Snakes tells the backstory of Professor Snow. Students at the most prestigious school in the Capitol become mentors to the tributes in an effort to make the games more entertaining.</p>
      <Col style={buttons}>
      <Button style={buttonsCol}>Watch Trailer and More</Button>
      <Button style={buttonsCol}>Add to Watchlist</Button>
      </Col>
    </Container>
    <Container fluid style={backgroundStyle_1}>
      <Row className="justify-content-center p-5">
        <h2 style={titleStyle}>Filter options</h2>
        <ul className="d-flex flex-row mt-4 justify-content-center" style={list}>
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
