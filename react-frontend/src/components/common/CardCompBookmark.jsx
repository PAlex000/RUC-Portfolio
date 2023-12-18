import Card from "react-bootstrap/Card";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from "react";
import "./CardComp.scss";
import { removeBookmark } from "../privateViews/Bookmark";

const CardCompBookmark = ({
  titleId,
  title,
  description,
  image,
  btnText,
  dispatchBookmark,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const cardMovies = {
    backgroundColor: "#000",
    color: "#FFF",
  }

  const img = {
    width: "230px",
    height: "350px",
    backgroundSize: "cover",
    position: "relative",
  }

  const psColAltern = {
    display: "inline",
    margin: "0.05rem",
    fontSize: "17px",
    color: "grey",
    border: "none",
    backgroundColor: "transparent",
    fontWeight: "bold",
    padding: "0.20rem 0",
    
  }

  const buttons = {
  display: "inline",
  margin: "2px 3px",
  fontSize: "15px",
  color: "#FFF",
  fontWeight: "bold",
  padding: "0.5rem 0.75rem",
  border: "none",
  borderRadius: "10px", 
  textShadow: "1px 2px 5px black",

  }

  const stars = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0.50rem"
  }

  const review = {
    fontSize: "15px",
    color: "grey",
    fontWeight: "bold",
    marginBottom: "1rem",
  }

  return (
    <>
    <Row className="g-5">
      {Array.from({length: 1}).map((_, idx) => (
      <Col key={idx}>
    <Card style={cardMovies} className="h-100">
      <Card.Img src={image} style={img}/>
      <Card.Body>
      <p style={psColAltern}>Action /</p> 
      <p style={psColAltern}>Adventure /</p>
      <p style={psColAltern}>Drama</p>
        <Card.Title as="h4" className="my-3">{title}</Card.Title>
        <div className="d-flex flex-row mb-3">
        <TiStarFullOutline size={23} className="mt-1"/>  <p style={stars}> 0.00  <span style={review} className="mx-1">(0 reviews)</span></p>
        </div>
        <Button variant="danger" style={buttons}>{btnText}</Button>
        <Button variant="warning" style={buttons} onClick={handleModalShow}>Remove</Button>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => removeBookmark(titleId, dispatchBookmark)}>Yes</Button>
            <Button variant="secondary" onClick={handleModalClose}>
              No, take me back
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

export default CardCompBookmark;
