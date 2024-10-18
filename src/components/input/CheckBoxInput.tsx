import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
    label?: string;
    textClassName?: string;
    onChange?: (checked: boolean) => void;
};

const CheckBoxInput = (props: Props) => {
    const { label, onChange, textClassName } = props;
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);
        if (onChange) {
            onChange(newCheckedState);
        }
    };

    return (
        <View className="flex-row items-center gap-2">
            <TouchableOpacity
                style={{
                    height: 23.91,
                    width: 23.91,
                    borderRadius: 5.43,
                    backgroundColor: checked ? "#00500D" :"white",
                    borderColor: "white",
                    borderWidth: 1
                }}
                onPress={toggleCheckbox}
            />
            <Text className={`${textClassName} text-lg font-inder font-normal text-black`}>
                {label}
            </Text>
        </View>
    );
};

export default CheckBoxInput;