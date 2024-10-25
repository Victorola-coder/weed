import CustomButton from "@/components/button/CustomButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import { HEADERHEIGHT, HEIGHT } from "@/constants/Size";
import { Consumercards, ConsumerimageMap } from "@/data/arrays";
import ScreenView from "@/layouts/ScreenView";
import {
  CardConsumerProfileScreenProps,
  ConsumerProfileProps,
} from "@/routes/types";
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const CardConsumerProfile = ({
  navigation,
  swipeLeft,
  swipeRight,
}: CardConsumerProfileScreenProps & {
  swipeLeft: () => void;
  swipeRight: () => void;
}) => {
  
  const card = Consumercards[0];

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScreenView height={"100%"} marginTop={135}>
        <View className="flex-1 w-full px-5 pt-2">
          <View className="w-full flex-row justify-start pb-7">
            <TouchableOpacity
              className="flex justify-center items-start w-10"
              onPress={handleNavigation}
            >
              <Image
                source={require("../../../../../../../assets/image/back.png")}
                className="h-6 w-6 mr-2"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text className="flex-1 text-center text-3xl font-inder font-normal text-weed-primary-100 uppercase mr-10">
              Consumer Profile
            </Text>
          </View>
          <ScrollView
            contentContainerClassName="pb-20"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full gap-8">
              <View className="w-full gap-5 items-center">
                <View className="w-weed-15.6 h-weed-15.6 rounded-3xl">
                  <Image
                    source={require("../../../../../../../assets/image/consprof.png")}
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
                <Text className="text-weed-primary-100 font-inder font-normal text-lg">
                  Basics
                </Text>
                <View className="flex-row justify-start flex-wrap gap-x-8">
                  {card.weedBasics1.map((weedType, index) => (
                    <View
                    key={index}
                    className="flex-row my-2 gap-3 px-8 h-10 bg-weed-primary-100 rounded-full justify-center items-center"
                  >
                      <View className="h-19 items-center justify-center">
                        <Image
                          source={ConsumerimageMap[weedType as keyof typeof ConsumerimageMap]}
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
                          source={ConsumerimageMap[weedType as keyof typeof ConsumerimageMap]}
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
                    source={require("../../../../../../../assets/image/bstar.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-inder font-normal text-base">
                    Cannabis Consumer
                  </Text>
                </View>
              </View>
              <View className="w-full flex-row justify-center gap-weed-2.6 items-center">
                <TouchableOpacity
                  onPress={swipeLeft}
                  className="rounded-full bg-weed-primary-100 w-weed-4.3 h-weed-4.3 p-2 justify-center items-center"
                >
                  <Image
                    source={require("../../../../../../../assets/image/no.png")}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View className="flex-row gap-5 justify-center items-center">
                  <Image
                    source={require("../../../../../../../assets/image/star.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-inder font-normal text-base">
                    1 rating
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={swipeRight}
                  className="rounded-full bg-weed-primary-100 w-weed-4.3 h-weed-4.3 p-2 justify-center items-center"
                >
                  <Image
                    source={require("../../../../../../../assets/image/accept.png")}
                    className="w-7 h-7"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScreenView>
    </>
  );
};
export default CardConsumerProfile;