import styled from "styled-components";
import { COLORS } from "../../constants";

export const Margin = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProductContainer = styled.div`
  background: ${COLORS.LIGHTEST_GREY};
`;

export const Container = styled.div`
  background: ${COLORS.WHITE};
  padding-top: 10px;
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
  .cart {
    background: ${COLORS.ORANGE};
    width: 16px;
    height: 16px;
    border-radius: 16px;
    position: static;
    left: 4px;
    top: 0px;
  }
`;

export const ProductImageContainer = styled.div`
  padding: 20px;
  background: ${COLORS.LIGHTEST_GREY};
`;

export const ProductDescription = styled.div`
  height: 53px;
  width: 100%;
  .desc-row {
    height: 53px;
  }
`;

export const ProductReview = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  .clip-star {
    background: ${COLORS.YELLOW};
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    display: inline-block;
    height: 18px;
    width: 18px;
  }
  .empty {
    background: ${COLORS.LIGHTEST_GREY};
  }
  .img {
    border-radius: 28px;
    object-fit: cover;
  }
`;

export const ProductBtnContainer = styled.div`
  height: 80px;
  width: 100%;
  .btn-row {
    height: 80px;
  }
`;
