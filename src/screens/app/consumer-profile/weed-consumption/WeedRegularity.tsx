import React, { useState } from "react";
import { View, Text, TextInput, Platform, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { WeedRegularityProps } from "@/data/list";
import { oftenIndulgeLabels } from "@/data/arrays";

const WeedRegularity = (props: WeedRegularityProps) => {
  const { ViewKey, selectedLabels, setSelectedLabels, others, setOthers } =
    props;
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
        marginBottom: Dimensions.get("window").width * 0.5,
      }}
      className="w-weed-20.6 justify-start items-center px-1"
      key={ViewKey}
    >
      <Text className="text-center font-inder font-normal text-black text-lg px-6 pb-8">
        How often do you indulge in cannabis?
      </Text>
      <View className="flex-row w-full justify-between pb-weed-4">
        <View className="gap-8">
          {oftenIndulgeLabels.slice(0, 2).map((label, index) => (
            <CheckBoxInput
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
              key={label}
            />
          ))}
        </View>
        <View className="gap-8">
          {oftenIndulgeLabels.slice(2).map((label, index) => (
            <CheckBoxInput
              label={label}
              checked={selectedLabels.includes(label)}
              onChange={handleCheckboxChange}
              key={label}
            />
          ))}
        </View>
      </View>
      <View className="gap-weed-1.6 mt-2">
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

export default WeedRegularity;
