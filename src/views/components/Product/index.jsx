import React from "react";
import { Column, Space } from "../Layout";
import Text from "../Typography/Text";
import { Product, ProductContainer } from "./product.styles";
import { Link } from "react-router-dom";
import Title from "../Typography/Title";

const ProductItem = ({ data }) => {
  return (
    <ProductContainer>
      <Product>
        <Link className="test-deco" to={`/product/${data.id}`}>
          <Column>
            <img
              className="image"
              height="120"
              width="105"
              src={data.image}
              alt={data.name}
            />
            <Space smaller />
            <Text height="35" grey children={`${data.name.substring(0, 25)}`} />
            <Space smaller />
            <Space smaller />

            <Title
              height="16"
              black
              weight="600"
              size="16"
              children={data.price}
            />
            <Space tiny />
            <Text className="font" size="10" grey>
              {`${data.stock} (pieces)`}
            </Text>
          </Column>
        </Link>
      </Product>
    </ProductContainer>
  );
};

export default ProductItem;
