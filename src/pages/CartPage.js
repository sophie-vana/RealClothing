import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { removeFromCart } from "../store/cartSlice";
import Navigation from "../components/navigation";
import ShipmentSelection from "../components/ShipmentSelection";
import HelpModal from "../components/HelpModal";
import "../styles/cartStyle.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const notification = useSelector((state) => state.cart.notification);

  // Function to handle removing item from cart
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <Navigation />
      <Container fluid className="cartList">
        <h2 className="cart">Cart</h2>
        {notification && (
          <Alert variant={notification.type}>{notification.message}</Alert>
        )}
        <Row>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Col key={item.id} xs={12} className="mb-4">
                <div className="cartItem">
                  <div>
                    <h5>{item.name}</h5>
                    <img
                      className="cartImage"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="cartItemDetails">
                    <p>Price: R{item.price.toFixed(2)}</p>
                    <Button
                      className="remove"
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <p>Your cart is empty</p>
            </Col>
          )}
        </Row>
        <Row className="mb-4">
          <Col xs={12}>
            <ShipmentSelection />
            <HelpModal />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <div className="totalCost">
              <h4>
                Total Cost: R
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </h4>
              <Button className="checkout">Checkout</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
