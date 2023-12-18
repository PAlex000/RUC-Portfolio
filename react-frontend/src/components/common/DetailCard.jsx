import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { StarFill } from "react-bootstrap-icons";

const DetailCard = ({
  title,
  grade,
  image,
  reviewText,
  movieRating,
  rateDate,
}) => {
  const cardStyle = {
    backgroundColor: "#313131",
    color: "white",
    width: "80rem",
    height: "15rem",
    fontSize: "1.5rem",
    textAlign: "justify",
  };

  const titleStyle = {
    lineHeight: "1rem",
    maxHeight: "2rem",
    position: "absolute",
    top: 0,
    left: "20%",
    width: "80%",
    textAlign: "center",
    fontSize: "2rem",
  };
  const reviewTextStyle = {
    lineHeight: "1rem",
    maxHeight: "2rem",
    position: "absolute",
    top: "20%",
    left: "20%",
    width: "80%",
  };
  const gradeStyle = {
    lineHeight: "1rem",
    maxHeight: "2rem",
    position: "absolute",
    top: "50%",
    left: "20%",
    width: "80%",
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "20%",
    objectFit: "cover",
  };
  const movieRatingStyle = {
    lineHeight: "1rem",
    maxHeight: "1rem",
    position: "absolute",
    top: "40%",
    width: "80%",
    left: "20%",
  };
  const rateDateStyle = {
    lineHeight: "1rem",
    maxHeight: "1rem",
    position: "absolute",
    top: "60%",
    width: "80%",
    left: "20%",
  };

  const cardFooterStyle = {
    position: "absolute",
    bottom: 0,
    left: "20%",
    width: "80%",
    backgroundColor: "#313131",
  };

  const movieGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: "20px",
  };

  const movieItemStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  const moviePosterStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
  };

  return (
    <Card style={cardStyle} className="mt-3">
      <Card.Img src={image} style={imageStyle} />
      <Card.Body>
        <Card.Title style={titleStyle} className="mt-2">
          {title}
        </Card.Title>
        ,
        <Card.Text style={reviewTextStyle} className="p-2">
          Your review: {reviewText}
        </Card.Text>
        <Card.Text style={gradeStyle} className="p-2">
          Grade: {grade}
        </Card.Text>
        <div style={movieRatingStyle} className="d-flex align-items-center p-2">
          <Card.Text className="d-flex align-items-center">
            Movie rating: {movieRating}
            <div style={{ paddingLeft: "0.5rem" }}>
              <StarFill></StarFill>
            </div>
          </Card.Text>
        </div>
        <div>
          <Card.Text style={rateDateStyle} className="p-2 mt-2">
            RateDate: {rateDate}
          </Card.Text>
        </div>
        <div
          style={cardFooterStyle}
          className="d-flex justify-content-center p-2"
        >
          <Button style={{ marginRight: "1em" }}>Edit</Button>
          <Button>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DetailCard;
