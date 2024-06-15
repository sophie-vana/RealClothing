import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/heroStyle.css";

// Homepage Centre Hero component
const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Real Clothing.</h1>
            <p className="lead">
              A unisex, sustainable fasion brand that produces real clothing for
              real people.
            </p>
            <Button size="lg">Browse the brand</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
