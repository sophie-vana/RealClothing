import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearNotification } from "../store/cartSlice"; // Correctly import the actions
import Navigation from "../components/navigation";
import products from "../data/products";
import "../styles/storeStyle.css";
import addItemCart from "../images/addItemCart.png";
import { Link } from "react-router-dom";

const StorePage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.cart.notification);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 3000); // Clear notification after three seconds
  };

  // Function to clear notification on click
  const handleNotificationClick = () => {
    dispatch(clearNotification());
  };

  return (
    <div>
      <Navigation />
      <Container fluid className="storeContainer">
        <Row xs={1} md={2} lg={3}>
          {products.map((product) => (
            <Col key={product.id} className="product-card mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="card-img-top"
                />
                <Card.Body>
                  <Row className="align-items-center">
                    <Col>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                    </Col>
                    <Col xs="auto">
                      <Button
                        className="add"
                        variant="primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        <img
                          className="addItemCart"
                          src={addItemCart}
                          alt="Add to Cart"
                        />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Notification */}
      {notification && (
        <div className="notification-toast">
          {/* Link to cart and clear notification */}
          <Link to="/cart" onClick={handleNotificationClick}>
            {notification}
          </Link>
        </div>
      )}
    </div>
  );
};

export default StorePage;
