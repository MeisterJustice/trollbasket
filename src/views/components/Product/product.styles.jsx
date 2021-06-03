import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 30%;
  margin-top: 20px;
`;

export const Product = styled.div`
  height: 210px;
  width: 100%;
  margin-top: 20px;
  .image {
    object-fit: contain;
    border-radius: 20px;
  }
  .test-deco {
    text-decoration: none;
  }
`;
