import { Logo } from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import { ImageBackground } from "react-native";
import PrimaryButton from "@/components/button/PrimaryButton";
import Header from "@/layouts/Header";
import { BackImage } from "@/components/svg/BackImage";
import { WelcomeScreenProps } from "@/routes/types";
import CustomInput from "@/components/input/CustomInput";
import HeaderText from "@/components/texts/HeaderText";

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("profilesetup-screen");
    }, 1000);
  }, [navigation]);

  return (
    <ScreenView className="bg-weed-primary" marginTop={190}>
      <Header />
      <View
        // style={{ height: HEIGHT }}
        className="justify-center items-center"
      >
        <View className="justify-center max-w-lg w-full items-center mx-auto px-10 mt-">
          <View
            className="mx-auto max-w-lg w-full justify-center mt-16"
            // style={{ height: HEIGHT * 0.6 }}
          >
            <View>
              <HeaderText className="text-center max-w-lg font-inder font-medium text-weed-primary-100 text-3xl uppercase pb-weed-1.2">
                welcome
              </HeaderText>
              <HeaderText className="text-center max-w-lg font-inder font-normal text-weed-primary-100 text-3xl uppercase">
                LET’S GET TO KNOW YOU
              </HeaderText>
            </View>
          </View>
          <View
            className="mx-auto max-w-lg w-full justify-end"
            // style={{ height: HEIGHT * 0.5 }}
          ></View>
        </View>
      </View>
      <View className="mx-auto max-w-sm w-full h-0.5 absolute bottom-10 bg-weed-primary-100" />
    </ScreenView>
  );
};

export default WelcomeScreen;
