import React from "react";
import { Row } from "../../components/Layout";
import { CartHeader } from "./Cart.styles";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Typography/Title";
import { useHistory } from "react-router-dom";

const headerIcons = [faArrowLeft, "Carts"];

const Header = () => {
  let history = useHistory();

  return (
    <CartHeader>
      <Row justify="space-between" align="center">
        {headerIcons.map((data, index) => (
          <div key={index} className={index === 0 ? "icon1" : ""}>
            <Row
              className={index !== 1 ? "font-container" : ""}
              align="center"
              justify="center"
            >
              {index === 1 ? (
                <div className="details">
                  <Row className="cart-text" justify="center" align="center">
                    <Title size="19" black>
                      {data}
                    </Title>
                  </Row>
                </div>
              ) : (
                <FontAwesomeIcon
                  onClick={index === 0 ? () => history.goBack() : null}
                  color={COLORS.DARK_GREY}
                  icon={data}
                />
              )}
            </Row>
          </div>
        ))}
      </Row>
    </CartHeader>
  );
};

export default Header;
