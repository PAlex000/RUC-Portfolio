import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import home_alone from "../../assets/home_alone.jpg";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";
import departed from "../../assets/departed.jpg";
import CardComp from "../common/CardComp";
import hunger_games_cropped from "../../assets/poster_movie_cropped.jpg";
import Button from "react-bootstrap/Button";


const movieData = [
  {
    id: 1,
    title:
      "Scream",
    text: "A different set of text for the second card, explaining something else.",
    btnText: "Learn More",
    imageUrl: scream,
  },
  {
    id: 2,
    title: "Departed",
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
  color: "#DEB522",
  fontWeight: "bold",
  left: 30,
  top: 10,
  width: "100%",
  padding: "2rem",
  textShadow: "4px 5px 5px black"
}

const titleBackground2 = {
  position: "absolute",
  fontSize: "55px",
  color: "#FFF",
  fontWeight: "bold",
  left: 30,
  top: 80,
  width: "60%",
  padding: "2rem",
  textShadow: "1px 4px 5px black"
}

const plot = {
  position: "absolute",
  fontSize: "25px",
  color: "#FFF",
  left: 30,
  top: 315,
  width: "35%",
  padding: "2rem",
  textShadow: "1px 3px 5px black" // offset-x | offset-y | blur | color
}

const buttons = {
  position: "absolute",
  left: 45,
  top: 530,
  margin: "2rem 0",

}

const buttonGenre = {
  position: "absolute",
  left: 45,
  top: 215,
  margin: "2rem 0",

}

const buttonsCol = {
  display: "inline",
  margin: "18px",
  fontSize: "22px",
  color: "#FFF",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "10px", 
  textShadow: "1px 2px 5px black",

}


const buttonsColAltern = {
  display: "inline",
  margin: "18px",
  fontSize: "18px",
  color: "#FFF",
  backgroundColor: "transparent",
  fontWeight: "bold",
  padding: "0.5rem 0.75rem",
  border: "4px solid #DEB522", 
  textShadow: "1px 3px 5px black",
  borderRadius: "10px"
}

const backgroundStyle_1 = {
  backgroundColor: "#000"
}

const titleStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  fontSize: "35px",
  textAlign: "center",
  paddingBottom: "2.5rem",
  borderBottom: "2px solid #FFF"
}

const list = {
  color: "#FFFFFF",
  fontWeight: "bold",
  listStyle: "none",
}

const listing = {
  display: "inline",
  padding: "10px 25px",
  fontSize: "19px",
  borderTop: "none",
  borderBottom: "none",
  borderLeft: "3px solid #DEB522",

}

const Explorer = () => {
  return <div>
    <Container fluid style={backgroundStyle}>
      <h1 style={titleBackground}>Featured movie</h1>
      <h3 style={titleBackground2}>The Hunger Games - The Ballad Of Songbirds And Snakes</h3>
      <p style={plot}>The Ballad of Songbirds and Snakes tells the backstory of Professor Snow. Students at the most prestigious school in the Capitol become mentors to the tributes in an effort to make the games more entertaining.</p>
      {/* for now there are three buttons, use .map to retrieve the genres of each movie in future */}
      <Col style={buttonGenre}>
      <Button style={buttonsColAltern}>Action</Button> 
      <Button style={buttonsColAltern}>Adventure</Button>
      <Button style={buttonsColAltern}>Drama</Button>
      </Col>
      <Col style={buttons}>
      <Button style={buttonsCol} variant="danger">Watch Trailer and More</Button>
      <Button style={buttonsCol} variant="warning">Add to Watchlist</Button>
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
          <li style={listing}>Film-Noir</li>
          <li style={listing}>Game-Show</li>
          <li style={listing}>History</li>
        </ul>
        <ul className="d-flex flex-row justify-content-center" style={list}>
          <li style={listing}>Horror</li>
          <li style={listing}>Music</li>
          <li style={listing}>Musical</li>
          <li style={listing}>Mystery</li>
          <li style={listing}>News</li>
          <li style={listing}>Reality-Tv</li>
          <li style={listing}>Romance</li>
          <li style={listing}>Sci-fi</li>
          <li style={listing}>Short</li>
          <li style={listing}>Sport</li>
          <li style={listing}>Thriller</li>
          <li style={listing}>Talk-Show</li>
          <li style={listing}>War</li>
          <li style={listing}>Western</li>
        </ul>
      </Row>
      
      <Row className="d-flex justify-content-center p-4">
        {movieData.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={2} className="mb-5 mx-2">
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

  </div>;
};

export default Explorer;
