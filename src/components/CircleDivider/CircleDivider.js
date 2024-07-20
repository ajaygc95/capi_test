// src/components/CircleDivider/CircleDivider.js
import React from "react";
import {
  Divider,
  LeftCircleWrapper,
  RightCircleWrapper,
  Circle,
  DividerText,
} from "./CircleDivider.element";

const CircleDivider = () => {
  return (
    <Divider>
      <LeftCircleWrapper>
        {[...Array(25)].map((_, index) => (
          <Circle key={index} />
        ))}
      </LeftCircleWrapper>
      <DividerText>PIXEL</DividerText>
      <RightCircleWrapper>
        {[...Array(25)].map((_, index) => (
          <Circle key={index} />
        ))}
      </RightCircleWrapper>
    </Divider>
  );
};

export default CircleDivider;
