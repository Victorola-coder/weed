import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { CannabisStrainProps } from "@/data/list";
import { whatStrainLabels } from "@/data/arrays";

const CannabisStrain = (props: CannabisStrainProps) => {
  const [others, setOthers] = useState("");
  const { ViewKey, selectedLabels, setSelectedLabels } = props;

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

  return (
    <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
      <View className="w-full">
        <Text className="font-inder font-normal text-black text-base text-left pb-weed-2.6">
          1. What strain is this?
        </Text>
      </View>
      <View className="flex-row gap-weed-5 flex-wrap w-full justify-evenly pb-8">
        <View className="gap-weed-1.2">
          {whatStrainLabels.slice(0, 2).map((label, index) => (
            <CheckBoxInput
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
              key={index}
            />
          ))}
        </View>
        <View className="gap-weed-1.2">
          {whatStrainLabels.slice(2).map((label, index) => (
            <CheckBoxInput
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
              key={index}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CannabisStrain;
