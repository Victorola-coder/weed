import React from "react";
import { Image, View } from "react-native";
interface FadeInProps {
    duration?: number;
    className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ duration, className }) => {
    return (
        <View className="items-center">
            <Image source={require("../../../assets/image/veggies.png")} className={`${className} "h-12 w-32 mb-3"`} />
        </View>
    );
};

export default FadeIn;