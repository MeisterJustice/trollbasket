import React from "react";
import { SpinnerStyles } from "./styles";

const Spinner = ({ width = "271px", height = "66px" }) => {
  return (
    <SpinnerStyles>
      <div style={{ width: width }} className="body">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    </SpinnerStyles>
  );
};

export default Spinner;
