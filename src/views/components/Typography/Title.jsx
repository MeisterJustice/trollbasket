import React from "react";

import { TitleDiv } from "./Typography.styles";

const Title = (props) => {
  return (
    <>
      <TitleDiv
        height={props.height}
        width={props.width}
        weight={props.weight}
        size={props.size}
        uppercase={props.uppercase}
        lineHeight={props.lineHeight}
        letterSpacing={props.letterSpacing}
        blue={props.blue}
        grey={props.grey}
        darkGreen={props.darkGreen}
        darkGrey={props.darkGrey}
        lightGrey={props.lightGrey}
        family={props.family}
      >
        {props.children}
      </TitleDiv>
    </>
  );
};

export default Title;
