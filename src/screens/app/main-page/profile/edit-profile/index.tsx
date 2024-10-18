import CustomButton from "@/components/button/CustomButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import { cards, imageMap } from "@/data/arrays";
import ScreenView from "@/layouts/ScreenView";
import {
  AppStackParamsList,
  AuthStackParamsList,
  EditProfileScreenProps,
  ProfileScreenProps,
} from "@/routes/types";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const EditProfileScreen = ({ navigation }: EditProfileScreenProps) => {
  

  const goToSubscription = () => {
    navigation.navigate("subscription-screen");
  };
  const handleNavigation = () => {
    navigation.goBack();
  };
  const card = cards[0];
  return (
    <>
      <ScreenView height={"100%"} marginTop={135}>
        <View className=" w-full px-5 pt-2">
          <View className="w-full flex-row items-center pb-6">
            <TouchableOpacity
              className="flex justify-end items-start w-10 h-10"
              onPress={handleNavigation}
            >
              <Image
                source={require("../../../../../../assets/image/back.png")}
                className="h-6 w-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text className="flex-1 text-center text-2.5xl font-inder font-normal text-weed-primary-100 uppercase mr-10">
              Edit Profile
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
                  <ImageBackground
                    source={card.userImage}
                    className="w-full h-full rounded-3xl"
                  >
                    <View className="bg-black/50 w-full h-full rounded-3xl flex justify-center items-center">
                      <Text className="text-white font-inder text-base">
                        choose image
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <View className="flex-row gap-2 items-center">
                  <View className="rounded-lg bg-[#104F1EB2]">
                    <Text className="px-4 py-2 font-inder font-normal text-base text-white">
                      {card.userName}
                    </Text>
                  </View>
                  <Image
                    source={require("../../../../../../assets/image/edit.png")}
                    tintColor="black"
                    className="w-5 h-5"
                  />
                </View>
              </View>

              {/* Basics Section */}
              <View className="w-full gap-3">
                <View className="w-full flex flex-row justify-between items-center">
                  <Text className="text-weed-primary-100 font-inder font-normal text-lg">
                    Basics
                  </Text>
                  <Image
                    source={require("../../../../../../assets/image/edit.png")}
                    tintColor="black"
                    className="w-5 h-5"
                  />
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
                <View className="w-full flex flex-row justify-between items-center">
                  <Text className="text-weed-primary-100 font-inder font-normal text-lg">
                    Favourite Weed
                  </Text>
                  <Image
                    source={require("../../../../../../assets/image/edit.png")}
                    tintColor="black"
                    className="w-5 h-5"
                  />
                </View>
                <View className="flex-row flex-wrap justify-start">
                  {card.weedFavourite.map((weedType, index) => (
                    <View
                      key={index}
                      className="flex-row mr-4 my-2 gap-4 px-8 h-10 bg-weed-primary-100 rounded-full justify-center items-center"
                    >
                      <View className="h-9 justify-center items-center">
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

              {/* Buttons Section */}
              <View className="px-5 flex-col w-full justify-center items-center gap-8 pb-28">
                <CustomButton
                  onPress={() => {}}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-primary-100 justify-center items-center flex-row gap-4"
                >
                  <Image
                    source={require("../../../../../../assets/image/done.png")}
                    tintColor="white"
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-base">Done</Text>
                </CustomButton>
                <CustomButton
                  onPress={() => {}}
                  className="border h-weed-3.7 border-weed-primary-100 w-weed-20.6 rounded-2xl bg-weed-red justify-center items-center flex-row gap-4"
                >
                  <Image
                    source={require("../../../../../../assets/image/trash.png")}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <Text className="text-white text-lg">Delete Account</Text>
                </CustomButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScreenView>
    </>
  );
};
export default EditProfileScreen;
