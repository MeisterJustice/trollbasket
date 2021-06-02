import React, { useEffect } from "react";
import {
  Container,
  MainContainer,
} from "../../components/Containers/Containers.styles";
import { Row, Space } from "../../components/Layout";
import Title from "../../components/Typography/Title";
import { Margin } from "./Homepage.styles";
import Header from "./Header";
import Input from "./Input";
import Horizontal from "./HorizontalScroll";
import FeaturedCategories from "./Featured";
import BottomNavigation from "./BottomNav";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../application/selectors/products";
import { pageLoaded } from "../../../application/actions/ui";
import { getLoading } from "../../../application/selectors/ui";
import ProductItem from "../../components/Product";

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <>
      <MainContainer>
        <Margin>
          <Title children="Trollbasket" size="18" weight="600" />
        </Margin>
        <Container borderTop borderBottom>
          <Header />
        </Container>
        <Space small />
        <Input />
        <Space small />
        <Horizontal />
        <Space small />
        <FeaturedCategories />
        <Space small />
        {loading ? (
          "loading..."
        ) : (
          <Margin>
            <Row justify="space-between">
              {products.map((data) => (
                <ProductItem key={data.id} data={data} />
              ))}
            </Row>
          </Margin>
        )}
        <BottomNavigation />
      </MainContainer>
    </>
  );
};

export default Homepage;
