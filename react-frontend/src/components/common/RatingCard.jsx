import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { TiStarFullOutline } from "react-icons/ti";
import {useState} from "react";


const RatingCard = ({ title, image, rateDate }) => {
  const cardStyle = {
    backgroundColor: "#151515",
    color: "#FFF",
    width: "80rem",
    height: "23rem",
    fontSize: "1.5rem",
    textAlign: "center",
    position: "relative",
    marginBottom: "1rem",
    marginTop: "3rem"
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
    marginTop: "5rem"
  }

  const paragraph = {
    position: "absolute",
    left: 315,
    top: 170,
    textAlign: "start",
    width: "45%"
  }

  const ratingTitle = {
    position: "absolute",
    left: 315,
    top: 120
  }

  const buttons = {
    
    display: "inline",
    margin: "0 8px",
    fontSize: "18px",
    color: "#FFF",
    fontWeight: "bold",
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "10px", 
    textShadow: "1px 2px 5px black",
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

const handleClose = () => setShow(false); 
const handleShow = () => setShow(true);
const closeRating = () => setRating(false); 
const showRating = () => setRating(true);

  return <>
      <Card style={cardStyle}>
        <Card.Img style={imageStyle} src={image}/>
      <h1 style={titleStyle}>{title}</h1>
      
      <Card.Body>
      <div style={border}></div>
        <blockquote className="blockquote mb-0">
          <h3 style={ratingTitle}>Great movie highly recommend</h3>
          <p style={dateRating}>{rateDate}</p>
          {/* <h3>{titleRating}</h3> */}
          <p style={paragraph}> 
            {' '}
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
           {/* {description} */}
           {' '}
          </p>
          {/* <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer> */}
        </blockquote>
        <div style={buttonContainer}>
          <Button variant="warning" style={buttons} onClick={showRating}>Edit Rating</Button>
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
<Button variant="warning" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
Rate
</Button>
</Modal.Footer>
</Modal>
          <Button variant="danger" style={buttons} onClick={handleShow}>Delete Rating</Button>
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
          <Button variant="danger" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
            Yes
          </Button>
          <Button variant="warning" onClick={handleClose} style={{fontWeight: "bold", fontSize: "20px"}}>
            No, take me back!
          </Button>
          </Modal.Footer>
      </Modal>
        </div>
      </Card.Body>
    </Card>
  </>
}
export default RatingCard;
