import React, { useState } from "react";
import { View, Text, TextInput, Platform, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { BalancingStrainProps } from "@/data/list";
import { balancedStrainLabels } from "@/data/arrays";

const BalancingStrain = (props: BalancingStrainProps) => {
  const [others, setOthers] = useState("");

  const { ViewKey, selectedLabels, setSelectedLabels } = props;
  const [isOthersSelected, setIsOthersSelected] = useState(false); // To track if 'Others' is selected

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    if (label === "Others" && isChecked) {
      // If 'Others' is selected, clear all other selections
      setSelectedLabels([]);
      setIsOthersSelected(true);
    } else if (label === "Others" && !isChecked) {
      // If 'Others' is unchecked, allow other selections
      setIsOthersSelected(false);
    } else {
      // Regular checkbox behavior
      setSelectedLabels((prevLabels) => {
        if (isChecked && selectedLabels.length !== 1) {
          return [...prevLabels, label];
        } else {
          return prevLabels.filter((item) => item !== label);
        }
      });
    }
  };
  return (
    <View
      style={{
        marginBottom: Dimensions.get("window").width * 0.45,
      }}
      className="w-weed-20.6 justify-start items-center px-1"
      key={ViewKey}
    >
      <Text className="text-center font-inder font-normal text-black text-lg pb-8">
        Do you prefer THC, CBD, or balanced strains?
      </Text>
      <View className="flex-col items-center w-full gap-8 pb-8">
        {balancedStrainLabels.map((label) => (
          <CheckBoxInput
            label={label}
            checked={selectedLabels.includes(label)}
            onChange={handleCheckboxChange}
            key={label}
          />
        ))}
      </View>
      <View className="gap-4 mt-8">
        <View className="flex flex-row gap-weed-1 w-weed-20.6 justify-start items-center">
          <Text className="text-lg font-inder font-normal text-black">
            Others:
          </Text>
          <TextInput
            onPressIn={() => handleCheckboxChange("Others", true)}
            value={others}
            onChangeText={setOthers}
            className="bg-white h-12 w-weed-15.5 rounded-[0.3rem] px-4"
          />
        </View>
        <Text className="text-center font-inder font-normal text-black/50 text-base">
          You can choose multiple answers
        </Text>
      </View>
    </View>
  );
};

export default BalancingStrain;
