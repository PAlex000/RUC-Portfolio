import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

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
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{
        marginLeft: "1rem",
      }}>
        Hi user!
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/profilesettings">Your account</Dropdown.Item>
        <Dropdown.Item href="#ratings">Your ratings</Dropdown.Item>
        <Dropdown.Item href="#bookmarks">Your bookmarks</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
