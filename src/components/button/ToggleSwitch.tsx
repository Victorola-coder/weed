import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";

type SwitchProp = {
    className?: string;
    checked?: boolean;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const ToggleSwitch = ({ value, onValueChange }: SwitchProp) => {
    const [isChecked, setIsChecked] = useState(value);

    useEffect(() => {
        setIsChecked(value);
    }, [value]);

    const handlePress = () => {
        setIsChecked(!isChecked);
        onValueChange(!isChecked);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View
                className={`w-16 h-9 border-black border-1 border rounded-3xl p-0.5 flex-rw ${isChecked ? "items-end" : "items-start"
                    } justify-center ${isChecked ? "bg-weed-primary-100" : ""}`}
            >
                <View className="bg-black rounded-full h-7 w-7" />
            </View>
        </TouchableOpacity>
    );
};

export default ToggleSwitch;

