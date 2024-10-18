import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ScreenView from "@/layouts/ScreenView";
import { SplashScreenProps } from "@/routes/types";
import TypingAnimation from "@/components/animations/TypingAnimation";
import FadeIn from "@/components/animations/FadeInImageAnimation";
import LogoAnimation from "@/components/animations/LogoAnimation";
import { Text } from "react-native";

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const [fadeInTriggered, setFadeInTriggered] = useState(false);

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigation.navigate("age-screen");
    }, 4000);

    return () => clearTimeout(navigationTimeout);
  }, [navigation]);

  return (
    <ScreenView height={"100%"} className="bg-weed-primary" marginTop={190}>
      <View className="flex-1 justify-center items-center">
        <View className="h-40 justify-between items-center">
          <LogoAnimation onFadeInTrigger={() => setFadeInTriggered(true)} />
          {fadeInTriggered && (
            <View className="absolute bottom-0 mb-5">
              <FadeIn />
            </View>
          )}
        </View>
        <TypingAnimation text="Weed Match" />
      </View>
    </ScreenView>
  );
};

export default SplashScreen;
