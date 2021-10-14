import React from "react";
import ReactModal from "react-modal";

const Modal = ({ visible, onClose, children, width, height }) => {
  return (
    <ReactModal
      isOpen={visible}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "transparent",
          zIndex: 10,
        },
        content: {
          width: width || 400,
          height: height || 400,
          opacity: 1,
          zIndex: 11,

          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",

          borderRadius: 16,
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
