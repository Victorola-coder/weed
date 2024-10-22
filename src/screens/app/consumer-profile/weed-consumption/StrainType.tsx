import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { StrainTypeProps } from "@/data/list";

const StrainType = (props: StrainTypeProps) => {
  const [others, setOthers] = useState("");

  const [isIndicaChecked, setIsIndicaChecked] = useState(false);
  const [isSativaChecked, setIsSativaChecked] = useState(false);
  const [isHybridChecked, setIsHybridChecked] = useState(false);
  const [isRarelyChecked, setIsRarelyChecked] = useState(false);

  const handleIndicaCheckboxChange = (checked: boolean) =>
    setIsIndicaChecked(checked);
  const handleSativaCheckboxChange = (checked: boolean) =>
    setIsSativaChecked(checked);
  const handleHybridCheckboxChange = (checked: boolean) =>
    setIsHybridChecked(checked);
  const handleRarelyCheckboxChange = (checked: boolean) =>
    setIsRarelyChecked(checked);

  const { ViewKey } = props;
  return (
    <View className="w-weed-20.6 justify-start items-center" key={ViewKey}>
      <Text className="text-center font-inder font-normal text-black text-lg pb-8">
        What's your preferral strain type?
      </Text>
      <View className="w-full gap-11 pb-20 mt-3">
        <View className="justify-evenly gap-16 flex-row">
          <CheckBoxInput label="Indica" onChange={handleIndicaCheckboxChange} />
          <CheckBoxInput label="Sativa" onChange={handleHybridCheckboxChange} />
        </View>
        <View className="w-full justify-center items-center">
          <CheckBoxInput label="Hybrid" onChange={handleRarelyCheckboxChange} />
        </View>
      </View>
      <View className="gap-weed-1.6 mt-1">
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

export default StrainType;
