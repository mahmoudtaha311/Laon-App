import React from "react";
import "./FormStle.css";

function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-contant">
          {/* <h1>The Form Has Been Submitted Successfuly</h1> */}
          <h1 style={{color:errorMessage? "red" : "green"}}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Submitted Successfuly"}{" "}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
