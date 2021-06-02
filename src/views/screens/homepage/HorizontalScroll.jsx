import React from "react";
import { Row } from "../../components/Layout";
import { HorizontalScroll } from "./Homepage.styles";
import Text from "../../components/Typography/Text";
import Button from "../../components/Button";
import { COLORS } from "../../constants";

const Horizontal = () => {
  return (
    <HorizontalScroll>
      <div className="scrolling-wrapper">
        <div className="card first-card">
          <Row className="card-row" justify="space-around" align="center">
            <div>
              <Text
                width="139"
                white
                weight="600"
                children="Having any issues with"
              />
              <Text white weight="600" children="your order?" />
            </div>
            <div>
              <button className="btn">Contact Us</button>
            </div>
          </Row>
        </div>
        <div className="card second-card">
          <Row className="card-row" justify="space-around" align="center">
            <div>
              <Text
                width="139"
                white
                weight="600"
                children="Having any issues with"
              />
              <Text white weight="600" children="your order?" />
            </div>
            <Button
              height="31"
              width="91"
              bg={COLORS.BLUE}
              color={COLORS.WHITE}
              text="Contact Us"
            />
          </Row>
        </div>
        <div className="card third-card">
          <Row className="card-row" justify="space-around" align="center">
            <div>
              <Text
                width="139"
                white
                weight="600"
                children="Having any issues with"
              />
              <Text white weight="600" children="your order?" />
            </div>
            <div>
              <button className="btn">Contact Us</button>
            </div>
          </Row>
        </div>
      </div>
    </HorizontalScroll>
  );
};

export default Horizontal;
