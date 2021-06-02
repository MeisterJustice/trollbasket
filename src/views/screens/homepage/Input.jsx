import React from "react";
import { Margin, HomeInput } from "./Homepage.styles";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  return (
    <Margin>
      <HomeInput>
        <form>
          <div className="input-icons">
            <FontAwesomeIcon
              className="input-icon i"
              icon={faSearch}
              color={COLORS.LIGHT_GREY}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Search Merchbuy"
            />
          </div>
        </form>
      </HomeInput>
    </Margin>
  );
};

export default Input;
