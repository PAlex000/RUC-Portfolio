import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaRegHeart } from "react-icons/fa";
import {
    // StarFill,
    InfoCircleFill,
  } from "react-bootstrap-icons";


const CardSearch = ({ title, image }) => {
  const cardStyle = {
    backgroundColor: "#313131",
    color: "white",
    width: "14rem",
    height: "28rem",
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

  const buttonStyle = {
    fontWeight: "bold"
  }

  const cardFooterStyleSecond = {
    position: "absolute",
    bottom: -45,
    left: 0,
    width: "100%",
    height: "auto",
    borderTop: "1px solid rgba(0,0,0,.125)",
    padding: "0.75rem 1rem",
    backgroundColor: "#676767",
  };

  const linkStyle = {
    color: "#FFFFFF", 
    fontWeight: "bold", 
    fontSize: "15px", 
    textDecoration: "none"
  }


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
          <div className="d-flex justify-content-between flex-column align-items-center mt-2">
            <Button variant="warning" className="mb-3" style={buttonStyle}>Add as favorite <FaRegHeart style={{fontSize:"18px"}} className="mb-1"/></Button>
            <Button variant="danger" className="mb-4" style={buttonStyle}>Delete search</Button>
          </div>
        </div>
        <div style={cardFooterStyleSecond}>
            <div className="d-flex justify-content-between align-items-center mt-2">
            <a href="#details" style={linkStyle}>View movie description</a><InfoCircleFill color="white" size="18px"/>
        </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardSearch;