import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TiStarFullOutline } from "react-icons/ti";

const RatingCard = ({ title, grade, image, reviewText, movieRating, rateDate }) => {
  const cardStyle = {
    backgroundColor: "#151515",
    color: "#FFF",
    width: "80rem",
    height: "15rem",
    fontSize: "1.5rem",
    textAlign: "center",
  };

  return <>
      <Card style={cardStyle}>
      <h1></h1>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </>
}
export default RatingCard;
