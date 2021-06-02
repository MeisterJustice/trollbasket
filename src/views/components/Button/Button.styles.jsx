import styled from "styled-components";

export const ButtonContainer = styled.div`
  .btn {
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    border: ${(props) => (props.border ? `1px solid ${props.border}` : "none")};
    border-radius: ${(props) => (props.radius ? props.radius : 0)}px;
  }
`;
