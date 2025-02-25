import React, { useState } from "react";
import { View, Text, TextInput, Platform, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { StrainTypeProps } from "@/data/list";
import { preferralStrainLabels } from "@/data/arrays";

const StrainType = (props: StrainTypeProps) => {
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
      className="w-weed-20.6 justify-start items-center px-1"
      style={{
        marginBottom: Dimensions.get("window").width * 0.5,
      }}
      key={ViewKey}
    >
      <Text className="text-center font-inder font-normal text-black text-lg pb-8">
        What's your preferral strain type?
      </Text>
      <View className="w-full gap-11 pb-20 mt-3">
        <View className="justify-evenly gap-16 flex-row">
          {preferralStrainLabels.slice(0, 2).map((label, index) => (
            <CheckBoxInput
              key={label}
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
            />
          ))}
        </View>
        <View className="w-full justify-center items-center">
          {preferralStrainLabels.slice(2).map((label, index) => (
            <CheckBoxInput
              key={label}
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
            />
          ))}
        </View>
      </View>
      <View className="gap-weed-1.6 mt-1">
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

export default StrainType;
