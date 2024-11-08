import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { CannabisPropertiesProps } from "@/data/list";

const CannabisProperties = (props: CannabisPropertiesProps) => {
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
    <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
      <View className="w-full">
        <Text className="font-inder font-normal text-black text-base text-center pb-weed-2.6">
          3. How would you describe the aroma of this strain?
        </Text>
      </View>
      <View className="flex-row gap-weed-5 flex-wrap w-full justify-evenly pb-8">
        <View className="gap-weed-1.2">
          <CheckBoxInput
            label="Earthy"
            checked={selectedLabels.includes("Earthy")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Spicy"
            checked={selectedLabels.includes("Spicy")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Woody"
            checked={selectedLabels.includes("Woody")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Fruity"
            checked={selectedLabels.includes("Fruity")}
            onChange={handleCheckboxChange}
          />
        </View>
        <View className="gap-weed-1.2">
          <CheckBoxInput
            label="Citrusy"
            checked={selectedLabels.includes("Citrusy")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Floral"
            checked={selectedLabels.includes("Floral")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Sweet"
            checked={selectedLabels.includes("Sweet")}
            onChange={handleCheckboxChange}
          />
          <CheckBoxInput
            label="Skunky"
            checked={selectedLabels.includes("Skunky")}
            onChange={handleCheckboxChange}
          />
        </View>
      </View>
      <View className="flex flex-row gap-4 w-full justify-center items-center">
        <Text className="text-base font-inder font-normal text-black">
          Others:
        </Text>
        <TextInput
          value={others}
          onChangeText={setOthers}
          className="w-weed-15.8 bg-white h-weed-2.1 w rounded-lg px-4"
        />
      </View>
    </View>
  );
};

export default CannabisProperties;
