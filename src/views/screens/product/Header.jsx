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
import { useHistory } from "react-router-dom";

const headerIcons = [faArrowLeft, "Details", faSearch, faShoppingCart];

const Header = () => {
  let history = useHistory();

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
                <div>
                  <FontAwesomeIcon
                    onClick={
                      index === 0
                        ? () => history.goBack()
                        : index === 3
                        ? () => history.push("/cart")
                        : null
                    }
                    color={COLORS.DARK_GREY}
                    icon={data}
                  />
                  {/* {index === 3 && <div className="cart">4</div>} */}
                </div>
              )}
            </Row>
          </div>
        ))}
      </Row>
    </ProductHeader>
  );
};

export default Header;
