import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import Header from "@/layouts/Header";
import PrimaryButton from "@/components/button/PrimaryButton";
import {
  FavouriteWeedScreenProps,
  WeedFilterProps,
  WeedKeyProps,
} from "@/routes/types";
import DirectionButton from "@/components/button/DirectionButton";
import HomeHeader from "@/layouts/HomeHeader";
import { Logo } from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import { useCameraPermissions } from "expo-camera";
import HeaderText from "@/components/texts/HeaderText";
import SubHeaderText from "@/components/texts/SubHeaderText";
const WeedKeyScreen = ({ navigation }: WeedKeyProps) => {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const handleQRCodePress = async () => {
    if (!hasPermission || hasPermission.status !== "granted") {
      const { status } = await requestPermission();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Camera permission is required to proceed."
        );
        return;
      }
    }

    navigation.navigate("scanning-screen");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenView className="bg-weed-primary" height={"100%"} marginTop={190}>
      <View style={{ height: HEIGHT }}>
        <View
          className="w-full justify-center items-center"
          style={{ height: FULLHEIGHT }}
        >
          <ScrollView className="w-full" style={{ height: FULLHEIGHT }}>
            <View className="flex-1 w-full flex-col items-center gap-6 px-8">
              <View
                className="w-full items-center justify-between flex flex-row"
                style={{ height: HEADERHEIGHT }}
              >
                <TouchableOpacity className="" onPress={handleGoBack}>
                  <Image
                    source={require("../../../../../../assets/image/back.png")}
                    className="h-8 w-8"
                    resizeMode="cover"
                    tintColor="#00500D"
                  />
                </TouchableOpacity>
                <HeaderText className="text-2.5xl uppercase text-weed-primary-100 font-inder">
                  Weed Key
                </HeaderText>
                <TouchableOpacity onPress={handleQRCodePress}>
                  <Image
                    source={require("../../../../../../assets/image/scanner.png")}
                    className="h-8 w-8"
                    resizeMode="cover"
                    tintColor="#00500D"
                  />
                </TouchableOpacity>
              </View>
              <View className="border border-weed-primary-100 w-full flex-col justify-between h-weed-25 rounded-3xl px-weed-3.0">
                <View className="flex-row justify-center gap-2 mx-auto pt-4">
                  <View className="pt-1.5">
                    <Logo
                      color={Colors["weed-primary"][100]}
                      width="27"
                      height="27"
                    />
                  </View>
                  <View className="">
                    <HeaderText className="font-italianno text-4xl text-weed-primary-100">
                      Weed Match
                    </HeaderText>
                  </View>
                </View>
                <View className="w-weed-14.5 h-weed-25 self-center pb-6">
                  <Image
                    source={require("../../../../../../assets/image/code.png")}
                    className="h-full w-full"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <HeaderText className="uppercase text-2.5xl font-inder font-normal text-weed-primary-100 mt-10">
                Activated
              </HeaderText>
              <View className="items-center py-5 gap-5">
                <SubHeaderText className="text-weed-primary-100 text-center font-inder font-normal text-xl">
                  Your weed match key
                </SubHeaderText>
                <View>
                  <Text className="text-center text-sm font-inder font-normal leading-7 text-weed-primary-100">
                    Scan your Weed Key QR code for
                  </Text>
                  <Text className="text-center text-sm font-inder font-normal leading-7 text-weed-primary-100">
                    exclusive access to Weed events and
                  </Text>
                  <Text className="text-center text-sm font-inder font-normal leading-7 text-weed-primary-100">
                    fun treats.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenView>
  );
};

export default WeedKeyScreen;
