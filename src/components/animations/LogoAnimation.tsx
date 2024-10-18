import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Image } from "react-native";

interface LogoAnimationProps {
    onFadeInTrigger?: () => void;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ onFadeInTrigger }) => {
    const [showImage, setShowImage] = useState(false);
    const heightAnimation = useState(new Animated.Value(87))[0];
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowImage(true);
            Animated.timing(heightAnimation, {
                toValue: 150,
                duration: 1000,
                useNativeDriver: false,
            }).start(() => {
                setAnimationCompleted(true);
                if (onFadeInTrigger) {
                    onFadeInTrigger();
                }
            });
        }, 1000);
    }, [heightAnimation, onFadeInTrigger]);

    return (
        <>
            <View className="h-32 absolute">
                {showImage ? (
                    <Animated.Image
                        source={require("../../../assets/image/weed_img.png")}
                        style={[styles.image]}
                    />
                ) : (
                    <Image source={require("../../../assets/image/logo.png")} />
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
    },
});

export default LogoAnimation;