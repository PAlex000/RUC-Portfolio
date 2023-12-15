import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/actions/UserActions";
import { Form, Button, Alert } from "react-bootstrap";
import { validateSignup } from "../../utils/helperFunctions/ClientSideValidation";
import "./Login.scss";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.userReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateSignup(
      firstName,
      lastName,
      phoneNumber,
      inputEmail,
      inputPassword
    );
    if (Object.keys(errors).length === 0) {
      dispatch(
        signupUser({
          firstName,
          lastName,
          phoneNumber,
          email: inputEmail,
          password: inputPassword,
        })
      );
    } else {
      setValidationErrors(errors);
      setInputEmail("");
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
        {error && <Alert variant="danger">{error}</Alert>}
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
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={inputEmail}
            placeholder="Email"
            onChange={(e) => setInputEmail(e.target.value)}
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
      </Form>
    </div>
  );
};

export default Signup;
