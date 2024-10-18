import CustomButton from "@/components/button/CustomButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import { cards, imageMap } from "@/data/arrays";
import ScreenView from "@/layouts/ScreenView";
import {
  AppStackParamsList,
  AuthStackParamsList,
  ProfileScreenProps,
} from "@/routes/types";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, Text, View, Image } from "react-native";

type CombinedStackParamsList = AuthStackParamsList & AppStackParamsList;

const ProfileScreen = ({
  navigation,
}: StackScreenProps<CombinedStackParamsList, "profile-screen">) => {
  

  const goToSubscription = () => {
    navigation.navigate("subscription-screen");
  };

  const goToEditProfile = () => {
    navigation.navigate("edit-profile-screen");
  };

  const card = cards[0];
  return (
    <>
      <ScreenView height={"100%"} marginTop={135}>
        <View className=" w-full px-5 pt-2 ">
          <View className="w-full flex-row items-center pb-7">
            <Text className="flex-1 text-center text-2.5xl font-inder font-normal text-weed-primary-100 uppercase">
              My Profile
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
          >
            <View className="flex-1 gap-8">
              {/* User Image and Name */}
              <View className="w-full gap-5 items-center">
                <View className="w-weed-15.6 h-weed-15.6 rounded-3xl">
                  <Image
                    source={card.userImage}
                    className="w-full h-full rounded-3xl"
                  />
                </View>
                <View className="rounded-lg bg-[#104F1EB2]">
                  <Text className="px-4 py-2 font-inder font-normal text-base text-white">
                    {card.userName}
                  </Text>
                </View>
              </View>

              {/* Basics Section */}
              <View className="w-full gap-3">
                <View className="w-full flex flex-row justify-between items-center">
                  <Text className="text-weed-primary-100 font-inder font-normal text-lg">
                    Basics
                  </Text>
                </View>
                <View className="flex-row justify-start flex-wrap gap-x-8">
                  {card.weedBasics.map((weedType, index) => (
                    <View
                      key={index}
                      className="flex-row my-2 gap-3 px-8 h-10 bg-weed-primary-100 rounded-full justify-center items-center"
                    >
                      <View className="h-9 items-center justify-center">
                        <Image
                          source={imageMap[weedType as keyof typeof imageMap]}
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
                          source={imageMap[weedType as keyof typeof imageMap]}
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

              {/* Other Components */}
              <View className="gap-8">
                <View className="w-full flex-row gap-5 justify-center items-center">
                  <Image
                    source={require("../../../../../assets/image/bstar.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-inder font-normal text-base">
                    Cannabis Consumer
                  </Text>
                </View>
                <View className="w-full flex-row gap-5 justify-center items-center">
                  <Image
                    source={require("../../../../../assets/image/star.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white font-inder font-normal text-base">
                    1 rating
                  </Text>
                </View>
              </View>

              {/* Buttons Section */}
              <View className="px-5 flex-col w-full justify-center items-center gap-8 pb-28">
                <CustomButton
                  onPress={goToEditProfile}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-primary-100 justify-center items-center flex-row gap-5"
                >
                  <Image
                    source={require("../../../../../assets/image/edit.png")}
                    tintColor="white"
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-base">Edit Profile</Text>
                </CustomButton>
                <CustomButton
                  onPress={goToSubscription}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-primary-100 justify-center items-center flex-row gap-5"
                >
                  <Image
                    source={require("../../../../../assets/image/upgrade.png")}
                    tintColor="white"
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-base">
                    Upgrade Membership
                  </Text>
                </CustomButton>
                <CustomButton
                  onPress={() => {}}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-primary-100 justify-center items-center flex-row gap-5"
                >
                  <Image
                    source={require("../../../../../assets/image/med.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-lg">
                    Apply as a Medical Provider
                  </Text>
                </CustomButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScreenView>
    </>
  );
};
export default ProfileScreen;