import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComp = ({ title, text, btnText, image }) => {
  return (
    <div>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">{btnText}</Button>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};

export default CardComp;
