import styled from "styled-components";
import { COLORS } from "../../constants";

export const Margin = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductHeader = styled.div`
  height: 15px;
  width: 100%;
  .details {
    width: 190px;
  }
  .icon {
    margin-right: 5px;
    background: ${COLORS.LIGHTEST_GREY};
    height: 35px;
    width: 35px;
    border-radius: 50px;
  }
  .icon1 {
    background: ${COLORS.LIGHTEST_GREY};
    height: 35px;
    width: 35px;
    border-radius: 10px;
  }
  .font-container {
    height: 35px;
    width: 35px;
  }
`;
