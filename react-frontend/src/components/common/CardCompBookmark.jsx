import { WatchlistButton } from "./Buttons";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  StarFill,
  Star,
  InfoCircleFill,
  PlayFill,
} from "react-bootstrap-icons";
import { useState } from "react";
import "./CardComp.scss";
import { removeBookmark } from "../privateViews/Bookmark";

const CardCompBookmark = ({
  titleId,
  title,
  description,
  rating,
  image,
  dispatch,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const cardStyles = {
    width: "15rem",
    height: "35.5rem",
    backgroundColor: "#0c0b00",
  };

  const cardImageStyle = {
    width: "100%",
    minHeight: "60%",
    objectFit: "cover",
  };

  const titleStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.2em",
    maxHeight: "2.4em",
    minHeight: "2.4em",
  };

  const infoStyle = {
    cursor: "pointer",
  };

  return (
    <>
      <Card style={cardStyles}>
        <Card.Img src={image} style={cardImageStyle}></Card.Img>
        <Card.Body>
          <div className="d-flex align-items-center">
            <StarFill color="yellow" className="mb-2" />
            <p className="text-white mb-2 ms-2">{rating}</p>
            <Star className="text-primary mb-2 ms-4" />{" "}
            {/* OnCLick prop in star to add to favorites*/}
          </div>
          <Card.Title className="text-white" style={titleStyle}>
            {title}
          </Card.Title>
          <WatchlistButton onClick={() => removeBookmark(titleId, dispatch)}>
            <div className="d-flex justify-content-center align-items-center text-primary">
              <p className="text-primary"></p>
              Remove
            </div>
          </WatchlistButton>
          <Container>
            <Row style={{ color: "#fff", marginTop: "1rem" }}>
              <Col>
                <p>Trailer</p>
              </Col>
              <Col className="ml-4">
                <PlayFill />
              </Col>
              <Col>
                <InfoCircleFill style={infoStyle} onClick={handleModalShow} />
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
};

export default CardCompBookmark;
