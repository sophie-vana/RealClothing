import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { setUser, setError } from "../store/authenticationSlice";
import "../styles/loginStyle.css";

const RegistrationForm = ({ onSwitchForm }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated validation for demonstration
    if (!formData.email.includes("@")) {
      dispatch(setError("Invalid email"));
      return;
    }
    // Dispatch action to register user
    dispatch(setUser(formData));
    onSwitchForm(); // Switch to login form after registration
  };

  // Function to handle input changes and update formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="prompt">Register for a Real Clothing Account</h2>
      <Form onSubmit={handleSubmit} className="registerForm">
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="registerBtn">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
