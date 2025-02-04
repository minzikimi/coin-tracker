import React, { useEffect, useRef } from "react";
import "../Modal/Modal.css";
import Converter from "../Converter/Converter";

function Modal({ isOpen, onClose }) {
    const dialogRef = useRef("");
  
    useEffect(() => {
      const dialog = dialogRef.current;
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [isOpen]);
  
    return (
      <>
        {isOpen && <div className="modal-backdrop" onClick={onClose}></div>}
        <dialog ref={dialogRef} className="modal">
          <button onClick={onClose} className="close-button">X</button>
          <Converter />
        </dialog>
      </>
    );
  }

  export default Modal;