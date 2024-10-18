import React from "react";
import { View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

// import { Container } from './styles';

const FilterIcon = () => {
  return (
    <Svg width="33" height="23" viewBox="0 0 33 23" fill="none">
      <Path
        d="M2.5 5H26"
        stroke="#00500D"
        stroke-width="3"
        stroke-linecap="round"
      />
      <Circle cx="8.5" cy="5" r="5" fill="#00500D" />
      <Circle cx="8.5" cy="5" r="2" fill="white" />
      <Path
        d="M25.5 17H2"
        stroke="#00500D"
        stroke-width="3"
        stroke-linecap="round"
      />
      <Circle
        cx="5"
        cy="5"
        r="5"
        transform="matrix(-1 0 0 1 24.5 12)"
        fill="#00500D"
      />
      <Circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(-1 0 0 1 21.5 15)"
        fill="white"
      />
    </Svg>
  );
};

export default FilterIcon;
