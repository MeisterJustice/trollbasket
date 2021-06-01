import React from "react";
import { ModalStyles } from "./styles";
import { FaTimes } from "react-icons/fa";
import { Column } from "../Layout";

const Modal = ({ closeModal, children }) => {
  const closeicon = () => (
    <FaTimes onClick={closeModal} size="1em" color="#0000FF" />
  );
  return (
    <ModalStyles>
      <div className="overlay">
        <div className="content">
          <Column>
            <div className="close">{closeicon()}</div>
            <div className="body">{children}</div>
          </Column>
        </div>
      </div>
    </ModalStyles>
  );
};

export default Modal;
