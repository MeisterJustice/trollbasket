import styled from "styled-components";
import { COLORS } from "../../constants";

export const ErrorContainer = styled.div`
  height: 36px;
  width: 343px;
  background: ${COLORS.LIGHT_GREEN};
  padding: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
  .row {
    height: 36px;
    width: 343px;
  }
`;
