import { WatchlistButton } from "./Buttons";
import Card from "react-bootstrap/Card";
import { StarFill, Star } from "react-bootstrap-icons";

const CardComp = ({ title, rating, image }) => {
  const cardStyles = {
    width: "15rem",
    height: "32.5rem",
    backgroundColor: "#0c0b00",
  };

  const cardImageStyle = {
    width: "100%",
    height: "20rem",
    objectFit: "cover",
  };

  const titleStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.2em",
    maxHeight: "2.4em",
    minHeight: "2.4em",
  };

  const textStyle = {
    fontWeight: "bold",
  };

  return (
    <Card style={cardStyles}>
      <Card.Img src={image} style={cardImageStyle}></Card.Img>
      <Card.Body>
        <div className="d-flex align-items-center">
          <StarFill color="yellow" className="mb-2" />
          <p className="text-white mb-2 ms-2">{rating}</p>
          <Star className="text-primary mb-2 ms-4" />
        </div>
        <Card.Title className="text-white" style={titleStyle}>
          {title}
        </Card.Title>
        <WatchlistButton>
          <p className="text-primary" style={textStyle}>
            Watchlist
          </p>
        </WatchlistButton>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
