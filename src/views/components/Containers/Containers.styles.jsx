import styled from "styled-components";
import { COLORS } from "../../constants";

export const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  ${(props) =>
    props.center
      ? `
    justify-content: center;
    align-items: center;
  `
      : null};
`;
export const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // margin: 5% auto;
  margin-top: ${(props) => (props.indentTop ? props.indentTop : 15)}px;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 0;
  border-top: ${(props) =>
    props.borderTop ? `1px solid ${COLORS.LIGHTEST_GREY}` : "none"};
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid ${COLORS.LIGHTEST_GREY}` : "none"};
  box-sizing: border-box;
  background: ${(props) => (props.bg ? props.bg : COLORS.WHITE)};
  // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.16);
  border-radius: ${(props) => (props.radius ? props.radius : 0)}px;
  overflow: hidden;
`;
