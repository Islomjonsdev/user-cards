import React from "react";
import "./Modal.scss";

const Modal = ({ children, close }) => {
  return (
    <div
      className="modalContainer"
      onClick={() => {
        document.body.style.overflowY = "auto";
        close(false);
      }}
    >
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;