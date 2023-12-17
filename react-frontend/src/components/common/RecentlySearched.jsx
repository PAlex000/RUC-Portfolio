import {Container, Row, Col} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import CardSearch from "../common/CardSearch";
import shawshank from "../../assets/shawshank.jpg";
import departed from "../../assets/departed.jpg";
import scream from "../../assets/scream.jpg";
import hunger_games from "../../assets/poster_movie.jpg";

import home_alone from "../../assets/home_alone.jpg";

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
    backgroundColor: "#D9D9D9",
}


const RecentlySearched = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false); 
const handleShow = () => setShow(true);



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
}

export default RecentlySearched;