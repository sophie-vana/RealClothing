import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { loginUser, setError } from "../store/authenticationSlice";
import "../styles/loginStyle.css";

const LoginForm = ({ onSwitchForm }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(""); // Store username input
  const [password, setPassword] = useState(""); // Store password input

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated validation for demonstration
    if (username.trim() === "") {
      dispatch(setError("Please enter a username"));
      return;
    }
    // Dispatch action to log in user
    dispatch(loginUser({ username }));
    setUsername(""); // Clear username after login
  };

  return (
    <div>
      <h2 className="prompt">Login to your Real Clothing Account</h2>
      <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="loginBtn">
          Login
        </Button>
        {/* Button to switch to registration form */}
        <p className="registerPrompt">
          Don't have an account?{" "}
          <Button variant="link" onClick={onSwitchForm}>
            Register
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
