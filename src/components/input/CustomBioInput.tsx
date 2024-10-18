import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
    label?: string
    textClass?: string
    className?: string
    value?: string
    viewClass?: string
    onChange: (text: string) => void;
    onFocus?: () => void; 
}
const CustomBioInput = (props: Props) => {
    const { className, label, textClass, value, viewClass, onFocus } = props
    return (
        <View className={`w-full ${viewClass}`}>
            {label && <Text className={`text-weed-black text-2xl ${textClass} font-inder font-normal`}>
                {label}
            </Text>}
            <TextInput onChange={(e) => props.onChange(e.nativeEvent.text)} textAlignVertical="top" value={value} multiline={true} className={`${className} w-full bg-white border border-weed-primary-100 h-weed-5.8 rounded-[0.4356rem] p-4`} onFocus={onFocus}/>
        </View>
    );
};

export default CustomBioInput;
