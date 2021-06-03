import React from "react";
import { Row } from "../Layout";
import { ErrorContainer } from "./Error.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Title from "../Typography/Title";
import { COLORS } from "../../constants";

const Error = ({ text, show, setShow }) => {
  return (
    <Row justify="center">
      <ErrorContainer show={show}>
        <Row className="row" align="center" justify="space-between">
          <Title size={15} darkGreen>
            {text}
          </Title>
          <FontAwesomeIcon
            onClick={() => setShow(false)}
            color={COLORS.DARK_GREY}
            icon={faTimes}
          />
        </Row>
      </ErrorContainer>
    </Row>
  );
};

export default Error;
