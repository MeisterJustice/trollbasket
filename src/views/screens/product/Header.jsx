import React from "react";
import { Row } from "../../components/Layout";
import { ProductHeader } from "./Product.styles";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Typography/Title";

const headerIcons = [faArrowLeft, "Details", faSearch, faShoppingCart];

const Header = () => {
  return (
    <ProductHeader>
      <Row justify="space-between" align="center">
        {headerIcons.map((data, index) => (
          <div
            key={index}
            className={index === 0 ? "icon1" : index !== 1 ? "icon" : ""}
          >
            <Row
              className={index !== 1 ? "font-container" : ""}
              align="center"
              justify="center"
            >
              {index === 1 ? (
                <div className="details">
                  <Row className="details" justify="center" align="center">
                    <Title size="19" black>
                      {data}
                    </Title>
                  </Row>
                </div>
              ) : (
                <FontAwesomeIcon color={COLORS.DARK_GREY} icon={data} />
              )}
            </Row>
          </div>
        ))}
      </Row>
    </ProductHeader>
  );
};

export default Header;
