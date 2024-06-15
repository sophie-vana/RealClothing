import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

// Logic to display or hide shipping help modal
const HelpModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button variant="link" onClick={handleShowModal}>
        Need Help?
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Standard Shipping: 3-5 working days (Aramex)</p>
          <p>Express Shipping: 1-3 working days (CourierGuy)</p>
          <p>
            Overnight Shipping: 24 hours from nearest working day since order
            time.{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpModal;
