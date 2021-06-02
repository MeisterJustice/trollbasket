import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => (props.column ? "initial" : "wrap")};
  flex-basis: ${(props) => (props.column ? "100%" : "initial")};
  flex: ${(props) => (props.column ? 1 : "initial")};
  justify-content: ${(props) => (props.justify ? props.justify : "initial")};
  align-items: ${(props) => (props.align ? props.align : "initial")};
  width: 100%;
  margin: 0;
  margin-top: ${(props) => (props.margin_top ? props.margin_top : 0)}px;
  ${(props) => (props.first ? "margin-top: 50px" : "")};
  ${(props) => (props.small ? "margin-top: 30px" : "")};
  ${(props) => (props.smaller ? "margin-top: 15px" : "")};
  ${(props) => (props.landingImage ? "height: 100%" : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${(props) => (props.scalar ? props.scalar : 1)};
  order: ${(props) => (props.order ? props.order : null)};
  align-items: ${(props) => props.layout};
  padding: ${(props) => (props.padding ? props.padding : null)}%;
  min-width: ${(props) => (props.minWidth ? props.minWidth : null)}px;
  @media (max-width: 450px) {
    align-items: ${(props) => props.media};
    margin-top: ${(props) => props.media_margin};
  }
`;

export const Space = styled.div`
  position: relative;

  ${(props) => (props.first ? "margin-top: 0" : "margin-top: 50px")};
  ${(props) => (props.small ? "margin-top: 30px" : "")};
  ${(props) => (props.smaller ? "margin-top: 7%" : "")};
  ${(props) => (props.smallest ? "margin-top: 3%" : "")};
  ${(props) => (props.tiny ? "margin-top: 2px" : "")};
`;
