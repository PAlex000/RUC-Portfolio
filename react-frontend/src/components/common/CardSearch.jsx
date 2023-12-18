import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiStarFullOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";



const CardSearch = ({ title, image, btnText}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const cardMovies = {
    backgroundColor: "grey",
    color: "#000",
    border: "none"
  }

  const img = {
    width: "230px",
    height: "350px",
    backgroundSize: "cover",
    position: "relative",
  }

  const heart = {
    position: "absolute",
    backgroundColor: "#EF5454",
    padding: "0.4rem 0.9rem"

  }

  const stars = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0.50rem"
  }

  const review = {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  }

  const buttonStyle = {
    display: "inline",
    margin: "0 3px",
    fontSize: "15px",
    color: "#FFF",
    fontWeight: "bold",
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "10px", 
    textShadow: "1px 2px 5px black",
  }


  return (
    <>
    <Row className="g-5">
      {Array.from({length: 1}).map((_, idx) => (
      <Col key={idx}>
    <Card style={cardMovies} className="h-100">
      <Card.Img src={image} style={img}/>
      <FaHeart size={60} style={heart}/>
      <Card.Body>
        <Card.Title as="h4" className="my-2">{title}</Card.Title>
        <div className="d-flex flex-row">
        <TiStarFullOutline size={23} className="mt-1"/>  <p style={stars}> 0.00  <span style={review} className="mt-1">(0 reviews)</span></p>
        </div>
        <Button variant="warning" className="my-3" style={buttonStyle} onClick={handleShow}>{btnText}</Button>
         <Button variant="danger" className="my-3" style={buttonStyle} onClick={handleShow}>Delete search</Button>

         <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false} style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}>
        <Modal.Header closeButton>
          <Modal.Title>Delete search</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this record? You cannot undo this action.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
            Yes
          </Button>
          <Button variant="warning" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
            No, take me back!
          </Button>
        </Modal.Footer>
      </Modal>
       

      </Card.Body>
    </Card>
    </Col>
    ))};
    </Row>
    </>
  );
};

export default CardSearch;