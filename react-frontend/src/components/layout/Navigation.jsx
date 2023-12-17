import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavigationOpen from "./NavigationToggled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar className="navbar-custom" bg="dark" expand="lg">
        <div className="burger-icon-container">
          <List
            onClick={toggleMenu}
            className="burger-icon"
            style={{ color: "#fff" }}
          />
        </div>
        <Container className="justify-content-start">
          <Navbar.Brand as={Link} to="/" className="logo">
            IMDB
          </Navbar.Brand>
          <Form className="search-wrapper d-flex">
            <FormControl
              type="search"
              placeholder="Search Recommendations..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="ms-auto">
            <Link to="/login" className="nav-link">
              Sign in
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <NavigationOpen isOpen={isOpen} onChange={setIsOpen} />
    </>
  );
};

export default Navigation;
