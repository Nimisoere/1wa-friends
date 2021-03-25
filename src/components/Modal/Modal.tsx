import React from "react";
import ReactModal from "react-modal";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {}

const Modal: React.FC<Props> = ({ modal, hide }) => {
  React.useEffect(() => () => {
      hide();
    }, [hide]);
  return (
    <ReactModal
      style={{
        overlay: {
          position: "fixed",
          zIndex: 99999,
          backgroundColor: "rgba(0,0,0,0.6)",
          ...modal.modalProps.style?.overlay,
        },
        content: {
          maxWidth: "800px",
          margin: "auto",
          height: "auto",
          padding: 0,
          border: "none",
          backgroundColor: "transparent",
        },
      }}
      {...modal.modalProps}
    >
      {modal?.component}
    </ReactModal>
  );
};

export default Modal;
