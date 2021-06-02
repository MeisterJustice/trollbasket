import React from "react";
import { MainContainer } from "../../components/Containers/Containers.styles";
import { Space } from "../../components/Layout";
import Header from "./Header";
import { Margin } from "./Product.styles";

const Product = () => {
  return (
    <>
      <MainContainer>
        <Space smallest />
        <Margin>
          <Header />
        </Margin>
      </MainContainer>
    </>
  );
};

export default Product;
