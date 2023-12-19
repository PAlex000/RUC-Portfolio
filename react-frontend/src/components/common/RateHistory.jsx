import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { TiStarFullOutline } from "react-icons/ti";
import {useState} from "react";
import { Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

const RateHistory = ({ title, image, rateDate}) => {
  const cardStyle = {
    backgroundColor: "#151515",
    color: "#FFF",
    width: "80rem",
    height: "23rem",
    fontSize: "1.5rem",
    textAlign: "center",
    position: "relative",
    marginBottom: "1rem",
    marginTop: "3rem",
  }

  const imageStyle = {
    position: "absolute",
    width: "18rem",
    height: "23rem",
    left: -1,
    top: -1,
    borderRadius: "0px"
  }

  const titleStyle = {
    position: "absolute",
    left: 310,
    top: 30
  }

  const border = {
    borderBottom: "2px solid #FFF",
    marginTop: "7rem"
  }

  const paragraph = {
    position: "absolute",
    left: 315,
    top: 210,
    textAlign: "start",
    width: "45%"
  }

  const ratingTitle = {
    position: "absolute",
    left: 315,
    top: 160
  }

  const buttonContainer = {
    position: "absolute",
    top: 300,
    right: 20
  }

  const dateRating = {
    position: "absolute",
    top: 10,
    right: 15,
    fontWeight: "bold"
  }

const [show, setShow] = useState(false);
const [rating, setRating] = useState(false);

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

const handleClose = () => setShow(false); 
const handleShow = () => setShow(true);
const closeRating = () => setRating(false); 
const showRating = () => setRating(true);



const buttonStyle = {
    
  display: "inline",
  margin: "0 8px",
  fontSize: "18px",
  color: isHover ? "#000" : "#FFF",
  fontWeight: "bold",
  padding: "0.5rem 0.75rem",
  border: "none",
  borderRadius: "10px", 
  textShadow: "1px 2px 5px black",
}

const buttonStyle1 = {
    
  display: "inline",
  margin: "0 8px",
  fontSize: "18px",
  color: isHoverOne ? "#000" : "#FFF",
  fontWeight: "bold",
  padding: "0.5rem 0.75rem",
  border: "none",
  borderRadius: "10px", 
  textShadow: "1px 2px 5px black",
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

const stars = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "0 0.50rem"
}

const starRating = {
  fontWeight: "bold",
  fontSize: "23px",
  color: "#FFF",
  position: "absolute",
  top: 175,
  right: 87
}

const rateContainer = {
  position: "absolute",
  top: 210,
  right: 100,
}

  return <>
      <Card style={cardStyle}>
        <Card.Img style={imageStyle} src={image}/>
      <h1 style={titleStyle}>{title} <span><FaCircle style={{color: "#FFF"}} size={10}/></span> <span style={{color: "grey", fontSize: "18px"}}>R | 2006</span></h1>
      <Row style={{position: "absolute", top: 80,
  left: 325}}>
      <p style={psColAltern}>Action / Adventure / Drama</p> 

      </Row>
      
      <Card.Body>
      <div style={border}></div>
        <blockquote className="blockquote mb-0">
          <h3 style={ratingTitle}>Great movie highly recommend</h3>
          <p style={dateRating}>{rateDate}</p>
          <p style={paragraph}> 
            {' '}
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
           {' '}
          </p>
        </blockquote>
        <p style={starRating}>Star Rating</p>
        <div className="d-flex flex-row" style={rateContainer}>
        <TiStarFullOutline size={28} className="mt-1"/>  <p style={stars}> 0.00/10 </p>
        </div>
        <div style={buttonContainer}>
          <Button variant={isHover ? "light" : "warning"} style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={showRating}>Edit Rating</Button>
          <Modal show={rating} onHide={closeRating} backdrop="static"
          keyboard={false} style={{
          fontSize: "20px",
fontWeight: "bold",
}}>
<Modal.Header closeButton>
<Modal.Title>Rate movie</Modal.Title>
</Modal.Header>
<Modal.Body>How would you rate this movie?
<div className="d-flex flex-row mt-2">
                <TiStarFullOutline size={30} style={{color: "#DEB522"}} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
              </div>
  <Form className="mt-4">
<Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment your thoughts about the movie</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
</Modal.Body>
<Modal.Footer>
<Button variant={isHover ? "light" : "warning"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px", color: isHover ? "#000" : "#FFF"}}>
Rate
</Button>
</Modal.Footer>
</Modal>
          <Button variant={isHoverOne ? "light" : "danger"} style={buttonStyle1} onMouseEnter={handleMouseEnterAgain} onMouseLeave={handleMouseLeaveAgain} onClick={handleShow}>Delete Rating</Button>
          <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false} style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}>
          <Modal.Header closeButton>
          <Modal.Title>Delete search</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this rating? You cannot undo this action.</Modal.Body>
        <Modal.Footer>
          <Button variant={isHover ? "light" : "danger"} onClick={handleClose} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{fontWeight: "bold", fontSize: "20px", color: isHover ? "#000" : "#FFF"}}>
            Yes
          </Button>
          <Button variant={isHover ? "light" : "warning"} onClick={handleClose} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{fontWeight: "bold", fontSize: "20px", color: isHover ? "#000" : "#FFF"}}>
            No, take me back!
          </Button>
          </Modal.Footer>
      </Modal>
        </div>
      </Card.Body>
    </Card>
  </>
}
export default RateHistory;
