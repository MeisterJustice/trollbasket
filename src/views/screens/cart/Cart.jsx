import React, { useEffect } from "react";
import Button from "../../components/Button";
import { MainContainer } from "../../components/Containers/Containers.styles";
import { Row, Space } from "../../components/Layout";
import Title from "../../components/Typography/Title";
import { COLORS } from "../../constants";
import { Margin, CartContainer, Container } from "./Cart.styles";
import CartItem from "./CartItem";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../application/selectors/products";
import { pageLoaded } from "../../../application/actions/ui";
import { getLoading } from "../../../application/selectors/ui";
import ProductItem from "../../components/Product";
import Text from "../../components/Typography/Text";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <>
      <MainContainer>
        <Space smallest />
        <Margin>
          <Header />
        </Margin>
        <Space small />
        <Space small />
        <CartContainer>
          <Space smallest />
          <Margin>
            {[1, 2, 3].map((cart, index) => (
              <CartItem key={index} />
            ))}
          </Margin>
          <Space small />
          <Container>
            <Margin>
              <Row justify="space-between" align="center">
                <Title size="20">Subtotal</Title>
                <Title size="20">18,000</Title>
              </Row>
              <Space smallest />
              <Row justify="space-between" align="center">
                <Title weight="600" size="20">
                  Total
                </Title>
                <Title weight="600" size="20">
                  18,000
                </Title>
              </Row>
              <Space smallest />
              <Row justify="center">
                <Button
                  height="56"
                  width="352"
                  bg={COLORS.BLUE}
                  color={COLORS.WHITE}
                  text="Checkout"
                  radius="5"
                  handleClick={() => null}
                />
              </Row>
            </Margin>
            <Space smallest />
          </Container>
          <Space smallest />
          <Container>
            <Margin>
              <Row align="center" justify="space-between">
                <Title darkGrey size="20">
                  Recently Viewed
                </Title>
                <Title blue size="18">
                  View All
                </Title>
              </Row>
              <Space small />
              {loading ? (
                <Text>Loading</Text>
              ) : (
                <Row justify="space-between">
                  {products.map((data) => (
                    <ProductItem key={data.id} data={data} />
                  ))}
                </Row>
              )}
            </Margin>
          </Container>
        </CartContainer>
      </MainContainer>
    </>
  );
};

export default Cart;
