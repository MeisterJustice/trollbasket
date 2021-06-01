import React from "react";

import { TextDiv } from "./Typography.styles";

const Text = (props) => {
  return (
    <>
      <TextDiv
        height={props.height}
        width={props.width}
        weight={props.weight}
        size={props.size}
        mediaSize={props.mediaSize}
        indentLeft={props.indentLeft}
        indentRight={props.indentRight}
        indentTop={props.indentTop}
        indentBottom={props.indentBottom}
        uppercase={props.uppercase}
        capitalize={props.capitalize}
        lineHeight={props.lineHeight}
        letterSpacing={props.letterSpacing}
        blue={props.blue}
        grey={props.grey}
        darkGrey={props.darkGrey}
        red={props.red}
        teal={props.teal}
        white={props.white}
        lightGrey={props.lightGrey}
        yellow={props.yellow}
        mediumGrey={props.mediumGrey}
        black={props.black}
        family={props.family}
        select={props.select}
        fontStyle={props.fontStyle}
        lineThrough={props.lineThrough}
        onClick={props.onClick || (() => {})}
      >
        {props.children}
      </TextDiv>
    </>
  );
};

export default Text;
