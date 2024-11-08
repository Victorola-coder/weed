import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  label?: string;
  textClassName?: string;
  checked?: boolean;
  onChange?: (label: string, isChecked: boolean) => void;
};

const CheckBoxInput = (props: Props) => {
  const { label = "", onChange, textClassName, checked } = props;

  const toggleCheckbox = () => {
    onChange?.(label, !checked);
  };

  return (
    <View className="flex-row items-center gap-2">
      <TouchableOpacity
        style={{
          height: 23.91,
          width: 23.91,
          borderRadius: 5.43,
          backgroundColor: checked ? "#00500D" : "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        onPress={toggleCheckbox}
      />
      <Text
        className={`${textClassName} text-lg font-inder font-normal text-black`}
      >
        {label}
      </Text>
    </View>
  );
};

export default CheckBoxInput;
