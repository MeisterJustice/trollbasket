import React, { useState } from "react";
import { Margin, HomeInput } from "./Homepage.styles";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Input = ({ location }) => {
  const [text, setText] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      history.push(`/search?location=${text}`);
    } else {
      history.push(`/search?name=${text}`);
    }
  };
  return (
    <Margin>
      <HomeInput>
        <form onSubmit={handleSubmit}>
          <div className="input-icons">
            <FontAwesomeIcon
              className="input-icon i"
              icon={faSearch}
              color={COLORS.LIGHT_GREY}
            />
            <input
              value={text}
              onChange={handleChange}
              className="input-field"
              type="search"
              placeholder={location ? "Search Location" : "`Search Merchbuy`"}
            />
          </div>
        </form>
      </HomeInput>
    </Margin>
  );
};

export default Input;
