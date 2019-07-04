import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default SaveBtn;
