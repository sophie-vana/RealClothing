import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ShipmentSelection = () => {
  // State to hold currently selected shipment method
  const [selectedMethod, setSelectedMethod] = useState("");

  // Handle change to shipment method selection
  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <Form.Group controlId="shipmentMethod">
      <Form.Label>Select Shipment Method:</Form.Label>
      <Form.Control
        as="select"
        value={selectedMethod}
        onChange={handleMethodChange}
      >
        <option value="">Select...</option>
        <option value="standard">Standard Shipping</option>
        <option value="express">Express Shipping</option>
        <option value="overnight">Overnight Shipping</option>
      </Form.Control>
    </Form.Group>
  );
};

export default ShipmentSelection;
