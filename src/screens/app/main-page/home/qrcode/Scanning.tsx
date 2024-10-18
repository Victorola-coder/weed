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
import {
  ScanningScreenProps,
} from "@/routes/types";
import { Logo } from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
const ScanningScreen = ({ navigation }: ScanningScreenProps) => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [scannedData, setScannedData] = React.useState(null);

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
                <TouchableOpacity className="">
                  <Image
                    source={require("../../../../../../assets/image/back.png")}
                    className="h-7 w-7"
                    resizeMode="contain"
                    tintColor="#00500D"
                  />
                </TouchableOpacity>
                <Text className="text-center max-w-sm font-inder font-normal text-weed-primary-100 text-3xl uppercase">
                  Weed Key
                </Text>
                <TouchableOpacity className="">
                  <Image
                    source={require("../../../../../../assets/image/rescan.png")}
                    className="h-7 w-7"
                    resizeMode="contain"
                    tintColor="#00500D"
                  />
                </TouchableOpacity>
              </View>
              <View className="border border-weed-primary-100 w-full rounded-3xl  gap-10 px-20">
                <View className="flex-row items-end justify-center gap-2 mx-auto pt-10">
                  <View className="pb-2.5">
                    <Logo
                      color={Colors["weed-primary"][100]}
                      width="27"
                      height="27"
                    />
                  </View>
                  <View className="">
                    <Text className="text-weed-primary-100 text-4xl font-italianno">
                      Weed Match
                    </Text>
                  </View>
                </View>
                <View className="w-full h-72 my-14">
                  <Image
                    source={require("../../../../../../assets/image/code.png")}
                    className="h-full w-full"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <Text className="uppercase text-3xl font-inder font-normal text-weed-primary-100">
                Activated
              </Text>
              <View className="w-72 items-center py-5 gap-5">
                <Text className="text-weed-primary-100 text-center font-inder font-normal text-xl">
                  Your weed Match Key
                </Text>
                <Text className="text-center text-base font-inder font-normal text-weed-primary-100">
                  Scan your Weed Key QR code for exclusive access to Weed events
                  and fun treats.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenView>
  );
};

export default ScanningScreen;
