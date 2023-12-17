import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const CardComp = ({ title, image, text, btnText }) => {

  const cardMovies = {
    backgroundColor: "#000",
    color: "#FFF",
    height: "50rem",
  }

  const buttonsColAltern = {
    display: "inline",
    margin: "1rem 0.20rem",
    fontSize: "15px",
    color: "#FFF",
    backgroundColor: "transparent",
    fontWeight: "bold",
    padding: "0.5rem",
    borderTop: "none",
    borderBottom: "none",
    borderLeft: "3px solid #E27F38",
    borderRight: "none",
    
  }

  const plot = {
    margin: "1.2rem 0",
    fontSize: "18px",
  }

  const buttons = {
  display: "inline",
  margin: "8px",
  fontSize: "13.5px",
  color: "#FFF",
  // backgroundColor: "#E27F38",
  fontWeight: "bold",
  padding: "0.5rem 0.50rem",
  border: "none",
  borderRadius: "10px", 
  textShadow: "1px 2px 5px black",

  }


  return (
    <>
    <Row className="g-5">
      {Array.from({length: 1}).map((_, idx) => (
      <Col key={idx}>
    <Card style={cardMovies}>
      <Card.Img src={image}/>
      <Card.Body>
        <Card.Title as="h3" className="my-3" style={{textDecoration: "underline"}}>{title}</Card.Title>
      <Button style={buttonsColAltern}>Action</Button> 
      <Button style={buttonsColAltern}>Adventure</Button>
      <Button style={buttonsColAltern}>Drama</Button>

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
