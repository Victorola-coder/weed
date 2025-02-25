import React, { useState } from "react";
import { View, Text, TextInput, Platform, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { UserTypeProps } from "@/data/list";
import { enjoyConsumeLabeels, userTypeLabels } from "@/data/arrays";

const UserType = (props: UserTypeProps) => {
  const [others, setOthers] = useState("");

  const {
    ViewKey,
    selectedLabels,
    setSelectedLabels,
    selectedEnjoyableCanna,
    setSelectedEnjoyableCanna,
  } = props;

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setSelectedLabels((prevLabels) => {
      if (isChecked && selectedLabels.length !== 1) {
        // Add label if checked
        return [...prevLabels, label];
      } else {
        // Remove label if unchecked
        return prevLabels.filter((item) => item !== label);
      }
    });
  };
  const handleCheckboxEnjoyConsumeChange = (
    label: string,
    isChecked: boolean
  ) => {
    setSelectedEnjoyableCanna((prevLabels) => {
      if (isChecked && selectedEnjoyableCanna.length !== 1) {
        // Add label if checked
        return [...prevLabels, label];
      } else {
        // Remove label if unchecked
        return prevLabels.filter((item) => item !== label);
      }
    });
  };

  return (
    <View
      style={{
        marginBottom: Dimensions.get("window").width * 0.45,
      }}
      className="w-weed-20.6 justify-start items-center px-1"
      key={ViewKey}
    >
      <Text className="text-center max-w-md font-inder font-normal text-black text-lg px-4 mb-8">
        Are you a recreational or medical user?
      </Text>
      <View className="flex-col items-center w-full pb-8">
        <View className="gap-8 items-center">
          {userTypeLabels.map((label, index) => (
            <CheckBoxInput
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
              key={label}
            />
          ))}
        </View>
        <Text className="text-center font-inder font-normal text-black text-lg px-2 pt-12 pb-8">
          Do you enjoy consuming cannabis socially or prefer alone time?
        </Text>
        <View className="gap-7">
          {enjoyConsumeLabeels.map((label, index) => (
            <CheckBoxInput
              label={label}
              checked={selectedEnjoyableCanna.includes(label)}
              onChange={handleCheckboxEnjoyConsumeChange}
              key={label}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserType;
