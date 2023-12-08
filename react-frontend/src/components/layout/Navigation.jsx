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
        <Navbar.Brand as={Link} to="/">
          IMDB
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/explorer" className="nav-link">
            Explorer
          </Link>
          <Link to="/details" className="nav-link">
            Details
          </Link>
          <Link to="/bookmark" className="nav-link">
            Bookmark
          </Link>
          <Link to="/ratinghistory" className="nav-link">
            RatingHistory
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
