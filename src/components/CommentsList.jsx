import Modal from "react-bootstrap/Modal";
import React from 'react'
import { Button } from "react-bootstrap";


const ModalView = () => {
  const [isOpen, setIsOpnen] = React.useState(false);

  const showModal = () => {
    setIsOpnen(true)
  }

  const hideModal = () => {
    setIsOpnen(false)
  }



  return (
    <>
      <Button onClick={showModal}>Display Modal</Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalView
