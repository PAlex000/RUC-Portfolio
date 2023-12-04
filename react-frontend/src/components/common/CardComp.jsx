import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComp = ({ title, btnText, image }) => {
  return (
    <div>
      <Card style={{ width: "14rem" }} className="mt-5">
        <Card.Img
          variant="top"
          src={image}
          style={{ maxHeight: "220px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button className="mb-4 mt-4" variant="primary">
            {btnText}
          </Button>
          <Button variant="primary">{btnText}</Button>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};

export default CardComp;
