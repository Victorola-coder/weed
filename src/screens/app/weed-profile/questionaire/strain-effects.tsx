import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { StrainEffectsProps } from "@/data/list";

const StrainEffects = (props: StrainEffectsProps) => {
  const [isOthersSelected, setIsOthersSelected] = useState(false); // To track if 'Others' is selected

  const { ViewKey, selectedLabels, setSelectedLabels, others, setOthers } =
    props;
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
    <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
      <View className="w-full">
        <Text className="font-inder font-normal text-black text-base text-left pb-weed-2.6">
          2. What effects does this strain provide?
        </Text>
      </View>
      <View className="flex-row gap-2 flex-wrap w-full justify-evenly pb-8">
        <View className="gap-weed-1.2">
          <CheckBoxInput
            label="Relaxing"
            checked={selectedLabels.includes("Relaxing")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Creative"
            checked={selectedLabels.includes("Creative")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Energizing"
            checked={selectedLabels.includes("Energizing")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Instant Pain-relief"
            checked={selectedLabels.includes("Instant Pain-relief")}
            onChange={handleCheckboxChange}
          />
        </View>
        <View className="gap-weed-1.2">
          <CheckBoxInput
            label="Euphoric"
            checked={selectedLabels.includes("Euphoric")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Uplifting"
            checked={selectedLabels.includes("Uplifting")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Calm"
            checked={selectedLabels.includes("Calm")}
            onChange={handleCheckboxChange}
          />
        </View>
      </View>
      <View className="flex flex-row gap-4 w-full justify-center items-center">
        <Text className="text-base font-inder font-normal text-black">
          Others:
        </Text>
        <TextInput
          onPressIn={() => handleCheckboxChange("Others", true)}
          value={others}
          onChangeText={setOthers}
          className="w-weed-15.8 bg-white h-weed-2.1 w rounded-lg px-4"
        />
      </View>
    </View>
  );
};

export default StrainEffects;
