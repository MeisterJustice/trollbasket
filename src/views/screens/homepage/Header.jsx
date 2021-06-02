import React from "react";
import { Row } from "../../components/Layout";
import Text from "../../components/Typography/Text";
import { HomeHeader, Margin } from "./Homepage.styles";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBook,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const headerTexts = ["Lagos", "My Orders", "Cart"];

const Header = () => {
  return (
    <HomeHeader>
      <Margin>
        <Row justify="space-between" align="center">
          {headerTexts.map((text, index) => (
            <div key={index}>
              <Row justify="space-around" align="center">
                <div className="icon">
                  <Row
                    className="font-container"
                    align="center"
                    justify="center"
                  >
                    <FontAwesomeIcon
                      color={
                        index === 0
                          ? COLORS.BLUE
                          : index === 1
                          ? COLORS.PURPLE
                          : COLORS.DARK_GREY
                      }
                      icon={
                        index === 0
                          ? faMapMarkerAlt
                          : index === 1
                          ? faBook
                          : faShoppingCart
                      }
                    />
                  </Row>
                </div>
                <Text children={text} black />
              </Row>
            </div>
          ))}
        </Row>
      </Margin>
    </HomeHeader>
  );
};

export default Header;
