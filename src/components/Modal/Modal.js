import "../Modal/Modal.css";
import Converter from "../Converter/Converter";

function Modal ({ onClose }){
    return (
        <div>
             <button onClick={onClose}>X</button>
            <Converter />
        </div>
    )
}

export default Modal;