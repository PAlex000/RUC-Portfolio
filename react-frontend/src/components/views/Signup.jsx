// React
import { useState, useEffect } from "react";
// Router Dom
import { Link } from "react-router-dom";
// Redux
import { registerUser } from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
// Bootstrap
import { Form, Button, Alert } from "react-bootstrap";
// Helpers
import { validateSignup } from "../../utils/helperFunctions/ClientSideValidation";
// Scss
import "./Signup.scss";

const Signup = () => {
  const [inputFirstName, setInputFirstname] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.userReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateSignup(
      inputFirstName,
      inputLastName,
      inputPhoneNumber,
      inputUsername,
      inputPassword
    );
    if (Object.keys(errors).length === 0) {
      dispatch(
        registerUser({
          inputFirstName,
          inputLastName,
          inputPhoneNumber,
          email: inputUsername,
          password: inputPassword,
        })
      );
    } else {
      setValidationErrors(errors);
      setInputUsername("");
      setInputPassword("");
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", token);
      // Redirect to a private route maybe?
    }

    if (error) {
      console.log(error);
    }
  }, [token, error]);

  return (
    <div className="sign-up__wrapper">
      <div className="sign-up__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="logoContainer">
          <div className="logo">IMDB</div>
        </div>
        <div className="h4 mb-2 text-center">Sign Up</div>
        {error && (
          <Alert dismissible variant="danger">
            Incorrect username or password.
          </Alert>
        )}
        {Object.keys(validationErrors).length > 0 && (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setValidationErrors({})}
          >
            {Object.keys(validationErrors).map((key, index) => (
              <div key={index}>{validationErrors[key]}</div>
            ))}
          </Alert>
        )}
        <Form.Group className="mb-2" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={inputFirstName}
            placeholder="First Name"
            onChange={(e) => setInputFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={inputLastName}
            placeholder="Last Name"
            onChange={(e) => setInputLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={inputPhoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setInputPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={inputUsername}
            placeholder="Email"
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="w-100"
          variant="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
        <div className="d-grid justify-content-end">
          <Link to="/login" className="text-muted px-0 btn btn-link">
            Click to Log in
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
