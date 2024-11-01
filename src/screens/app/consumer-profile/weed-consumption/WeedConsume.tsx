import React, { useState } from "react";
import { View, Text, TextInput, Platform, Dimensions } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { WeedConsumeProps } from "@/data/list";

const WeedConsume = (props: WeedConsumeProps) => {
  const [others, setOthers] = useState("");

  const [isEdiblesChecked, setIsEdiblesChecked] = useState(false);
  const [isVapingChecked, setIsVapingChecked] = useState(false);
  const [isDabbingChecked, setIsDabbingChecked] = useState(false);
  const [isSmokingChecked, setIsSmokingChecked] = useState(false);
  const [isTopicalChecked, setIsTopicalChecked] = useState(false);

  const handleEdiblesCheckboxChange = (checked: boolean) =>
    setIsEdiblesChecked(checked);
  const handleVapingCheckboxChange = (checked: boolean) =>
    setIsVapingChecked(checked);
  const handleDabbingCheckboxChange = (checked: boolean) =>
    setIsDabbingChecked(checked);
  const handleSmokingCheckboxChange = (checked: boolean) =>
    setIsSmokingChecked(checked);
  const handleTopicalCheckboxChange = (checked: boolean) =>
    setIsTopicalChecked(checked);

  const { ViewKey } = props;
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
            onChange={handleEdiblesCheckboxChange}
          />
          <CheckBoxInput
            label="Dabbing"
            onChange={handleDabbingCheckboxChange}
          />
          <CheckBoxInput
            label="Topicals"
            onChange={handleTopicalCheckboxChange}
          />
        </View>
        <View className="gap-8">
          <CheckBoxInput label="Vaping" onChange={handleVapingCheckboxChange} />
          <CheckBoxInput
            label="Smoking"
            onChange={handleSmokingCheckboxChange}
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
