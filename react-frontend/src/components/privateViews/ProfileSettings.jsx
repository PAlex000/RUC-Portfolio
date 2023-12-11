import Container from "react-bootstrap/Container";
import Navigation from "../layout/Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import user_picture from "../../assets/user_icon.png";
import online from "../../assets/online.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {ArrowRight} from "react-bootstrap-icons";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import CardSearch from "../common/CardSearch";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";
import { MdOutlineVerified } from "react-icons/md";
import home_alone from "../../assets/home_alone.jpg";
import Modal from "react-bootstrap/Modal";
import {useState} from "react";

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
]

const backgroundContainer = {
  backgroundColor: "#000",
};

const imgPicture = {
  position: "relative",
  width: 171,
  height: 181,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  margin: "2rem 0",
}


const cardHeader = {
  backgroundColor: "#676767",
  color: "#FFFFFF"
}

const cardBody = {
  backgroundColor: "#303030",
}

const cardText = {
  color: "#FFFFFF",
  fontSize: "23px"
}

const buttonFont = {
  fontSize: "20px",
  color: "#000000",
  fontWeight: "bold",
}

const secondContainer = {
  backgroundColor: "#D9D9D9"
}

const icon = {
  fontSize: "30px"
}

const link = {
  color: "#FFFFFF"
}

const addImg = {
  position: "absolute",
  backgroundColor: "#F9B93C",
  width: 60,
  height: 60,
  borderRadius: "50%",
  color: "#000000",
  fontWeight: "bold",
  fontSize: "36px",
  top: 270,
  left: 870

}


const ProfileSettings = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false); 
const handleShow = () => setShow(true);

  return <>
      <Container className="px-1" fluid style={backgroundContainer}>
        <Navigation />
        <Row className="justify-content-md-center">
          <Col className="p-5 text-center">

          <img src={user_picture} style={imgPicture}/>

          <div style={addImg}>+</div>
          
          <h1 style={{
            color: "#FFFFFF",
            fontSize: "50px",
            marginBottom: "2rem"
          }}>FILOFTEA-BIANCA GRECU</h1>

          <p style={{
            fontSize:"25px",
            color:"#FFFFFF",
          }}>
            <img src={online} width={23} height={23} style={{
            margin: "0 0.5rem"
          }}/> Online</p>
          </Col>
        </Row>
        
        <Row className="justify-content-evenly mt-5">
          <Col md={4} className="g-2">
            <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">About You</Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mt-4"><MdOutlineEmail className="mx-3" style={icon}/>biancagrecu121@gmail.com</Card.Text>
                <Card.Text style={cardText}><MdOutlinePermPhoneMsg className="mx-3" style={icon}/>(+45) 53 33 73 77</Card.Text>
                <Card.Text style={cardText}><MdOutlineVerified className="mx-3" style={icon}/>Not verified yet, <a href="" style={link}>validate your email here.</a></Card.Text> 
                <Button className="mt-4 mb-2 mx-3" variant="warning" style={buttonFont}>Edit your profile <ArrowRight/></Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span: 4, offset: 1 }} className="g-2">
          <Card border="dark">
          <Card.Header as="h2" style={cardHeader} className="p-3">Your ratings</Card.Header>
          <Card.Body style={cardBody}>
            <Card.Text style={cardText} className="mx-3 mt-4">Movie worth of 5 stars? Or maybe 8 stars? Visit the movies you have seen and rate them accordingly...to your feelings!</Card.Text>
            <Button className="mt-4 mb-2 mx-3" variant="warning" style={buttonFont}>Get Started! <ArrowRight/></Button>

          </Card.Body>
        </Card>
          </Col>

            <Col md={{span: 4, offset: 6 }} className="g-2 mb-5" >
              <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">Your bookmarks</Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mx-3 mt-4">There are no any bookmarks...yet! Visit any movie you have watched and feel free to bookmark it, easy peasy!</Card.Text>
                <Button className="mt-4 mb-2 mx-3" variant="warning" style={buttonFont}>Get Started! <ArrowRight/></Button>

              </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>


      <Container fluid style={secondContainer}>
        <Row className="p-2 justify-content-center">
          <h1 className="mt-4 px-4">Recently searched</h1>
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
        </Row >

        <Row className="py-3">
          <Col className="my-4 text-center"><Button variant="danger" style={{fontSize:"23px", fontWeight: "bold", padding: "1rem"}} onClick={handleShow}>Delete all search history</Button>
          <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false} style={{
          fontSize: "20px",
          fontWeight: "bold",
        }} >
        <Modal.Header closeButton>
          <Modal.Title>Delete search</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the whole history? You cannot undo this action.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
            Yes
          </Button>
          <Button variant="warning" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
            No, take me back!
          </Button>
        </Modal.Footer>
      </Modal></Col>
        </Row>
      </Container>
  </>
};

export default ProfileSettings;
