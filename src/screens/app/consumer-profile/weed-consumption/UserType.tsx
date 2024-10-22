import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { UserTypeProps } from "@/data/list";


const UserType = (props: UserTypeProps) => {
  const [others, setOthers] = useState("");

  const [isRecreationalChecked, setIsRecreationalChecked] = useState(false);
  const [isMedicalChecked, setIsMedicalChecked] = useState(false);
  const [isSociallyChecked, setIsSociallyChecked] = useState(false);
  const [isAloneChecked, setIsAloneChecked] = useState(false);

  const handleRecreationalCheckboxChange = (checked: boolean) =>
    setIsRecreationalChecked(checked);
  const handleMedicalCheckboxChange = (checked: boolean) =>
    setIsMedicalChecked(checked);
  const handleSociallyCheckboxChange = (checked: boolean) =>
    setIsSociallyChecked(checked);
  const handleAloneCheckboxChange = (checked: boolean) =>
    setIsAloneChecked(checked);

  const { ViewKey } = props;
  return (
    <View className="w-weed-20.6 justify-start items-center mt-8" key={ViewKey}>
      <Text className="text-center max-w-md font-inder font-normal text-black text-lg px-4 mb-8">
        Are you a recreational or medical user?
      </Text>
      <View className="flex-col items-center w-full pb-8">
        <View className="gap-8 items-center">
          <CheckBoxInput
            label="Recreational"
            onChange={handleRecreationalCheckboxChange}
          />
          <CheckBoxInput
            label="Medical"
            onChange={handleSociallyCheckboxChange}
          />
        </View>
        <Text className="text-center font-inder font-normal text-black text-lg px-2 pt-12 pb-8">
          Do you enjoy consuming cannabis socially or prefer alone time?
        </Text>
        <View className="gap-7">
          <CheckBoxInput
            label="Socially"
            onChange={handleAloneCheckboxChange}
          />
          <CheckBoxInput label="Alone" onChange={handleMedicalCheckboxChange} />
        </View>
      </View>
    </View>
  );
};

export default UserType;
