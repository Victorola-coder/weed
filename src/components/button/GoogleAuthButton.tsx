import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
type Props = {
  className?: string;
  textClassName?: string;
  onPress: () => void;
};
const GoogleAuthButton = (props: Props) => {
  const { onPress, className, textClassName } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-weed-3.1 w-weed-9 mx-auto items-center justify-center bg-weed-gray rounded-[10px] border border-weed-primary-100 shadow-md flex-row gap-2 ${className}`}
    >
      <Image
        source={require("../../../assets/image/Google.png")}
        className="w-weed-1.3 h-weed-1.3"
        resizeMode="contain"
      />
      <Text className="text-black text-base font-inder font-normal">
        Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;
