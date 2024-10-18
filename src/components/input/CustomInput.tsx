import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
  label?: string;
  textClass?: string;
  labelClassname?: string;
  className?: string;
  value?: string;
  viewClass?: string;
  error?: string | null;
  onChange: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

const CustomInput = (props: Props) => {
  const { className, label, textClass, value, viewClass, error, onFocus, onBlur, labelClassname } = props;

  return (
    <View className={`flex-col items-center
     ${viewClass}`}>
      {label && (
        <View className={`${labelClassname}`}>
          <Text className={`text-weed-black text-2xl ${textClass} font-inder font-normal`}>
            {label}
          </Text>
        </View>
      )}
      <TextInput
        onChange={(e) => props.onChange(e.nativeEvent.text)}
        value={value}
        className={`${className} bg-white h-14 px-4`}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {error && <Text className="text-red-500 font-inder text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default CustomInput;
