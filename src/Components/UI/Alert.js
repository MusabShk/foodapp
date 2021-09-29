import React from "react";

const Alert = (props) => {
  return (
    <div class="alert alert-warning" role="alert">
      {props.text}
    </div>
  );
};

export default Alert;
