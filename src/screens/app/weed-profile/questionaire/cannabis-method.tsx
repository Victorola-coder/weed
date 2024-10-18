import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { CannabisMethodProps } from "@/data/list";


const CannabisMethod = (props: CannabisMethodProps) => {
    const [others, setOthers] = useState("");

    const [isIndoorChecked, setIsIndoorChecked] = useState(false);
    const [isGreenhouseChecked, setIsGreenhouseChecked] = useState(false);
    const [isUnsureChecked, setIsUnsureChecked] = useState(false);
    const [isHydroponicChecked, setIsHydroponicChecked] = useState(false);
    const [isOutdoorChecked, setIsOutdoorChecked] = useState(false);

    const handleIndoorCheckboxChange = (checked: boolean) => setIsIndoorChecked(checked);
    const handleGreenhouseCheckboxChange = (checked: boolean) => setIsGreenhouseChecked(checked);
    const handleUnsureCheckboxChange = (checked: boolean) => setIsUnsureChecked(checked);
    const handleHydroponicCheckboxChange = (checked: boolean) => setIsHydroponicChecked(checked);
    const handleOutdoorCheckboxChange = (checked: boolean) => setIsOutdoorChecked(checked);

    const { ViewKey } = props;
    return (
        <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
            <View className="w-full">
                <Text className="font-inder font-normal text-black text-base text-center pb-weed-2.6">
                    4. What method was used to grow this cannabis?
                </Text>
            </View>
            <View className="flex-row gap-weed-5 flex-wrap w-full justify-evenly pb-8">
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Indoor" onChange={handleIndoorCheckboxChange} />
                    <CheckBoxInput label="Hydroponic" onChange={handleHydroponicCheckboxChange} />
                    <CheckBoxInput label="Greenhouse" onChange={handleGreenhouseCheckboxChange} />
                </View>
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Outdoor" onChange={handleOutdoorCheckboxChange} />
                    <CheckBoxInput label="Unsure" onChange={handleUnsureCheckboxChange} />
                </View>
            </View>
            <View className="flex flex-row gap-4 w-full justify-center items-center">
                <Text className="text-base font-inder font-normal text-black">Others:</Text>
                <TextInput
                    value={others}
                    onChangeText={setOthers}
                    className="w-weed-15.8 bg-white h-weed-2.1 w rounded-lg px-4"
                />
            </View>
        </View>
    );
};

export default CannabisMethod;
