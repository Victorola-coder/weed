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
import { logout } from "@/slice/AuthSlice";
import { RootState, useAppDispatch } from "@/store";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  StyleSheet,
  PixelRatio,
} from "react-native";
import { useSelector } from "react-redux";

type CombinedStackParamsList = AuthStackParamsList & AppStackParamsList;

const ProfileScreen = ({
  navigation,
}: StackScreenProps<CombinedStackParamsList, "profile-screen">) => {
  const selector = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const goToSubscription = () => {
    navigation.navigate("subscription-screen");
  };
  // console.log(selector.user, "profile screen");
  const goToEditProfile = () => {
    navigation.navigate("edit-profile-screen");
  };

  const handleLogoutUser = async () => {
    dispatch(logout());
    navigation.navigate("signin-screen");
  };

  useEffect(() => {}, []);

  const mergeToArray = (
    favouriteWay: Record<string, any>,
    oftenIndulge: Record<string, any>,
    preferredStrain: Record<string, any>,
    preferBalance: Record<string, any>,
    effectCana: Record<string, any>,
    recreOrMed: Record<string, any>,
    enjoyCana: Record<string, any>
  ) => {
    return [
      ...Object.values(favouriteWay),
      ...Object.values(oftenIndulge),
      ...Object.values(preferredStrain),
      ...Object.values(preferBalance),
      ...Object.values(effectCana),
      ...Object.values(recreOrMed),
      ...Object.values(enjoyCana),
    ];
  };
  const mergedData = mergeToArray(
    selector?.user?.favouriteWay || {},
    selector?.user?.oftenIndulge || {},
    selector?.user?.preferredStrain || {},
    selector?.user?.preferBalance || {},
    selector?.user?.effectCana || {},
    selector?.user?.recreOrMed || {},
    selector?.user?.enjoyCana || {}
  );
  const card = cards[0];
  console.log(mergedData, "smokeeee", selector?.user);
  return (
    <>
      <ScreenView height={"100%"}>
        <View className=" w-full px-5 pt-6">
          <View className="w-full flex-row items-center">
            <Text className="flex-1 text-center text-3xl font-inder font-normal text-weed-primary-100 uppercase">
              My Profile
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: Dimensions.get("window").height * 0.02,
            }}
          >
            <View className="flex-1 gap-8">
              {/* User Image and Name */}
              <View className="w-full gap-5 items-center">
                <View style={styles.imageStyle} className="rounded-3xl">
                  <Image
                    source={card.userImage}
                    className="w-full h-full rounded-3xl"
                  />
                </View>
                <View className="rounded-lg bg-[#104F1EB2]">
                  <Text className="px-4 py-2 font-inder font-normal text-base text-white">
                    {selector?.user?.username}
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
                <View className="flex-row justify-start flex-wrap gap-x-9">
                  {/* {mergedData?.slice(0, 2)?.map((weedType, index) => (
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
                  {mergedData?.slice(2, 4)?.map((weedType, index) => (
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
                  {mergedData?.slice(4, 5)?.map((weedType, index) => (
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
                  {mergedData?.slice(5)?.map((weedType, index) => (
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
                  ))} */}
                  {card.weedBasics.map((list, index) => (
                    <View
                      style={{
                        marginRight:
                          card.weedBasics.length - 1 === index ? 80 : 0,
                      }}
                      className="flex-row my-2 gap-3 px-8 h-10 bg-weed-primary-100 rounded-full justify-center items-center"
                    >
                      <View className="h-9 items-center justify-center">
                        <Image
                          source={imageMap[list as keyof typeof imageMap]}
                          className="w-8 h-8"
                          resizeMode="contain"
                        />
                      </View>
                      <Text className="text-white font-inder font-normal text-base">
                        {list}
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
              <View className="px-5 flex-col w-full justify-center items-center gap-8 pb-8">
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
                  onPress={handleLogoutUser}
                  className="border h-weed-3.7 border-white w-weed-20.6 rounded-2xl bg-weed-red justify-center items-center flex-row gap-5"
                >
                  <Text className="text-white text-base">Log out</Text>
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

const styles = StyleSheet.create({
  imageStyle: {
    width: PixelRatio.roundToNearestPixel(Dimensions.get("window").width * 0.6), // Adjust size relative to screen width
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").height * 0.303
    ),
  },
});
// console.log(Dimensions.get("window").width);
