import React from "react";
import { Column, Space } from "../Layout";
import Text from "../Typography/Text";
import { Product } from "./product.styles";

const ProductItem = ({ data }) => {
  return (
    <div>
      <Product>
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
          <Text
            height="14"
            black
            weight="600"
            size="16"
            children={data.price}
          />
          <Space smaller />
          <Text className="font" size="10" grey>
            {`${data.stock} (pieces)`}
          </Text>
        </Column>
      </Product>
    </div>
  );
};

export default ProductItem;