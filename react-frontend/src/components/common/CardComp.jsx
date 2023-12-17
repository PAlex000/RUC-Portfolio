import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiStarFullOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";



const CardComp = ({ title, image, text, btnText }) => {

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

  const heart = {
    position: "absolute",
    backgroundColor: "#EF5454",
    padding: "0.4rem 0.9rem"

  }

  const psColAltern = {
    display: "inline",
    margin: "0.20rem",
    fontSize: "17px",
    color: "grey",
    border: "none",
    backgroundColor: "transparent",
    fontWeight: "bold",
    padding: "0.20rem 0",
    
  }

  const plot = {
    margin: "1.2rem 0",
    fontSize: "18px",
  }

  const buttons = {
  display: "inline",
  margin: "0 2.5px",
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
      <p style={psColAltern}>Action,</p> 
      <p style={psColAltern}>Adventure,</p>
      <p style={psColAltern}>Drama</p>
        <Card.Title as="h4" className="my-3">{title}</Card.Title>
        <div className="d-flex flex-row">
        <TiStarFullOutline size={23} className="mt-1"/>  <p style={stars}> 0.00  <span style={review} className="mx-1">(0 reviews)</span></p>
        </div>
        <p style={plot}>{text}</p>
        <Button variant="danger" style={buttons}>{btnText}</Button>
        <Button variant="warning" style={buttons}>Add Watchlist</Button>

      </Card.Body>
    </Card>
    </Col>
    ))};
    </Row>
    </>
  );
};

export default CardComp;
