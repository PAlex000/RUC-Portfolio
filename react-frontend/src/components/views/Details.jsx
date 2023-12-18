import departed from "../../assets/departed.jpg";
import {Button, Container, Col, Row, CarouselItem, Card} from "react-bootstrap";
import { TiStarFullOutline } from "react-icons/ti";
import { GoPlay } from "react-icons/go";
import Carousel from 'react-bootstrap/Carousel';
import user_picture from "../../assets/user_icon.png";

const backgroundStyle = {
  backgroundColor: "#000",
  backgroundImage: `linear-gradient(0deg, 
    rgba(0,0,0,1) 10%, rgba(0,0,0,0) 95%), url(${departed}`,
  backgroundSize: "cover",
  width: "100%",
  height: "900px",
  backgroundPosition: "top",
  position: "relative",
}

const imgPicture = {
  width: 171,
  height: 171,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  marginLeft: "1rem"
}

const imgPictureResize = {
  width: 171,
  height: 171,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  marginLeft: "1.5rem"
}

const imgPictureAnd = {
  width: 171,
  height: 171,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  marginLeft: "3rem"
}



const imgPictureLeo = {
  width: 171,
  height: 171,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  marginLeft: "3rem"
}


const titleBackground2 = {
  position: "absolute",
  fontSize: "55px",
  color: "#FFF",
  fontWeight: "bold",
  left: 30,
  top: 120,
  width: "60%",
  padding: "2rem",
  textShadow: "1px 4px 5px black"
}

const plot = {
  position: "absolute",
  fontSize: "25px",
  color: "#FFF",
  left: 30,
  top: 355,
  width: "35%",
  padding: "2rem",
  textShadow: "1px 3px 5px black" // offset-x | offset-y | blur | color
}

const buttons = {
  position: "absolute",
  left: 45,
  top: 490,
  margin: "2rem 0",

}

const buttonGenre = {
  position: "absolute",
  left: 45,
  top: 260,
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
  fontSize: "20px",
  color: "#FFF",
  backgroundColor: "transparent",
  fontWeight: "bold",
  padding: "0.5rem 0.75rem",
  borderTop: "none",
  borderRight: "none",
  borderBottom: "none",
  borderLeft: "5px solid #DEB522", 
  textShadow: "1px 3px 5px black",
}

const stars = {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#FFF",
  marginLeft: "0.5rem",
  textShadow: "1px 3px 5px black",
 
}

const review = {
  fontSize: "25px",
  color: "#FFF",
  fontWeight: "bold",
  textShadow: "1px 3px 5px black",
}

const positionate = {
  position: "absolute",
  left: 65,
  top: 225,
}


const playButton = {
  color: "#EF5454",
  position: "absolute",
  filter: "drop-shadow(1px 3px 5px black)",
  right: 300,
  top: 325
  
}

const watch = {
  color: "#FFF", 
  fontWeight: "bold", 
  fontSize: "35px", 
  position: "absolute",
  top: 490,
  right: 265,
  textShadow: "1px 3px 5px black",
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
  borderBottom: "2px solid #FFF",
  width: "75%"
}

const synopsis = {
  fontSize: "23px",
  textAlign: "start",
  width: "72%",
  color: "#FFF",
  marginTop: "1rem",
  lineHeight: "2.85rem"
}

const cardCast = {
  backgroundColor: "#000",
  textAlign: "center"
}

const castName = {
  color: "#FFF",
}

const role = {
  color: "#FFF"
}

const carouselOne = {
  gap: "7%",
}



const Details = () => {

return (
  <div>
  <Container fluid style={backgroundStyle}>
    <h3 style={titleBackground2}>The Departed</h3>
    <div className="d-flex flex-row" style={positionate}>
        <TiStarFullOutline size={30} className="mt-2" style={{color: "#DEB522"}}/>  <p style={stars}> 0.00  <span style={review} className="mx-1">(0 reviews)</span></p>
        </div>
    <p style={plot}>An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.</p>
    {/* for now there are three buttons, use .map to retrieve the genres of each movie in future */}
    <Col style={buttonGenre}>
    <Button style={buttonsColAltern}>Crime</Button> 
    <Button style={buttonsColAltern}>Drama</Button>
    <Button style={buttonsColAltern}>Thriller</Button>
    </Col>
    <Col style={buttons}>
    <Button style={buttonsCol} variant="danger">Add To Favorites</Button>
    <Button style={buttonsCol} variant="warning">Add to Watchlist</Button>
    </Col>
    <GoPlay size={150} style={playButton}/>
    <p style={watch}> Watch Trailer</p>
  </Container>

  <Container fluid style={backgroundStyle_1}>
      <Row className="justify-content-center p-5 mx-2">
        <h2 style={titleStyle}>Synopsis</h2>
        <p style={synopsis}>In this crime-action tour de force, the South Boston state police force is waging war 
          on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to 
          infiltrate the mob syndicate run by gangland chief Frank Costello. 
          While Billy quickly gains the confidence of Costello, Colin Sullivan, a hardened young criminal 
          who has infiltrated the state police as an informer for the syndicate, is rising to a position 
          of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, 
          gathering information about the plans and counter-plans of the operations they have penetrated. 
          But when it becomes clear to both the mob and the police that there is a mole in their midst, 
          Billy and Colin are suddenly in danger of being caught and exposed to the enemy - 
          and each must race to uncover the identity of the other man in time to save themselves. 
          But is either willing to turn on their friends and comrades they have made during their long stints undercover?</p>
        </Row>
        <Row className="justify-content-center p-5 mx-2 mt-5">
        <h2 style={titleStyle}>Cast</h2>
        <Carousel>
          <Carousel.Item>
            <Col className="d-flex flex-row justify-content-center my-5" style={carouselOne}>
            <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPictureLeo} />
              <Card.Body>
                <h3 style={castName}>Leonardo DiCaprio</h3>
                <p style={role}>Billy Costigan</p>
              </Card.Body>
            </Card>

                       <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPicture} />
              <Card.Body>
                <h3 style={castName}>Jack Nicholson</h3>
                <p style={role}>Costello</p>
              </Card.Body>
            </Card>

                        <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPicture} />
              <Card.Body>
              <h3 style={castName}>Martin Sheen</h3>
                <p style={role}>Queenan</p>
              </Card.Body>
            </Card>
            
            <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPicture} />
              <Card.Body>
              <h3 style={castName}>Matt Damon</h3>
                <p style={role}>Colin</p>
              </Card.Body>
            </Card>
            </Col>
          </Carousel.Item>
          <CarouselItem>
          <div>A circle</div>
            <Col className="d-flex flex-row justify-content-center my-5" style={carouselOne}>
            <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPicture} />
              <Card.Body>
                <h3 style={castName}>Ray Winstone</h3>
                <p style={role}>Mr. French</p>
              </Card.Body>
            </Card>

                       <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPictureResize} />
              <Card.Body>
                <h3 style={castName}>Mark Wahlberg</h3>
                <p style={role}>Dignam</p>
              </Card.Body>
            </Card>

                        <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPictureAnd} />
              <Card.Body>
              <h3 style={castName}>Anthony Anderson</h3>
                <p style={role}>Brown</p>
              </Card.Body>
            </Card>
            
            <Card style={cardCast}>
            <Card.Img src={user_picture} style={imgPictureResize} />
              <Card.Body>
              <h3 style={castName}>Kevin Corrigan</h3>
                <p style={role}>Cousin Sean</p>
              </Card.Body>
            </Card>
            </Col>
          </CarouselItem>
        </Carousel>
        </Row>
        </Container>
</div>
);
};
export default Details;

