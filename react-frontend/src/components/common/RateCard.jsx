
import Card from "react-bootstrap/Card";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const RateCard = () => {
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


  const border = {
    borderBottom: "2px solid #FFF",
    marginTop: "9.25rem"
  }

  const paragraph = {
    position: "absolute",
    left: 30,
    top: 180,
    textAlign: "start",
    width: "45%"
  }

  const ratingTitle = {
    position: "absolute",
    left: 30,
    top: 115
  }

  const buttonContainer = {
    position: "absolute",
    top: 265,
    right: 30
  }

  const dateRating = {
    position: "absolute",
    top: 10,
    right: 15,
    fontWeight: "bold"
  }


const stars = {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "0 0.50rem"
  }

  
  const rateContainer = {
    position: "absolute",
    top: 75,
    left: 25,
  }

  const featured = {
    position: "absolute",
    left: -1,
    top: -1,
    backgroundColor: "#DEB522",
    padding: "0.30rem 0.75rem",
    height: "3.25rem",
    fontWeight: "bold",
    borderBottomRightRadius: "10px",
    textShadow: "1px 2px 5px black",
  }

  const hi = {
    display: "inline",
    padding: "0 1.5rem"
  }

  const user = {
    position: "absolute",
    top: 330,
    left: 35,
    fontWeight: "bold"
  }

  return <>
      <Card style={cardStyle}>      
      <Card.Body>
        <p style={featured}>Featured rating  <TiStarFullOutline style={{filter: "drop-shadow(1px 3px 5px black)", paddingBottom: "0.25rem"}} size={30}/> </p>
      <div className="d-flex flex-row" style={rateContainer}>
        <TiStarFullOutline size={28} className="mt-1"/>  <p style={stars}> 0.00/10 </p>
        </div>
      <h3 style={ratingTitle}>Great movie highly recommend</h3>
      <div style={border}></div>
        <blockquote className="blockquote mb-0">
          <p style={dateRating}>2023-12-18</p>
          {/* <h3>{titleRating}</h3> */}
          <p style={paragraph}> 
            {' '}
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
           {/* {description} */}
           {' '}
          </p>
          <footer className="blockquote-footer" style={user}>
            Anonymous
          </footer>
        </blockquote>
        <div style={buttonContainer}>
          <p style={{fontWeight: "bold", fontSize: "20px"}}>Was it helpful?</p>
          <div className="d-flex flex-row">
          <p style={hi}><span>< FaRegThumbsUp /></span> 0 </p>
          <p style={hi}><span>< FaRegThumbsDown /></span> 0 </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  </>
}
export default RateCard;