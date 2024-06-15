import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../images/favicon.ico";
import "../styles/navStyle.css";

const Navigation = () => {
  const username = useSelector((state) => state.auth.user?.username); // Retrieve username from Redux state

  return (
    <Navbar className="navBar" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={Logo} className="logo" alt="Logo" />
        Real Clothing.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          {username ? (
            <Navbar.Text className="signedIn">
              Signed in as: {username}
            </Navbar.Text>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
