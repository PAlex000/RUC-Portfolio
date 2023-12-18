import React from "react";
import { Card, Button } from "react-bootstrap";

const cardStyles = {
  width: "15rem",
  height: "20rem",
  marginTop: "2rem",
  backgroundColor: "#0c0b00",
  border: "2px solid #f5c618",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const UserCard = ({ firstName, lastName, onDelete }) => {
  return (
    <Card style={cardStyles}>
      <Card.Body className="d-flex flex-column justify-content-between mt-4">
        <div className="text-center">
          <h2 className="text-white mb-2">{firstName}</h2>
          <h2 className="text-white mb-2">{lastName}</h2>
        </div>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
