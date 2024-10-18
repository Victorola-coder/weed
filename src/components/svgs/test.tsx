import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";


type Props = {
  width: string;
  height: string;
  color: string;
  className?: string;
};


const TestIcon = (props: Props) => {
  const { width, height, color, className } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      className={className}
    >
      <Path
        d="M15 7.5L2.98003e-07 15L3.8 7.5004L9.53674e-07 -6.55671e-07L15 7.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default TestIcon;