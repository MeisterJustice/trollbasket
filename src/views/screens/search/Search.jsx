import React, { useEffect, useState } from "react";
import { MainContainer } from "../../components/Containers/Containers.styles";
import { Margin } from "../homepage/Homepage.styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../application/selectors/products";
import {
  searchProductByNameLoaded,
  searchProductByLocationLoaded,
} from "../../../application/actions/ui";
import ProductItem from "../../components/Product";
import Error from "../../components/Error";
import { Row, Space } from "../../components/Layout";
import Input from "../homepage/Input";

const Search = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const [show, setShow] = useState(true);
  let queryObj = props.location.search?.split("?")[1]?.split("=")[0];
  let query = props.location.search?.split("?")[1]?.split("=")[1];
  useEffect(() => {
    if (queryObj === "name") {
      dispatch(searchProductByNameLoaded(query));
    } else {
      dispatch(searchProductByLocationLoaded(query));
    }
  }, [dispatch, query, queryObj]);

  return (
    <MainContainer>
      <Margin>
        <Error
          show={show}
          setShow={setShow}
          text={`Showing results that match ${query}`}
        />
        <Space smaller />
        <Input />
        <Space smaller />
        <Input location={true} />
        <Row justify="space-between" align="center">
          {products.map((data) => (
            <ProductItem key={data.id} data={data} />
          ))}
        </Row>
      </Margin>
    </MainContainer>
  );
};

export default Search;
