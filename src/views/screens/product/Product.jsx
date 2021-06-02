import React, { useEffect } from "react";
import { MainContainer } from "../../components/Containers/Containers.styles";
import { Row, Space } from "../../components/Layout";
import Header from "./Header";
import {
  Container,
  Margin,
  ProductContainer,
  ProductImageContainer,
  ProductDescription,
  ProductReview,
  ProductBtnContainer,
} from "./Product.styles";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../application/selectors/products";
import { productLoaded } from "../../../application/actions/ui";
import { getLoading } from "../../../application/selectors/ui";
import Text from "../../components/Typography/Text";
import Title from "../../components/Typography/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants";
import Button from "../../components/Button";

const Product = (props) => {
  const dispatch = useDispatch();
  const product = useSelector(getProduct);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(productLoaded(props.match.params.product_id));
  }, [dispatch, props.match.params.product_id]);

  const handleAddToCart = () => {};
  return (
    <>
      <MainContainer>
        <Space smallest />
        <Margin>
          <Header />
        </Margin>
        <Space small />
        <Space small />
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <ProductContainer>
            <ProductImageContainer>
              <Row align="center" justify="center">
                <img
                  width="312"
                  height="206"
                  src={product.image}
                  alt={product.name}
                />
              </Row>
            </ProductImageContainer>
            <Container>
              <Margin>
                <Title darkGrey size="19">
                  {product.name}
                </Title>
                <Space smallest />
                <Text lineHeight="25" lightGrey>
                  {product.description}
                </Text>
                <Space smallest />
                <Row justify="flex-start" align="center">
                  <Title weight="600" black size="22">
                    {product.price}
                  </Title>
                  <Margin>
                    <Text lightGrey>/Piece</Text>
                  </Margin>
                </Row>
              </Margin>
            </Container>
            <Space tiny />
            <Container>
              <Margin>
                <ProductDescription>
                  <Row
                    className="desc-row"
                    align="center"
                    justify="space-between"
                  >
                    <Title darkGrey size="20">
                      Product Description
                    </Title>
                    <FontAwesomeIcon
                      color={COLORS.DARK_GREY}
                      icon={faArrowRight}
                    />
                  </Row>
                </ProductDescription>
              </Margin>
            </Container>
            <Space tiny />
            <Container>
              <Margin>
                <ProductReview>
                  <Row align="center" justify="space-between">
                    <Title darkGrey size="20">
                      Review and Ratings
                    </Title>
                    <Title blue size="18">
                      View All
                    </Title>
                  </Row>
                  <Space smallest />
                  <Row justify="space-start" align="center">
                    <div className="rating-container">
                      <div className="clip-star"></div>
                      <div className="clip-star"></div>
                      <div className="clip-star"></div>
                      <div className="clip-star empty"></div>
                      <div className="clip-star empty"></div>
                    </div>
                    <Margin>
                      <Text weight="600">3.0</Text>
                    </Margin>
                  </Row>
                  <Space smallest />
                  <Text lineHeight="25" lightGrey>
                    This is the best product I have used in a long while and the
                    size fits perfectly and I love the colors!!!!!
                  </Text>
                  <Space smaller />
                  <Row justify="flex-start" align="center">
                    <img
                      className="img"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="profile"
                      height="35"
                      width="35"
                    />
                    <Margin>
                      <Text>Paul Walker</Text>
                    </Margin>
                  </Row>
                </ProductReview>
              </Margin>
            </Container>
            <Space smallest />
            <Container>
              <ProductBtnContainer>
                <Row className="btn-row" justify="space-between" align="center">
                  <Button
                    height="45"
                    width="167"
                    bg={COLORS.BLUE}
                    color={COLORS.WHITE}
                    text="Add to cart"
                    radius="10"
                    handleClick={handleAddToCart}
                  />
                  <Button
                    height="45"
                    width="167"
                    bg={COLORS.WHITE}
                    color={COLORS.LIGHT_GREY}
                    border={COLORS.LIGHT_GREY}
                    text="Wishlist"
                    radius="10"
                  />
                </Row>
              </ProductBtnContainer>
            </Container>
          </ProductContainer>
        )}
      </MainContainer>
    </>
  );
};

export default Product;
