import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { StrainEffectsProps } from "@/data/list";


const StrainEffects = (props: StrainEffectsProps) => {
    const [others, setOthers] = useState("");

    const [isRelaxingChecked, setIsRelaxingChecked] = useState(false);
    const [isEnergizingChecked, setIsEnergizingChecked] = useState(false);
    const [isUpliftingChecked, setIsUpliftingChecked] = useState(false);
    const [isCreativeChecked, setIsCreativeChecked] = useState(false);
    const [isEuphoricChecked, setIsEuphoricChecked] = useState(false);
    const [isCalmChecked, setIsCalmChecked] = useState(false);
    const [isPainRelief, setIsPainReliefChecked] = useState(false);

    const handleRelaxingCheckboxChange = (checked: boolean) => setIsRelaxingChecked(checked);
    const handleEnergizingCheckboxChange = (checked: boolean) => setIsEnergizingChecked(checked);
    const handleUpliftingCheckboxChange = (checked: boolean) => setIsUpliftingChecked(checked);
    const handleCreativeCheckboxChange = (checked: boolean) => setIsCreativeChecked(checked);
    const handleEuphoricCheckboxChange = (checked: boolean) => setIsEuphoricChecked(checked);
    const handleCalmCheckboxChange = (checked: boolean) => setIsEuphoricChecked(checked);
    const handlePainReliefCheckboxChange = (checked: boolean) => setIsPainReliefChecked(checked);

    const { ViewKey } = props;
    return (
        <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
            <View className="w-full">
                <Text className="font-inder font-normal text-black text-base text-left pb-weed-2.6">
                    2. What effects does this strain provide?
                </Text>
            </View>
            <View className="flex-row gap-2 flex-wrap w-full justify-evenly pb-8">
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Relaxing" onChange={handleRelaxingCheckboxChange} />
                    <CheckBoxInput label="Creative" onChange={handleCreativeCheckboxChange} />
                    <CheckBoxInput label="Energizing" onChange={handleEnergizingCheckboxChange} />
                    <CheckBoxInput label="Instant Pain-relief" onChange={handlePainReliefCheckboxChange} />
                </View>
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Euphoric" onChange={handleEuphoricCheckboxChange} />
                    <CheckBoxInput label="Uplifting" onChange={handleUpliftingCheckboxChange} />
                    <CheckBoxInput label="Calm" onChange={handleCalmCheckboxChange} />
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

export default StrainEffects;
