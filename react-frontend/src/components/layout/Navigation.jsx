import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <Navbar className="navbar-custom" bg="dark" expand="lg">
      <Container>
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
