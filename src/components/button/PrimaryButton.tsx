import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  onPress: () => void;
  disabled?: boolean;
};

const PrimaryButton = (props: Props) => {
  const { children, onPress, className, textClassName, disabled } = props;

  return (
    <TouchableOpacity
      onPress={disabled ? undefined : onPress}
      className={`${className} h-14 items-center justify-center`}
      disabled={disabled}
    >
      <Text
        className={`${textClassName} text-lg font-inder font-normal text-white`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
