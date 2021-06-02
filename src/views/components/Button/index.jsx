import React from "react";
import { ButtonContainer } from "./Button.styles";

const Button = (props) => {
  return (
    <ButtonContainer {...props}>
      <button
        onClick={props.handleClick ? () => props.handleClick : null}
        className="btn"
      >
        {props.text}
      </button>
    </ButtonContainer>
  );
};

export default Button;
