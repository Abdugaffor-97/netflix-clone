import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import React from 'react'


const ModalView = () => {
  const [isOpen, setIsOpnen] = React.useState(false);



  return (
    <Modal show={true}>
      <ModalHeader>
        <ModalTitle>Hi</ModalTitle>
      </ModalHeader>
      <ModalBody>asdfasdf</ModalBody>
      <ModalFooter>This is the footer</ModalFooter>
    </Modal>
  );
};

export default ModalView
