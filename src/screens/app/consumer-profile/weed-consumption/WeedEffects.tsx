import React, { useState } from "react";
import { View, Text, TextInput, Platform, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { WeedEffectsProps } from "@/data/list";

const WeedEffects = (props: WeedEffectsProps) => {
  const [others, setOthers] = useState("");

  const { ViewKey, selectedLabels, setSelectedLabels } = props;

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setSelectedLabels((prevLabels) => {
      if (isChecked) {
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
        marginBottom: Dimensions.get("window").width * 0.52,
      }}
      className="w-weed-20.6 justify-start items-center px-1"
      key={ViewKey}
    >
      <Text className="text-center font-inder font-normal text-black text-lg pb-8 px-2">
        What effects are you seeking from cannabis?
      </Text>
      <View className="flex-row w-full justify-between gap-16 pb-20 mt-1">
        <View className="gap-8 ">
          <CheckBoxInput
            label="Relaxation"
            checked={selectedLabels.includes("Relaxation")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Creativity"
            checked={selectedLabels.includes("Creativity")}
            onChange={handleCheckboxChange}
          />
        </View>
        <View className="gap-8">
          <CheckBoxInput
            label="Pain relief"
            checked={selectedLabels.includes("Pain relief")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Energy boost"
            checked={selectedLabels.includes("Energy boost")}
            onChange={handleCheckboxChange}
          />
        </View>
      </View>
      <View className="gap-weed-1.6 mt-4">
        <View className="flex flex-row gap-weed-1 w-weed-20.6 justify-start items-center">
          <Text className="text-lg font-inder font-normal text-black">
            Others:
          </Text>
          <TextInput
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

export default WeedEffects;
