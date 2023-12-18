import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiStarFullOutline } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import {useState} from "react";

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

  const plot = {
    margin: "1.2rem 0",
    fontSize: "18px",
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

  const [isHover, setIsHover] = useState(false);

const [isHoverOne, setIsHoverOne] = useState(false);


   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const handleMouseEnterAgain = () => {
    setIsHoverOne(true);
  }
  
  const handleMouseLeaveAgain = () => {
    setIsHoverOne(false);
  }


  const buttonStyle = {
    display: "inline",
    margin: "0 3px",
    fontSize: "15px",
    color: isHover ? "#000" : "#FFF",
    fontWeight: "bold",
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "10px", 
    textShadow: "1px 2px 5px black",
  }

  const buttonStyle1 = {
    display: "inline",
    margin: "0 3px",
    fontSize: "15px",
    color: isHoverOne ? "#000" : "#FFF",
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
      <Card.Body>
      <p style={psColAltern}>Action /</p> 
      <p style={psColAltern}>Adventure /</p>
      <p style={psColAltern}>Drama</p>
        <Card.Title as="h4" className="my-3">{title}</Card.Title>
        <div className="d-flex flex-row">
        <TiStarFullOutline size={23} className="mt-1"/>  <p style={stars}> 0.00  <span style={review} className="mx-1">(0 reviews)</span></p>
        </div>
        <p style={plot}>{text}</p>
        <Button variant={isHover ? "light" : "danger"} style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{btnText}</Button>
        <Button variant={isHoverOne ? "light" : "warning"} style={buttonStyle1} onMouseEnter={handleMouseEnterAgain} onMouseLeave={handleMouseLeaveAgain}>Add Bookmark</Button>

      </Card.Body>
    </Card>
    </Col>
    ))};
    </Row>
    </>
  );
};

export default CardComp;
