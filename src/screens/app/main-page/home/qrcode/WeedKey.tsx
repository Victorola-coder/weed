import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  PixelRatio,
  Dimensions,
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
import { StyleSheet } from "react-native";
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
    <>
      <ScreenView className="bg-weed-primary" height={"100%"} marginTop={190}>
        <View
          className="w-full items-center justify-between flex flex-row absolute z-20 top-0 mt-4 px-8"
          // style={{ height: HEADERHEIGHT }}
        >
          <TouchableOpacity className="" onPress={handleGoBack}>
            <Image
              source={require("../../../../../../assets/image/back.png")}
              className="h-8 w-8"
              resizeMode="cover"
              tintColor="#00500D"
            />
          </TouchableOpacity>
          <HeaderText className="text-3xl uppercase text-weed-primary-100 font-inder">
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
        <View
        // style={{ height: HEIGHT }}
        >
          <View
            // style={{
            //   marginTop:
            // }}
            className="w-full justify-center items-center mt-20"
            // style={{ height: FULLHEIGHT }}
          >
            <ScrollView showsVerticalScrollIndicator={false} className="w-full">
              <View className="flex-1 w-full flex-col items-center px-8">
                <View
                  style={styles.cardSize}
                  className="border border-weed-primary-100 w-full flex-col justify-between rounded-3xl px-weed-3.0"
                >
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
                  <View style={styles.imageStyle} className="self-center pb-6">
                    <Image
                      source={require("../../../../../../assets/image/code.png")}
                      className="h-full w-full"
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <HeaderText className="uppercase text-3xl font-inder font-normal text-weed-primary-100 mt-2">
                  Activated
                </HeaderText>
                <View className="items-center py-4 gap-3">
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
    </>
  );
};

export default WeedKeyScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: PixelRatio.roundToNearestPixel(Dimensions.get("window").width * 0.6), // Adjust size relative to screen width
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").width * 0.83
    ),
  },
  cardSize: {
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").width * 0.95
    ),
  },
});
