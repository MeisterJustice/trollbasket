import styled from "styled-components";
import { COLORS } from "../../constants";

export const Margin = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const HomeHeader = styled.div`
  height: 15px;
  width: 100%;

  .icon {
    margin-right: 5px;
    background: ${COLORS.LIGHTEST_GREY};
    height: 35px;
    width: 35px;
    border-radius: 50px;
  }
  .font-container {
    height: 35px;
    width: 35px;
  }
  .select {
    border: none;
    font-size: 15px;
    background: ${COLORS.WHITE};
    width: 75px;
    padding-top: 2px;
    color: ${COLORS.BLACK};
  }

  .opt {
    border: none;
    font-size: 13px;
    color: ${COLORS.BLACK};
  }
`;

export const HomeInput = styled.div`
  .input-icons .i {
    position: absolute;
  }

  .input-icons {
    width: 100%;
  }

  .input-icon {
    padding: 10px;
    min-width: 50px;
    font-size: 20px;
    margin-top: 3px;
  }

  .input-field {
    width: 95%;
    height: 45px;
    padding: 10px;
    text-align: center;
    background: ${COLORS.LIGHTEST_GREY};
    border: none;
  }
`;

export const HorizontalScroll = styled.div`
  .scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .card {
    display: inline-block;
    height: 145px;
    width: 325px;
    border-radius: 10px;
    margin: 10px;
  }
  .card-row {
    height: 139px;
  }
  .btn {
    height: 31px;
    width: 91px;
    background: ${COLORS.BLUE};
    color: ${COLORS.WHITE};
    border: none;
    border-radius: 5px;
  }
  .first-card {
    background: ${COLORS.DARK_BLUE};
  }
  .second-card {
    background: ${COLORS.ORANGE};
  }
  .third-card {
    background: ${COLORS.BLUE};
  }
`;
export const FeaturedContainer = styled.div`
  height: 70px;
`;
export const Featured = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};

  .featured-row {
    width: 50px;
    height: 50px;
  }
  .font-size {
    font-size: 20px;
  }
`;

export const BottomNav = styled.div`
  .mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transform: translateZ(0);
    height: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 -2px 5px -2px ${COLORS.LIGHTEST_GREY};
    background-color: ${COLORS.WHITE};
  }
  .nav-row {
    height: 75px;
  }
  .nav-icon {
    font-size: 25px;
  }
  .mobile-bottom-nav__item {
    text-align: center;
    font-size: 12px;
    cursor: pointer;
  }
  .active {
    color: ${COLORS.BLUE};
  }
`;
