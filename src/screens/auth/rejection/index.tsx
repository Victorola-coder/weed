import { FULLHEIGHT, HEADERHEIGHT, HEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useState } from "react";
import { BackHandler, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "@/components/button/PrimaryButton";
import Header from "@/layouts/Header";
import { RejectionScreenProps } from "@/routes/types";

const RejectionScreen = ({ navigation }: RejectionScreenProps) => {

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <ScreenView className="bg-weed-primary" marginTop={190}>
      <Header />
      <View className="mt-10" style={{ height: FULLHEIGHT }}>
        <View className="flex-1 justify-center gap-10">
          <View className="mx-auto gap-12">
            <Text className="text-base leading-6 text-center max-w-sm font-inder font-normal px-4">
              Sorry, you must be 18 years or older to use this app. Please exit
              the app.
            </Text>
            <PrimaryButton
              onPress={handleExit}
              className="border border-weed-primary-100 w-weed-12.5 rounded-2xl mx-auto mt-2"
            >
              {" "}
              Exit Weed Match
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default RejectionScreen;
