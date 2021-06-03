import React from "react";
import { Column, Row, Space } from "../../components/Layout";
import { COLORS } from "../../constants";
import { Featured, FeaturedContainer } from "./Homepage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faFire,
  faHeart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Typography/Title";

const FeaturedCategories = () => {
  return (
    <Row justify="space-around" align="center">
      {featuredItems.map((data, index) => (
        <FeaturedContainer key={index}>
          <Column layout="center">
            <Featured color={data.color}>
              <Row className="featured-row" justify="center" align="center">
                <FontAwesomeIcon
                  className="font-size"
                  color={COLORS.WHITE}
                  icon={data.icon}
                />
              </Row>
            </Featured>
            <Space smaller />
            <Title align="center" size="13" grey children={data.text1} />
            <Title align="center" size="13" grey children={data.text2} />
          </Column>
        </FeaturedContainer>
      ))}
    </Row>
  );
};

export default FeaturedCategories;

const featuredItems = [
  {
    color: COLORS.BLUE,
    icon: faAddressBook,
    text1: "Product",
    text2: "Categories",
  },
  {
    color: COLORS.ORANGE,
    icon: faFire,
    text1: "Popular",
    text2: "Products",
  },
  {
    color: COLORS.PURPLE,
    icon: faHeart,
    text1: "Recommended",
    text2: "Products",
  },
  {
    color: COLORS.GREEN,
    icon: faHome,
    text1: "Shops",
  },
];
