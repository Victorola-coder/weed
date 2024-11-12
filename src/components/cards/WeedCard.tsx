import { HEIGHT } from "@/constants/Size";
import { WeedCardimageMap } from "@/data/arrays";
import { CardData } from "@/data/list";
import { User } from "@/model/user.model";
import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface Props {
  user: User | null;
  numOfCards: number;
  curIndex: number;
  activeIndex: SharedValue<number>;
  navigation: any;
}
export const screenWidth = Dimensions.get("screen").width;
export const WeedCardWidth = Dimensions.get("screen").width * 0.9;
const WeedMatchCards = ({
  user,
  numOfCards,
  curIndex,
  activeIndex,
  navigation,
}: Props) => {
  const translationX = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onBegin((event) => console.log("onBegin:"))
    .onStart((event) => console.log("onStart:"))
    .onChange((event) => {
      translationX.value = event.translationX;
      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [curIndex, curIndex + 1]
      );
      // activeIndex.value = interpolate()
      // console.log(`On translationX: ${event.translationX}`);
    })
    // .onUpdate((event) => console.log(event))
    .onEnd((event) => {
      // event.v
      if (Math.abs(event.velocityX) > 400) {
        translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
          velocity: event.velocityX,
        });
        activeIndex.value = withSpring(curIndex + 1);
      } else {
        translationX.value = withSpring(0);
      }
    })
    .onFinalize((event) => console.log("onFinalize:"));
  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [curIndex - 1, curIndex, curIndex + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [curIndex - 1, curIndex, curIndex + 1],
          [0.95, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [curIndex - 1, curIndex, curIndex + 1],
          [0, 0, 0]
        ),
      },
      {
        translateX: translationX.value,
        //   activeIndex.value >= curIndex
        //     ? interpolate(
        //         activeIndex.value,
        //         [curIndex - 1, curIndex, curIndex + 1],
        //         [0, translationX.value, -screenWidth]
        //       )
        //     : 0,
        // activeIndex.value === curIndex ? translationX.value : 0,
      },
      {
        rotateZ:
          //   activeIndex.value === curIndex
          //     ?
          `${interpolate(
            translationX.value,
            [-screenWidth / 2, 0, screenWidth / 2],
            [-15, 0, 15]
          )}deg`,
        // : "0deg",
      },
    ],
  }));
  const mergeToArray = (
    describeAroma: Record<string, any>,
    method: Record<string, any>,
    whatEffect: Record<string, any>,
    whatStrain: Record<string, any>
  ) => {
    return [
      ...Object.values(describeAroma),
      ...Object.values(method),
      ...Object.values(whatEffect),
      ...Object.values(whatStrain),
    ];
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.card,
          animatedCard,
          {
            zIndex: numOfCards - curIndex,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("card-consumer-profile-screen")}
          className="absolute top-10 left-7 z-10"
        >
          <View className="items-center gap-2">
            <View className="h-weed-5.3 w-weed-5.3 rounded-full overflow-hidden">
              <ImageBackground
                source={require("../../../assets/image/profileGradient.png")}
                className="h-full w-full p-1 justify-center items-center"
              >
                <Image
                  source={user?.image as ImageSourcePropType}
                  className="w-full h-full rounded-full"
                  resizeMode="cover"
                />
              </ImageBackground>
            </View>
            <View className="rounded-lg bg-[#104F1EB2]">
              <Text className="px-4 py-2 font-inder text-base text-white">
                {user?.username}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {user?.weedprofile &&
            user?.weedprofile?.length > 0 &&
            user?.weedprofile.map((weedsection, index) => (
              <View key={index}>
                <ImageBackground
                  source={{ uri: weedsection.image }}
                  className="w-full justify-between rounded-3xl"
                  style={{
                    height: WeedCardWidth * 1.75,
                    borderRadius: 15,
                    overflow: "hidden",
                    marginBottom: 30,
                  }}
                >
                  <View className="flex-col pb-10 px-6 justify-end items-start h-full w-full gap-y-20">
                    <View className="gap-8">
                      <Text className="font-inder text-3xl text-white uppercase">
                        {weedsection.weedname}
                      </Text>
                      <Text className="font-inder text-base text-white w-60 leading-5">
                        {weedsection.weedbio}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
                <View className="w-full bg-weed-primary px-4 py-3 gap-4">
                  <Text className="text-white font-inder text-lg">
                    Weed Basics
                  </Text>
                  <View className="flex-row justify-start gap-x-4 flex-wrap">
                    {weedsection.describeAroma &&
                      weedsection.method &&
                      weedsection.whatEffect &&
                      weedsection.whatStrain &&
                      mergeToArray(
                        weedsection?.describeAroma,
                        weedsection?.method,
                        weedsection?.whatEffect,
                        weedsection?.whatStrain
                      )?.map((weedType, index) => (
                        <View
                          key={index}
                          className="flex-row my-2 gap-4 px-8 h-9 bg-weed-primary-100 rounded-full justify-center items-center"
                        >
                          <View className="h-9 items-center justify-center">
                            {/* <Image
                      source={
                        WeedCardimageMap[
                          weedType as keyof typeof WeedCardimageMap
                        ]
                      }
                      className="w-8 h-8"
                      resizeMode="contain"
                    /> */}
                          </View>
                          <Text className="text-white font-inder font-normal text-base">
                            {weedType}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>
              </View>
            ))}
          {/* <View className="w-full bg-weed-primary px-4 py-3 gap-4">
            <Text className="text-white font-inder text-lg">Weed Basics</Text>
            <View className="flex-row justify-start gap-x-4 flex-wrap">
              {user.weedBasics1.map((weedType, index) => (
                <View
                  key={index}
                  className="flex-row my-2 gap-4 px-8 h-9 bg-weed-primary-100 rounded-full justify-center items-center"
                >
                  <View className="h-9 items-center justify-center">
                    <Image
                      source={
                        WeedCardimageMap[
                          weedType as keyof typeof WeedCardimageMap
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
          </View> */}
          <View className="gap-8 bg-weed-primary">
            <View className="flex-row w-full justify-center items-center gap-5">
              <Image
                source={require("../../../assets/image/close.png")}
                className="h-8 w-8"
              />
              <Text className="font-inder font-normal text-center text-white text-lg">
                Cannabis Consumer
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-6">
              <TouchableOpacity
                // onPress={swipeLeft}
                className="rounded-full bg-weed-primary-100 w-weed-4.3 h-weed-4.3 p-2 justify-center items-center"
              >
                <Image
                  source={require("../../../assets/image/no.png")}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={swipeRight}
                className="rounded-full bg-weed-primary-100 w-weed-4.3 h-weed-4.3 p-2 justify-center items-center"
              >
                <Image
                  source={require("../../../assets/image/accept.png")}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row w-full justify-center items-center gap-5 pb-6">
              <Image
                source={require("../../../assets/image/star.png")}
                className="h-8 w-8"
              />
              <Image
                source={require("../../../assets/image/star.png")}
                className="h-8 w-8"
              />
              <Text className="font-inder font-normal text-center text-white text-lg">
                2 rating
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  );
};

export default WeedMatchCards;

const styles = StyleSheet.create({
  card: {
    width: WeedCardWidth,
    height: WeedCardWidth * 1.72,
    // height: WeedCardWidth * 1.67,
    // aspectRatio: 1 / 1.67,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: "absolute",
    backgroundColor: "#578461",
  },
  image: {
    borderRadius: 15,
    // resizeMode: "cover",
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#578461",
  },
  name: {
    fontSize: 24,
    color: "white",
    fontFamily: "InterBold",
  },
  footer: {
    padding: 10,
  },
  scrollContainer: {
    // padding: 10,
    minHeight: "100%",
  },
  details: {
    fontSize: 16,
    color: "white",
    marginTop: 8,
    fontFamily: "InterRegular",
  },
});

//    {/* Second Profile */}
//    <ImageBackground
//    source={user.weedImage2 as ImageSourcePropType}
//    className="w-full justify-between rounded-3xl"
//    style={{ height: WeedCardWidth * 1.75 }}
//  >
//    <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
//      <View className="gap-8">
//        <Text className="font-inder text-3xl text-white uppercase">
//          {user.weedName1}
//        </Text>
//        <Text className="font-inder text-base text-white w-60 leading-5">
//          {user.weedBio1}
//        </Text>
//      </View>
//    </View>
//  </ImageBackground>
//  <View className="w-full bg-weed-primary px-4 py-3 gap-4">
//    <Text className="text-white font-inder text-lg">Weed Basics</Text>
//    <View className="flex-row justify-start gap-x-4 flex-wrap">
//      {user.weedBasics1.map((weedType, index) => (
//        <View
//          key={index}
//          className="flex-row my-2 gap-4 px-8 h-9 bg-weed-primary-100 rounded-full justify-center items-center"
//        >
//          <View className="h-9 items-center justify-center">
//            <Image
//              source={
//                WeedCardimageMap[
//                  weedType as keyof typeof WeedCardimageMap
//                ]
//              }
//              className="w-8 h-8"
//              resizeMode="contain"
//            />
//          </View>
//          <Text className="text-white font-inder font-normal text-base">
//            {weedType}
//          </Text>
//        </View>
//      ))}
//    </View>
//  </View>
//  {/* Third Profile */}
//  <ImageBackground
//    source={user.weedImage3 as ImageSourcePropType}
//    className="w-full justify-between rounded-3xl"
//    style={{ height: WeedCardWidth * 1.75 }}
//  >
//    <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
//      <View className="gap-8">
//        <Text className="font-inder text-3xl text-white uppercase">
//          {user.weedName1}
//        </Text>
//        <Text className="font-inder text-lg text-white w-60 leading-5">
//          {user.weedBio1}
//        </Text>
//      </View>
//    </View>
//  </ImageBackground>
