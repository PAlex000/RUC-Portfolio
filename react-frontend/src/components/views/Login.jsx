import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/UserActions";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.userReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ username: inputUsername, password: inputPassword }));
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", token);
      //redirect to a private route maybe?
    }

    if (error) {
      console.log(error);
    }
  }, [token, error]);

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="logoContainer">
          <div className="logo">IMDB</div>
        </div>
        <div className="h4 mb-2 text-center">Sign In</div>
        {error && (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => {}}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <Button className="text-muted px-0" variant="link">
            Forgot password?
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
