import styled from "styled-components";
import COLORS from "../../constants/colors";

export const TextDiv = styled.span`
  display: flex;
  align-items: center;
  height: ${(props) => (props.height ? props.height : null)}px;
  width: ${(props) => (props.width ? props.width : null)}px;
  margin-left: ${(props) => (props.indentLeft ? props.indentLeft : null)}px;
  margin-right: ${(props) => (props.indentRight ? props.indentRight : null)}px;
  margin-top: ${(props) => (props.indentTop ? props.indentTop : null)}px;
  margin-bottom: ${(props) =>
    props.indentBottom ? props.indentBottom : null}px;
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: ${(props) => (props.family ? props.family : null)};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => (props.size ? props.size : "16")}px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : null)}px;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0.15px"};
  text-decoration: ${(props) =>
    props.lineThrough === "true" ? "line-through" : "none"};
  color: ${COLORS.BLACK};

  ${(props) => (props.darkGrey ? `color: ${COLORS.DARK_GREY}` : null)};
  ${(props) => (props.blue ? `color: ${COLORS.BLUE}` : null)};
  ${(props) => (props.grey ? `color: ${COLORS.GREY}` : null)};
  ${(props) => (props.red ? `color: ${COLORS.RED}` : null)};
  ${(props) => (props.white ? `color: ${COLORS.WHITE}` : null)};
  ${(props) => (props.lightGrey ? `color: ${COLORS.LIGHT_GREY}` : null)};
  ${(props) => (props.black ? `color: ${COLORS.BLACK}` : null)};
  ${(props) => (props.uppercase ? "text-transform: uppercase" : null)};
  ${(props) => (props.capitalize ? "text-transform: capitalize" : null)};
  ${(props) => (props.select ? "cursor: pointer" : null)};

  @media (max-width: 1024px) {
    font-size: ${(props) => (props.mediaSize ? props.mediaSize : "16")}px;
  }
`;
export const TitleDiv = styled.h1`
  display: flex;
  align-items: center;
  height: ${(props) => (props.height ? props.height : null)}px;
  width: ${(props) => (props.width ? props.width : null)}px;
  margin: 0;
  font-family: ${(props) => (props.family ? props.family : null)};
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => (props.size ? props.size : "32")}px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : null)}px;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0.1px"};
  color: ${COLORS.LIGHTER_GREY};
  ${(props) => (props.darkGreen ? `color: ${COLORS.DARK_GREEN}` : null)};
  ${(props) => (props.blue ? `color: ${COLORS.BLUE}` : null)};
  ${(props) => (props.darkGrey ? `color: ${COLORS.DARK_GREY}` : null)};
  ${(props) => (props.grey ? `color: ${COLORS.GREY}` : null)};
  ${(props) => (props.lightGrey ? `color: ${COLORS.LIGHT_GREY}` : null)};
  ${(props) => (props.uppercase ? "text-transform: uppercase" : null)};
`;
