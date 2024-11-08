import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

type Props = {
  handleNext?: () => void;
  handlePrev?: () => void;
  BackText?: string;
  NextText?: string;
  backClassName?: string;
  nextClassName?: string;
  className?: string;
  disabled?: boolean;
  backDisabled?: boolean;
};

const DirectionButton = (props: Props) => {
  const arrowBack = require("../../../assets/image/left_arrow.png");
  const arrowFront = require("../../../assets/image/right_arrow.png");
  const {
    handlePrev,
    handleNext,
    backClassName,
    className,
    BackText,
    NextText,
    nextClassName,
    disabled,
    backDisabled,
  } = props;
  return (
    <>
      <View
        className={`${className} w-full flex-row justify-between items-center h-weed-4 `}
      >
        <TouchableOpacity
          onPress={handlePrev}
          disabled={backDisabled}
          className={`${backClassName} h-full w-weed-8 rounded-3xl justify-center items-center flex-row gap-5 mb-2`}
        >
          <Image
            source={arrowFront}
            className="h-weed-1.5 w-weed-1.2"
            resizeMode="contain"
          />
          <Text className="text-white font-inder font-normal text-lg">
            {BackText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabled}
          onPress={handleNext}
          className={`${nextClassName} h-full w-weed-8 rounded-3xl justify-center items-center flex-row gap-5 mb-2.5`}
        >
          <Text className="text-white font-inder font-normal text-lg">
            {NextText}
          </Text>
          <Image
            source={arrowBack}
            className="h-weed-1.5 w-weed-1.2"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default DirectionButton;
