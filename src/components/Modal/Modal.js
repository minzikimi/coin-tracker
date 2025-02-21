import React, { useEffect, useRef } from "react";
import "../Modal/Modal.css";
import Converter from "../Converter/Converter";

function Modal({ isOpen, onClose }) {
  const dialogRef = useRef("");

  useEffect(() => {
    const dialog = dialogRef.current; //using ref to access dialaog(dom) element
    // can be simplified with ternary operator
    isOpen ? dialog.showModal() : dialog.close();
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="modal-backdrop" onClick={onClose}></div>}
      <dialog ref={dialogRef} className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <Converter />
      </dialog>
    </>
  );
}

export default Modal;
