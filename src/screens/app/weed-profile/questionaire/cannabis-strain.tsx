import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { CannabisStrainProps } from "@/data/list";


const CannabisStrain = (props: CannabisStrainProps) => {
    const [others, setOthers] = useState("");

    const [isIndicaChecked, setIsIndicaChecked] = useState(false);
    const [isVapingChecked, setIsVapingChecked] = useState(false);
    const [isUnsureChecked, setIsUnsureChecked] = useState(false);
    const [isSativaChecked, setIsSativaChecked] = useState(false);
    const [isHybridChecked, setIsHybridChecked] = useState(false);

    const handleIndicaCheckboxChange = (checked: boolean) => setIsIndicaChecked(checked);
    const handleUnsureCheckboxChange = (checked: boolean) => setIsUnsureChecked(checked);
    const handleSativaCheckboxChange = (checked: boolean) => setIsSativaChecked(checked);
    const handleHybridCheckboxChange = (checked: boolean) => setIsHybridChecked(checked);

    const { ViewKey } = props;
    return (
        <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
            <View className="w-full">
                <Text className="font-inder font-normal text-black text-base text-left pb-weed-2.6">
                    1. What strain is this?
                </Text>
            </View>
            <View className="flex-row gap-weed-5 flex-wrap w-full justify-evenly pb-8">
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Indica" onChange={handleIndicaCheckboxChange} />
                    <CheckBoxInput label="Sativa" onChange={handleSativaCheckboxChange} />
                </View>
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Hybrid" onChange={handleHybridCheckboxChange} />
                    <CheckBoxInput label="Unsure" onChange={handleUnsureCheckboxChange} />
                </View>
            </View>
        </View>
    );
};

export default CannabisStrain;
