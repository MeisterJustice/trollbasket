import styled from "styled-components";
import { COLORS } from "../../constants";

export const Margin = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const CartContainer = styled.div`
  background: ${COLORS.LIGHTEST_GREY};
`;

export const Container = styled.div`
  background: ${COLORS.WHITE};
  padding-top: 10px;
  padding-bottom: 5px;
  margin-top: 10px;
  .row-margin {
    margin-top: 10px;
  }
`;

export const CartHeader = styled.div`
  height: 15px;
  width: 100%;
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
  .cart {
    background: ${COLORS.ORANGE};
    width: 16px;
    height: 16px;
    border-radius: 16px;
    position: static;
    left: 4px;
    top: 0px;
  }
  .cart-text {
    width: 300px;
  }
`;

export const Box = styled.div`
  height: 140px;
  width: 343px;
  padding: 5px;

  .box-bottom {
    border-top: 1px solid ${COLORS.LIGHTEST_GREY};
    padding-top: 10px;
  }
  .trash {
    font-size: 23px;
  }
`;
