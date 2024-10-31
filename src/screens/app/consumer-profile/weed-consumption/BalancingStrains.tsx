import React, { useState } from "react";
import { View, Text, TextInput, Platform } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { BalancingStrainProps } from "@/data/list";

const BalancingStrain = (props: BalancingStrainProps) => {
  const [others, setOthers] = useState("");

  const [isTHCChecked, setIsTHCChecked] = useState(false);
  const [isCBDChecked, setIsCBDChecked] = useState(false);
  const [isBalancedChecked, setIsBalancedChecked] = useState(false);
  const [isUnsureChecked, setIsUnsureChecked] = useState(false);

  const handleTHCCheckboxChange = (checked: boolean) =>
    setIsTHCChecked(checked);
  const handleCBDCheckboxChange = (checked: boolean) =>
    setIsCBDChecked(checked);
  const handleBalancedCheckboxChange = (checked: boolean) =>
    setIsBalancedChecked(checked);
  const handleUnsureCheckboxChange = (checked: boolean) =>
    setIsUnsureChecked(checked);

  const { ViewKey } = props;
  return (
    <View
      style={{ paddingTop: Platform.OS === "android" ? 60 : 25 }}
      className="w-weed-20.6 justify-start items-center px-1"
      key={ViewKey}
    >
      <Text className="text-center font-inder font-normal text-black text-lg pb-8">
        Do you prefer THC, CBD, or balanced strains?
      </Text>
      <View className="flex-col items-center w-full gap-8 pb-8">
        <CheckBoxInput
          label="THC-dominant"
          onChange={handleTHCCheckboxChange}
        />
        <CheckBoxInput
          label="CBD-dominant"
          onChange={handleBalancedCheckboxChange}
        />
        <CheckBoxInput
          label="Balanced THC/CBD"
          onChange={handleUnsureCheckboxChange}
        />
        <CheckBoxInput label="Unsure" onChange={handleUnsureCheckboxChange} />
      </View>
      <View className="gap-4 mt-8">
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

export default BalancingStrain;
