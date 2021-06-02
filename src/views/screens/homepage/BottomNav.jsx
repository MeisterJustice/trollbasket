import React from "react";
import { BottomNav } from "./Homepage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faHome,
  faDollarSign,
  faWallet,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants";
import { Row, Space } from "../../components/Layout";
import Text from "../../components/Typography/Text";

const BottomNavigation = () => {
  return (
    <BottomNav>
      <nav className="mobile-bottom-nav">
        <Row className="nav-row" justify="space-around" align="center">
          {menuItems.map((data, index) => (
            <div key={index} className="mobile-bottom-nav__item active">
              <div className="content">
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={data.icon}
                  color={data.active ? COLORS.BLUE : COLORS.LIGHT_GREY}
                />
                <Space small />
                <Text
                  children={data.text}
                  blue={data.active ? true : false}
                  grey={data.active ? true : false}
                />
              </div>
            </div>
          ))}
        </Row>
      </nav>
    </BottomNav>
  );
};

export default BottomNavigation;

const menuItems = [
  {
    icon: faHome,
    text: "Home",
  },
  {
    icon: faShoppingBag,
    text: "Buy",
    active: true,
  },
  {
    icon: faDollarSign,
    text: "Deals",
  },
  {
    icon: faWallet,
    text: "Wallet",
  },
  {
    icon: faBars,
    text: "More",
  },
];
