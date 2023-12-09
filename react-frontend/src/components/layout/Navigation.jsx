import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// @Cristina | Instead of using the Nav.Link you will have to use the Link from 'react-router-dom' which is imported. I've done the rest of the config for react-router-dom
// The Navbar is just a placeholder I found on the bootstrap website.

const Navigation = () => {
  return (
    <Navbar
      className="d-flex justify-content-between"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">IMDB</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="bookmark">Bookmark</Nav.Link>
          <Nav.Link href="ratinghistory">RatingHistory</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
