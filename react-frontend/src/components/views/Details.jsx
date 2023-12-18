import departed from "../../assets/departed.jpg";
import {Button, Container, Col, Row, CarouselItem, Card, Modal, Form} from "react-bootstrap";
import { TiStarFullOutline } from "react-icons/ti";
import { GoPlay } from "react-icons/go";
import Carousel from 'react-bootstrap/Carousel';
import user_picture from "../../assets/user_icon.png";
import {useState} from "react";
import CardComp from "../common/CardComp";
import shawshank from "../../assets/shawshank.jpg";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";
import home_alone from "../../assets/home_alone.jpg";

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
  top: 375,
  width: "35%",
  padding: "2rem",
  textShadow: "1px 3px 5px black" // offset-x | offset-y | blur | color
}

const buttons = {
  position: "absolute",
  left: 45,
  top: 510,
  margin: "2rem 0",

}

const buttonGenre = {
  position: "absolute",
  left: 45,
  top: 280,
  margin: "2rem 0",

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
  top: 260,
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
  fontSize: "40px",
  textAlign: "center",
  paddingBottom: "1.5rem",
  borderBottom: "2px solid #FFF",
  width: "75%"
}

const border = {
  borderBottom: "2px solid #FFF",
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
  color: "#FFF",
  fontSize: "20px"
}

const carouselOne = {
  gap: "7%",
}

const buttonStyle = {
  fontWeight: "bold",
  width: "10%",
  height: "3.25rem",
  fontSize: "23px",
}

const movieData = [
  {
    id: 1,
    title:
      "Shawshank Redemption",
    text: "A different set of text for the second card, explaining something else.",
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
]


const secondContainer = {
  backgroundColor: "#000",
}

const type = {
  position: "absolute",
  color: "#FFF",
  fontSize: "23px",
  fontWeight: "bold",
  top: 215,
  left: 73,
  textShadow: "1px 3px 5px black"
}


const Details = () => {

  const [show, setShow] = useState(false);

  const [isHover, setIsHover] = useState(false);

const [isHoverOne, setIsHoverOne] = useState(false);


   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const handleMouseEnterAgain = () => {
    setIsHoverOne(true);
  }
  
  const handleMouseLeaveAgain = () => {
    setIsHoverOne(false);
  }

  const buttonsCol = {
    display: "inline",
    margin: "18px",
    fontSize: "22px",
    color: isHover ? "#000" : "#FFF",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "10px", 
    textShadow: "1px 2px 5px black",
  
  }
  
  const buttonsCol1 = {
    display: "inline",
    margin: "18px",
    fontSize: "22px",
    color: isHoverOne ? "#000" : "#FFF",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "10px", 
    textShadow: "1px 2px 5px black",
  
  }


  const handleClose = () => setShow(false); // = () => , not just equal, no wonder why it was re-rendering all over again
  const handleShow = () => setShow(true);

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
    <Button style={buttonsCol} variant={isHover ? "light" : "danger" } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Add To Favorites</Button>
    <Button style={buttonsCol1} variant={isHoverOne ? "light" : "warning"} onMouseEnter={handleMouseEnterAgain} onMouseLeave={handleMouseLeaveAgain}>Add to Watchlist</Button>
    </Col>
    <p style={type}>R | 2006</p>
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

        <Container fluid style={backgroundStyle_1}>
      <Row className="justify-content-center p-5 mx-2">
        <h2 style={titleStyle}>Ratings</h2>
        {/* for now this is the "no ratings" scenario */}
        <h3 style={{color: "#FFF", textAlign: "center", marginTop: "4rem"}}>Whoops, no ratings yet...be the first one to rate this movie! <TiStarFullOutline size={35} style={{color: "#DEB522"}}/></h3>
        <Button variant="warning" className="my-5" style={buttonStyle} onClick={handleShow}>Rate movie</Button>

<Modal show={show} onHide={handleClose} backdrop="static"
keyboard={false} style={{
fontSize: "20px",
fontWeight: "bold",
}}>
<Modal.Header closeButton>
<Modal.Title>Rate movie</Modal.Title>
</Modal.Header>
<Modal.Body>How would you rate this movie?
<div className="d-flex flex-row mt-2">
                <TiStarFullOutline size={30} style={{color: "#DEB522"}} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
              </div>
  <Form className="mt-4">
<Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment your thoughts about the movie</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
</Modal.Body>
<Modal.Footer>
<Button variant="warning" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
Rate
</Button>
</Modal.Footer>
</Modal>
        </Row>
        <div style={border}></div>
        </Container>

        <Container fluid style={secondContainer}>
        <Row className="p-2 justify-content-center">
          <h1 className="px-4" style={{color: "#FFF", textAlign: "center", margin: "5rem 0"}}>See similar movies</h1>
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
        </Row >
      </Container>
        
</div>
);
};
export default Details;

