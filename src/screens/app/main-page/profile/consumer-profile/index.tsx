import CustomButton from "@/components/button/CustomButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import { HEADERHEIGHT, HEIGHT } from "@/constants/Size";
import { Consumercards, ConsumerimageMap } from "@/data/arrays";
import ScreenView from "@/layouts/ScreenView";
import { ConsumerProfileProps } from "@/routes/types";
import React from "react";
import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const ConsumerProfile = ({ navigation }: ConsumerProfileProps) => {
  const card = Consumercards[0];

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScreenView height={"100%"} marginTop={135}>
        <View className="w-full px-5 pt-10">
          <View className="w-full flex-row justify-start pb-7">
            <TouchableOpacity
              className="flex justify-center items-start w-10"
              onPress={handleNavigation}
            >
              <Image
                source={require("../../../../../../assets/image/back.png")}
                className="h-8 w-8 mr-2"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text className="flex-1 text-center text-3xl font-inder font-normal text-weed-primary-100 uppercase mr-10">
              Consumer Profile
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              paddingTop: Dimensions.get("window").height * 0.055,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                gap: Dimensions.get("screen").width * 0.06,
              }}
              className="w-full"
            >
              <View className="w-full gap-5 items-center">
                <View
                  style={styles.imageStyle}
                  className="rounded-3xl overflow-hidden"
                >
                  <Image
                    source={require("../../../../../../assets/image/consprof.png")}
                    className="w-full h-full rounded-3xl"
                    resizeMode="contain"
                  />
                </View>
                <View className="rounded-lg bg-[#104F1EB2]">
                  <Text className="px-4 py-2 font-inder font-normal text-base text-white">
                    {card.userName}
                  </Text>
                </View>
              </View>
              <View className="w-full gap-3">
                <View className="w-full flex flex-row justify-between items-center">
                  <Text className="text-weed-primary-100 font-inder font-normal text-lg">
                    Basics
                  </Text>
                </View>
                <View className="flex-row justify-start flex-wrap gap-x-10">
                  {card.weedBasics1.map((weedType, index) => (
                    <View
                      style={{
                        marginRight:
                          card.weedBasics1.length - 1 === index ? 80 : 0,
                      }}
                      key={index}
                      className="flex-row my-2 gap-3 px-8 h-10 bg-weed-primary-100 rounded-full justify-center items-center"
                    >
                      <View className="h-9 items-center justify-center">
                        <Image
                          source={
                            ConsumerimageMap[
                              weedType as keyof typeof ConsumerimageMap
                            ]
                          }
                          className="w-8 h-8"
                          resizeMode="contain"
                        />
                      </View>
                      <Text className="text-white font-inder font-normal text-base">
                        {weedType}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              {/* Favorite Weed Section */}
              <View className="w-full gap-3">
                <Text className="text-weed-primary-100 font-inder font-normal text-lg">
                  Favourite Weed
                </Text>
                <View className="flex-row flex-wrap justify-start">
                  {card.weedFavourite.map((weedType, index) => (
                    <View
                      key={index}
                      className="flex-row mr-4 my-2 gap-4 px-8 h-10 bg-weed-primary-100 rounded-full justify-center items-center"
                    >
                      <View className="h-10 justify-center items-center">
                        <Image
                          source={
                            ConsumerimageMap[
                              weedType as keyof typeof ConsumerimageMap
                            ]
                          }
                          className="w-9 h-9"
                          resizeMode="contain"
                        />
                      </View>
                      <Text className="text-white font-inder font-normal text-base">
                        {weedType}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View className="gap-8">
                <View className="w-full flex-row gap-5 justify-center items-center">
                  <Image
                    source={require("../../../../../../assets/image/bstar.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-inder font-normal text-base">
                    Cannabis Consumer
                  </Text>
                </View>
                <View className="w-full flex-row gap-5 justify-center items-center">
                  <Image
                    source={require("../../../../../../assets/image/star.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-inder font-normal text-base">
                    1 rating
                  </Text>
                </View>
              </View>
              <View className="px-5 flex-col w-full justify-center items-center gap-8 pb-12">
                <CustomButton
                  onPress={() => {}}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-primary-100 justify-center items-center flex-row gap-5"
                >
                  <Image
                    source={require("../../../../../../assets/image/close.png")}
                    tintColor="white"
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-base">
                    Rate this Account
                  </Text>
                </CustomButton>
                <CustomButton
                  onPress={() => {}}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-primary-100 justify-center items-center flex-row gap-5"
                >
                  <Image
                    source={require("../../../../../../assets/image/unmatch.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-base">Unmatch</Text>
                </CustomButton>
                <CustomButton
                  onPress={() => {}}
                  className="border h-weed-3.7 border-weed-primary-100 w-weed-20.6 rounded-2xl bg-weed-red justify-center items-center flex-row gap-4"
                >
                  <Image
                    source={require("../../../../../../assets/image/report.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-lg">Report</Text>
                </CustomButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScreenView>
    </>
  );
};
export default ConsumerProfile;

const styles = StyleSheet.create({
  imageStyle: {
    width: PixelRatio.roundToNearestPixel(Dimensions.get("window").width * 0.6), // Adjust size relative to screen width
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").height * 0.309
    ),
  },
});
