import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import { CannabisPropertiesProps } from "@/data/list";

const CannabisProperties = (props: CannabisPropertiesProps) => {
    const [others, setOthers] = useState("");

    const [isEarthyChecked, setIsEarthyChecked] = useState(false);
    const [isVapingChecked, setIsVapingChecked] = useState(false);
    const [isFloralChecked, setIsFloralChecked] = useState(false);
    const [isSpicyChecked, setIsSpicyChecked] = useState(false);
    const [isCitrusyChecked, setIsCitrusyChecked] = useState(false);
    const [isWoodyChecked, setIsWoodyChecked] = useState(false);
    const [isSweetChecked, setIsSweetChecked] = useState(false);
    const [isFruityChecked, setIsFruityChecked] = useState(false);
    const [isSkunkyChecked, setIsSkunkyChecked] = useState(false);

    const handleEarthyCheckboxChange = (checked: boolean) => setIsEarthyChecked(checked);
    const handleVapingCheckboxChange = (checked: boolean) => setIsVapingChecked(checked);
    const handleFloralCheckboxChange = (checked: boolean) => setIsFloralChecked(checked);
    const handleSpicyCheckboxChange = (checked: boolean) => setIsSpicyChecked(checked);
    const handleCitrusyCheckboxChange = (checked: boolean) => setIsCitrusyChecked(checked);
    const handleWoodyCheckboxChange = (checked: boolean) => setIsWoodyChecked(checked);
    const handleSweetCheckboxChange = (checked: boolean) => setIsSweetChecked(checked);
    const handleFruityCheckboxChange = (checked: boolean) => setIsFruityChecked(checked);
    const handleSkunkyCheckboxChange = (checked: boolean) => setIsSkunkyChecked(checked);

    const { ViewKey } = props;
    return (
        <View className="w-weed-20.6 justify-center items-center" key={ViewKey}>
            <View className="w-full">
            <Text className="font-inder font-normal text-black text-base text-center pb-weed-2.6">
                    3. How would you describe the aroma of this strain?
                </Text>
            </View>
            <View className="flex-row gap-weed-5 flex-wrap w-full justify-evenly pb-8">
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Earthy" onChange={handleEarthyCheckboxChange} />
                    <CheckBoxInput label="Spicy" onChange={handleSpicyCheckboxChange} />
                    <CheckBoxInput label="Woody" onChange={handleWoodyCheckboxChange} />
                    <CheckBoxInput label="Fruity" onChange={handleFruityCheckboxChange} />
                </View>
                <View className="gap-weed-1.2">
                    <CheckBoxInput label="Citrusy" onChange={handleCitrusyCheckboxChange} />
                    <CheckBoxInput label="Floral" onChange={handleFloralCheckboxChange} />
                    <CheckBoxInput label="Sweet" onChange={handleSweetCheckboxChange} />
                    <CheckBoxInput label="Skunky" onChange={handleSkunkyCheckboxChange} />
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

export default CannabisProperties;
