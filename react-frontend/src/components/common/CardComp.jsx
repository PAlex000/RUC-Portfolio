import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  StarFill,
  InfoCircleFill,
  PlayFill,
  PlusCircleFill,
} from "react-bootstrap-icons";

const CardComp = ({ title, rating, image }) => {
  const cardStyle = {
    backgroundColor: "#313131",
    color: "white",
    width: "14rem",
    height: "23rem",
  };

  const titleStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.2em",
    maxHeight: "2.4em",
  };

  const imageStyle = {
    height: "220px",
    objectFit: "cover",
  };

  const cardFooterStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    borderTop: "1px solid rgba(0,0,0,.125)",
    padding: "0.75rem 1.25rem",
    backgroundColor: "#313131",
  };

  return (
    <Card style={cardStyle} className="mt-5">
      <Card.Img variant="top" src={image} style={imageStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item
            style={{ backgroundColor: "#313131", border: "none" }}
          >
            {/* <StarFill color="yellow" /> {rating} */}
          </ListGroup.Item>
        </ListGroup>
        <div style={cardFooterStyle}>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <PlusCircleFill color="white" />
            <Button variant="warning">Watchlist</Button>
            <PlayFill color="white" />
            <InfoCircleFill color="white" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
