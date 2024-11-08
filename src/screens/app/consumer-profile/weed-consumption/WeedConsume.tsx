import React, { useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { WeedConsumeProps } from "@/data/list";

const WeedConsume = (props: WeedConsumeProps) => {
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

  console.log("Selected labels:", selectedLabels);

  return (
    <View
      className="w-weed-20.6 justify-start items-center px-1 mt-3"
      key={ViewKey}
      style={{
        marginBottom: Dimensions.get("window").width * 0.5,
      }}
    >
      <Text className="text-center font-inder font-normal text-black text-lg pb-8">
        What's your favorite way to consume cannabis?
      </Text>
      <View className="flex-row w-full justify-between pb-16">
        <View className="gap-8">
          <CheckBoxInput
            label="Edibles"
            checked={selectedLabels.includes("Edibles")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Dabbing"
            checked={selectedLabels.includes("Dabbing")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Topicals"
            checked={selectedLabels.includes("Topicals")}
            onChange={handleCheckboxChange}
          />
        </View>
        <View className="gap-8">
          <CheckBoxInput
            label="Vaping"
            checked={selectedLabels.includes("Vaping")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Smoking"
            checked={selectedLabels.includes("Smoking")}
            onChange={handleCheckboxChange}
          />
        </View>
      </View>
      <View className="gap-10 mt-6">
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

export default WeedConsume;
