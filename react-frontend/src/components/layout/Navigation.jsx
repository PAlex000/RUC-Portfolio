import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <Navbar className="navbar-custom" bg="dark" expand="lg">
      <div className="burger-icon-container">
        <List className="burger-icon" style={{ color: "#fff" }} />
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
          <Link to="/bookmarks" className="nav-link">
            Watchlist
          </Link>
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
