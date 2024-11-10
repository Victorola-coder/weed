import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
type Props = {
  label?: string;
  textClass?: string;
  className?: string;
  viewClass?: string;
  label2?: string;
  setOtp: React.Dispatch<React.SetStateAction<null | string[]>>;
  otp: null | string[];
  onOtpComplete: () => void;
};
const CustomOtp = (props: Props) => {
  const { otp, setOtp, onOtpComplete } = props;
  const { className, label2, label, textClass, viewClass } = props;

  const handleChange = (text: string, index: number) => {
    if (otp) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
    }
  };

  return (
    <View className={`w-full`}>
      {label && (
        <Text
          className={`text-weed-black text-2xl ${textClass} font-inder font-normal text-center`}
        >
          {label}
        </Text>
      )}
      {label2 && (
        <Text
          className={`text-weed-black text-sm ${textClass} font-inder font-normal text-center`}
        >
          {label2}
        </Text>
      )}
      <View
        className={`mt-8 flex-row gap-6 items-center justify-center w-full`}
      >
        {otp?.map((value, index) => (
          <TextInput
            key={index}
            keyboardType="number-pad"
            className={`bg-white border border-weed-primary-100 h-14 rounded-xl w-14 text-center text-[#346771] text-3xl items-center justify-center leading-[26px]`}
            value={value ? "*".repeat(value.length) : ""}
            onChangeText={(text) => handleChange(text, index)}
            maxLength={1}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomOtp;
