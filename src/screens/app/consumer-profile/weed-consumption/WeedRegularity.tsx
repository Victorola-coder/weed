import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { WeedRegularityProps } from "@/data/list";


const WeedRegularity = (props: WeedRegularityProps) => {
  const [others, setOthers] = useState("");

  const [isDailyChecked, setIsDailyChecked] = useState(false);
  const [isWeeklyChecked, setIsWeeklyChecked] = useState(false);
  const [isOccasionallyChecked, setIsOccasionallyChecked] = useState(false);
  const [isRarelyChecked, setIsRarelyChecked] = useState(false);

  const handleDailyCheckboxChange = (checked: boolean) =>
    setIsDailyChecked(checked);
  const handleWeeklyCheckboxChange = (checked: boolean) =>
    setIsWeeklyChecked(checked);
  const handleOccasionallyCheckboxChange = (checked: boolean) =>
    setIsOccasionallyChecked(checked);
  const handleRarelyCheckboxChange = (checked: boolean) =>
    setIsRarelyChecked(checked);

  const { ViewKey } = props;
  return (
    <View className="w-weed-20.6 justify-start items-center px-1" key={ViewKey}>
      <Text className="text-center font-inder font-normal text-black text-lg px-6 pb-8">
        How often do you indulge in cannabis?
      </Text>
      <View className="flex-row w-full justify-between pb-weed-4">
        <View className="gap-8">
          <CheckBoxInput label="Daily" onChange={handleDailyCheckboxChange} />
          <CheckBoxInput
            label="Occasionally"
            onChange={handleRarelyCheckboxChange}
          />
        </View>
        <View className="gap-8">
          <CheckBoxInput
            label="Weekly"
            onChange={handleOccasionallyCheckboxChange}
          />
          <CheckBoxInput label="Rarely" onChange={handleWeeklyCheckboxChange} />
        </View>
      </View>
      <View className="gap-weed-1.6 mt-2">
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

export default WeedRegularity;
