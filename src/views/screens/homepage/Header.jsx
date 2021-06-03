import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";

const headerTexts = ["Lagos", "My Orders", "Cart"];

const Header = () => {
  let history = useHistory();

  const [location, setLocation] = useState("");

  const handleLocationSearch = (e) => {
    setLocation(e.target.value);
    if (!e.target.value) {
      return;
    } else {
      history.push(`/search?location=${e.target.value}`);
    }
  };

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
                      onClick={
                        index === 2 ? () => history.push("/cart") : () => null
                      }
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
                {index === 0 ? (
                  <select
                    value={location}
                    onChange={handleLocationSearch}
                    className="select"
                  >
                    <option value="" className="opt">
                      Location
                    </option>
                    <option value="lagos" className="opt">
                      Lagos
                    </option>
                    <option value="abuja" className="opt">
                      Abuja
                    </option>
                    <option value="portharcourt" className="opt">
                      Portharcourt
                    </option>
                    <option value="owerri" className="opt">
                      Owerri
                    </option>
                    <option value="calabar" className="opt">
                      Calabar
                    </option>
                  </select>
                ) : (
                  <Text children={text} black />
                )}
              </Row>
            </div>
          ))}
        </Row>
      </Margin>
    </HomeHeader>
  );
};

export default Header;
