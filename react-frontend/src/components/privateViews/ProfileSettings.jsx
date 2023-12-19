/* import { Link } from "react-router-dom"; */
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../../redux/actions/UserActions";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ArrowRight } from "react-bootstrap-icons";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import RecentlySearched from "../layout/RecentlySearched";

const backgroundContainer = {
  backgroundColor: "#000",
};

const cardHeader = {
  backgroundColor: "#676767",
  color: "#FFFFFF",
};

const cardBody = {
  backgroundColor: "#303030",
};

const cardText = {
  color: "#FFFFFF",
  fontSize: "23px",
};

const buttonFont = {
  fontSize: "20px",
  color: "#000000",
  fontWeight: "bold",
};

const icon = {
  fontSize: "30px",
};

const ProfileSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");

  const userId = useSelector((state) => state.userReducer.userId);
  const userDetails = useSelector((state) => state.userReducer.userDetails) || {
    userId: "",
    email: "jd@mail.dk",
    firstName: "John ",
    lastName: "Doe",
    phoneNumber: "88888888",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetails(userId));
    }
  }, [dispatch, userId]);

  const handleOpenModal = () => {
    setShowModal(true);
    setEditedEmail(userDetails.email || "");
    setEditedPassword("");
  };
  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleCloseModal();
  };

  useEffect(() => {
    setEditedEmail(userDetails.email || "");
  }, [userDetails]);

  return (
    <>
      <Container className="px-1" fluid style={backgroundContainer}>
        <Row className="justify-content-md-center">
          <Col className="p-5 text-center">
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "50px",
                marginBottom: "2rem",
              }}
            >
              {userDetails.firstName && userDetails.lastName
                ? `${userDetails.firstName} ${userDetails.lastName}`
                : "Loading..."}
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-evenly mt-5">
          <Col md={4} className="g-2">
            <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">
                About You
              </Card.Header>
              <Card.Body style={cardBody}>
                {userDetails.email && (
                  <Card.Text style={cardText} className="mt-4">
                    <MdOutlineEmail className="mx-3" style={icon} />
                    {userDetails.email}
                  </Card.Text>
                )}
                {userDetails.phoneNumber && (
                  <Card.Text style={cardText}>
                    <MdOutlinePermPhoneMsg className="mx-3" style={icon} />
                    {userDetails.phoneNumber}
                  </Card.Text>
                )}
                <Button
                  className="mt-4 mb-2 mx-3"
                  variant="warning"
                  style={buttonFont}
                  onClick={handleOpenModal}
                >
                  Edit your profile <ArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 4, offset: 1 }} className="g-2">
            <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">
                Your ratings
              </Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mx-3 mt-4">
                  Movie worth of 5 stars? Or maybe 8 stars? Visit the movies you
                  have seen and rate them accordingly...to your feelings!
                </Card.Text>
                <Button
                  className="mt-4 mb-2 mx-3"
                  variant="warning"
                  style={buttonFont}
                >
                  Get Started! <ArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 4, offset: 6 }} className="g-2 mb-5">
            <Card border="dark">
              <Card.Header as="h2" style={cardHeader} className="p-3">
                Your bookmarks
              </Card.Header>
              <Card.Body style={cardBody}>
                <Card.Text style={cardText} className="mx-3 mt-4">
                  There are no any bookmarks...yet! Visit any movie you have
                  watched and feel free to bookmark it, easy peasy!
                </Card.Text>
                <Button
                  className="mt-4 mb-2 mx-3"
                  variant="warning"
                  style={buttonFont}
                >
                  Get Started! <ArrowRight />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <RecentlySearched />
    </>
  );
};

export default ProfileSettings;
