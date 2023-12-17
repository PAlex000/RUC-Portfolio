// React
import { useState, useEffect } from "react";
// React Router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Redux
import { loginUser } from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
// Bootstrap
import { Form, Button, Alert } from "react-bootstrap";
import { validateLogin } from "../../utils/helperFunctions/ClientSideValidation";
// Styling
import "./Login.scss";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, token, userId } = useSelector(
    (state) => state.userReducer
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateLogin(inputUsername, inputPassword);
    if (Object.keys(errors).length === 0) {
      dispatch(loginUser({ inputUsername, inputPassword }));
    } else {
      setValidationErrors(errors);
      setInputUsername("");
      setInputPassword("");
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", token);
      localStorage.setItem("userId", userId);
      navigate("/");
    }

    if (error) {
      setInputUsername("");
      setInputPassword("");
      console.log(error);
    }
  }, [token, error, userId, navigate]);

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="logoContainer">
          <div className="logo">IMDB</div>
        </div>
        <div className="h4 mb-2 text-center">Sign In</div>
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
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
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
          {loading ? "Logging In..." : "Log In"}
        </Button>
        <div className="d-grid justify-content-end">
          <Link to="/signup" className="text-muted px-0 btn btn-link">
            Click to Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
