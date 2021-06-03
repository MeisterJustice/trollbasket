import React from "react";
import { Row, Space } from "../../components/Layout";
import Title from "../../components/Typography/Title";
import { Container, Margin, Box } from "./Cart.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants";
import Text from "../../components/Typography/Text";
import Button from "../../components/Button";

const CartItem = ({ cart, handleUpdate, handleDelete }) => {
  return (
    <Container>
      <Row justify="center" align="center">
        <Box>
          <div>
            <Row justify="flex-start" align="center">
              <img alt="cart-item" height="50" width="50" src={cart.image} />
              <Margin>
                <Title size="16" lightGrey>
                  {cart.name}
                </Title>
                <Space smallest />
                <Title weight="600" size="16" darkGrey>
                  {cart.price}
                </Title>
              </Margin>
            </Row>
          </div>
          <Space smallest />
          <Margin>
            <div className="box-bottom">
              <Row justify="space-between" align="center">
                <div>
                  <Row justify="flex-start" align="center">
                    <FontAwesomeIcon
                      className="trash"
                      onClick={() => handleDelete(cart.id)}
                      color={COLORS.RED}
                      icon={faTrash}
                    />
                    <Margin>
                      <Text black>Delete</Text>
                    </Margin>
                  </Row>
                </div>
                <div>
                  <Row align="center" justify="space-between">
                    <Button
                      height="30"
                      width="30"
                      border={COLORS.BLUE}
                      bg={COLORS.WHITE}
                      color={COLORS.BLUE}
                      text="-"
                      radius="30"
                      handleClick={() =>
                        handleUpdate(cart.id, "minus", cart.quantity)
                      }
                    />
                    <Margin>
                      <Text black>{cart.quantity}</Text>
                    </Margin>
                    <Button
                      height="30"
                      width="30"
                      border={COLORS.BLUE}
                      bg={COLORS.WHITE}
                      color={COLORS.BLUE}
                      text="+"
                      radius="30"
                      handleClick={() =>
                        handleUpdate(cart.id, "add", cart.quantity)
                      }
                    />
                  </Row>
                </div>
              </Row>
            </div>
          </Margin>
        </Box>
      </Row>
    </Container>
  );
};

export default CartItem;
