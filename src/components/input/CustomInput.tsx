import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
  secureTextEntry?: boolean;
  handleToggle?: () => void;
  isPassword?: boolean;
};

const CustomInput = (props: Props) => {
  const {
    className,
    label,
    textClass,
    value,
    viewClass,
    error,
    onFocus,
    onBlur,
    labelClassname,
    secureTextEntry = false,
    handleToggle,
    isPassword = false,
  } = props;

  return (
    <View
      className={`flex-col items-center
     ${viewClass}`}
    >
      {label && (
        <View className={`${labelClassname}`}>
          <Text
            className={`text-weed-black text-2xl ${textClass} font-inder font-normal`}
          >
            {label}
          </Text>
        </View>
      )}
      <View className="gap-3 relative">
        <TextInput
          onChange={(e) => props.onChange(e.nativeEvent.text)}
          value={value}
          className={`${className} bg-white h-14 px-4`}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={handleToggle}
            className="absolute right-2 top-4"
          >
            <Ionicons
              name={secureTextEntry ? "eye" : "eye-off"}
              size={19}
              color={"black"}
            />
          </TouchableOpacity>
        )}
        {error && (
          <Text className="text-red-500 font-inder text-sm mt-1 text-center">
            {error}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
