import { WatchlistButton } from "./Buttons";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import {
  StarFill,
  Star,
  InfoCircleFill,
  PlayFill,
} from "react-bootstrap-icons";

const CardComp = ({ title, rating, image, onClick }) => {
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

  const textStyle = {
    fontWeight: "bold",
  };

  return (
    <Card style={cardStyles}>
      <Card.Img src={image} style={cardImageStyle}></Card.Img>
      <Card.Body>
        <div className="d-flex align-items-center">
          <StarFill color="yellow" className="mb-2" />
          <p className="text-white mb-2 ms-2">{rating}</p>
          <Star className="text-primary mb-2 ms-4" />
        </div>
        <Card.Title className="text-white" style={titleStyle}>
          {title}
        </Card.Title>
        <WatchlistButton>
          <p className="text-primary" style={textStyle}>
            <Plus style={{ fontSize: "24px" }} /> Watchlist
          </p>
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
              <InfoCircleFill />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
