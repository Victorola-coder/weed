import { HEIGHT } from "@/constants/Size";
import { WeedCardimageMap } from "@/data/arrays";
import { CardData } from "@/data/list";
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
  user: CardData;
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
  // const swiperRef = useRef<Swiper<CardData> | null>(null);

  // const Card: CardData[] = [
  //   {
  //     id: 1,
  //     userName: "Thessa",
  //     userImage: require("../../../assets/image/ProfilePic.png"),
  //     weedImage1: require("../../../assets/image/upload.png"),
  //     weedName1: "PineApple Express",
  //     weedBio1:
  //       "All about Pineapple Express can be told or sent to you anytime of the day and can be sent to the other person.",
  //     weedBasics1: ["Sativa", "Energizing", "Sweet", "Indoor"],
  //     weedImage2: require("../../../assets/image/upload2.png"),
  //     weedName2: "Purple Haze",
  //     weedBio2: "Purple Haze can be sent with all its amazing properties.",
  //     weedBasics2: ["Indica", "Skunky", "Indoor", "Relaxing"],
  //     weedImage3: require("../../../assets/image/upload3.png"),
  //     weedName3: "White Widow",
  //     weedBio3: "White Widow is available in multiple forms.",
  //     weedBasics3: ["Fruity", "Euphoric", "Earthly", "Unsure"],
  //   },
  //   {
  //     id: 2,
  //     userName: "Elena",
  //     userImage: require("../../../assets/image/sam.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "OG Kush",
  //     weedBio1: "OG Kush can be found all day.",
  //     weedBasics1: ["Hybrid", "Relaxing", "Earthly", "Outdoor"],
  //     weedImage2: require("../../../assets/image/upload3.png"),
  //     weedName2: "Gelato Weed",
  //     weedBio2: "Gelato Weed is a top-tier selection.",
  //     weedBasics2: ["Indica", "Earthly", "Sweet", "Indoor"],
  //     weedImage3: require("../../../assets/image/upload.png"),
  //     weedName3: "Sour Diesel",
  //     weedBio3: "Sour Diesel has a pungent yet fruity aroma.",
  //     weedBasics3: ["Sativa", "Energizing", "Woody", "Greenhouse"],
  //   },
  //   {
  //     id: 3,
  //     userName: "Alex",
  //     userImage: require("../../../assets/image/rey.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "Gorilla Glue",
  //     weedBio1: "Gorilla Glue is perfect for winding down your day.",
  //     weedBasics1: ["Hybrid", "Relaxing", "Sweet", "Hydropanic"],
  //     weedImage2: require("../../../assets/image/upload2.png"),
  //     weedName2: "Skywalker OG",
  //     weedBio2: "Skywalker OG is available for the adventurous.",
  //     weedBasics2: ["Indica", "Skunky", "Indoor", "Relaxing"],
  //     weedImage3: require("../../../assets/image/upload3.png"),
  //     weedName3: "Ak-47 Weed",
  //     weedBio3: "Ak-47 Weed has a robust and flavorful experience.",
  //     weedBasics3: ["Sativa", "Euphoric", "Floral", "Indoor"],
  //   },
  //   {
  //     id: 4,
  //     userName: "Chris",
  //     userImage: require("../../../assets/image/richie.png"),
  //     weedImage1: require("../../../assets/image/upload3.png"),
  //     weedName1: "Jack Herer Weed",
  //     weedBio1: "Jack Herer Weed is perfect for creative minds.",
  //     weedBasics1: ["Sativa", "Euphoric", "Citrusy", "Outdoor"],
  //     weedImage2: require("../../../assets/image/upload3.png"),
  //     weedName2: "Lemon Haze",
  //     weedBio2: "Lemon Haze is refreshing and energizing.",
  //     weedBasics2: ["Sativa", "Energizing", "Sweet", "Indoor"],
  //     weedImage3: require("../../../assets/image/upload1.png"),
  //     weedName3: "Black Cherry Soda",
  //     weedBio3: "Black Cherry Soda is fruity and flavorful.",
  //     weedBasics3: ["Hybrid", "Euphoric", "Fruity", "Outdoor"],
  //   },
  //   {
  //     id: 5,
  //     userName: "Emma",
  //     userImage: require("../../../assets/image/user1.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "Northern Lights",
  //     weedBio1: "Northern Lights is a calming indica.",
  //     weedBasics1: ["Indica", "Relaxing", "Earthly", "Greenhouse"],
  //     weedImage2: require("../../../assets/image/upload1.png"),
  //     weedName2: "White Widow",
  //     weedBio2: "White Widow is available for calming effects.",
  //     weedBasics2: ["Hybrid", "Creative", "Woody", "Indoor"],
  //     weedImage3: require("../../../assets/image/upload1.png"),
  //     weedName3: "Blue Dream",
  //     weedBio3: "Blue Dream is known for its balanced effects.",
  //     weedBasics3: ["Sativa", "Relaxing", "Sweet", "Indoor"],
  //   },
  //   {
  //     id: 6,
  //     userName: "Liam",
  //     userImage: require("../../../assets/image/user2.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "Girl Scout Cookies",
  //     weedBio1: "Girl Scout Cookies is known for its euphoric effects.",
  //     weedBasics1: ["Hybrid", "Euphoric", "Sweet", "Outdoor"],
  //     weedImage2: require("../../../assets/image/upload1.png"),
  //     weedName2: "OG Kush",
  //     weedBio2: "OG Kush is a classic choice for relaxation.",
  //     weedBasics2: ["Indica", "Relaxing", "Earthly", "Greenhouse"],
  //     weedImage3: require("../../../assets/image/upload1.png"),
  //     weedName3: "Purple Hazard",
  //     weedBio3: "Purple Hazard delivers a powerful experience.",
  //     weedBasics3: ["Hybrid", "Energizing", "Spicy", "Indoor"],
  //   },
  //   {
  //     id: 7,
  //     userName: "Sophia",
  //     userImage: require("../../../assets/image/user8.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "Purple Haze",
  //     weedBio1: "Purple Haze provides creative and uplifting effects.",
  //     weedBasics1: ["Sativa", "Creative", "Woody", "Outdoor"],
  //     weedImage2: require("../../../assets/image/upload1.png"),
  //     weedName2: "Alaskan Thunder",
  //     weedBio2: "Alaskan Thunder is perfect for an outdoor adventure.",
  //     weedBasics2: ["Hybrid", "Euphoric", "Fruity", "Greenhouse"],
  //     weedImage3: require("../../../assets/image/upload1.png"),
  //     weedName3: "Pineapple Express",
  //     weedBio3: "Pineapple Express gives a sweet and earthy flavor.",
  //     weedBasics3: ["Sativa", "Energizing", "Sweet", "Indoor"],
  //   },
  //   {
  //     id: 8,
  //     userName: "Olivia",
  //     userImage: require("../../../assets/image/user9.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "Sour Diesel",
  //     weedBio1: "Sour Diesel is a strong Sativa strain.",
  //     weedBasics1: ["Sativa", "Energizing", "Citrusy", "Outdoor"],
  //     weedImage2: require("../../../assets/image/upload1.png"),
  //     weedName2: "Northern Lights",
  //     weedBio2: "Northern Lights is perfect for a calming experience.",
  //     weedBasics2: ["Indica", "Relaxing", "Woody", "Greenhouse"],
  //     weedImage3: require("../../../assets/image/upload1.png"),
  //     weedName3: "Ak-47",
  //     weedBio3: "Ak-47 has a well-balanced experience.",
  //     weedBasics3: ["Hybrid", "Euphoric", "Earthly", "Indoor"],
  //   },
  //   {
  //     id: 9,
  //     userName: "Jackson",
  //     userImage: require("../../../assets/image/ProfilePic.png"),
  //     weedImage1: require("../../../assets/image/upload1.png"),
  //     weedName1: "Skywalker OG",
  //     weedBio1: "Skywalker OG delivers a powerful indica high.",
  //     weedBasics1: ["Indica", "Relaxing", "Fruity", "Indoor"],
  //     weedImage2: require("../../../assets/image/upload1.png"),
  //     weedName2: "White Widow",
  //     weedBio2: "White Widow gives an energizing and euphoric feeling.",
  //     weedBasics2: ["Hybrid", "Energizing", "Sweet", "Outdoor"],
  //     weedImage3: require("../../../assets/image/upload1.png"),
  //     weedName3: "Lemon Haze",
  //     weedBio3: "Lemon Haze has a refreshing citrusy flavor.",
  //     weedBasics3: ["Sativa", "Energizing", "Citrusy", "Greenhouse"],
  //   },
  // ];
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
                  source={user.userImage as ImageSourcePropType}
                  className="w-full h-full rounded-full"
                  resizeMode="cover"
                />
              </ImageBackground>
            </View>
            <View className="rounded-lg bg-[#104F1EB2]">
              <Text className="px-4 py-2 font-inder text-base text-white">
                {user.userName}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={user.weedImage1 as ImageSourcePropType}
            className="w-full justify-between rounded-3xl"
            style={{ height: WeedCardWidth * 1.69 }}
          >
            <View className="flex-col pb-10 px-6 justify-end items-start h-full w-full gap-y-20">
              <View className="gap-8">
                <Text className="font-inder text-3xl text-white uppercase">
                  {user.weedName1}
                </Text>
                <Text className="font-inder text-base text-white w-60 leading-5">
                  {user.weedBio1}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View className="w-full bg-weed-primary px-4 py-3 gap-4">
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
          </View>
          {/* Second Profile */}
          <ImageBackground
            source={user.weedImage2 as ImageSourcePropType}
            className="w-full justify-between rounded-3xl"
            style={{ height: WeedCardWidth * 1.69 }}
          >
            <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
              <View className="gap-8">
                <Text className="font-inder text-3xl text-white uppercase">
                  {user.weedName1}
                </Text>
                <Text className="font-inder text-base text-white w-60 leading-5">
                  {user.weedBio1}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View className="w-full bg-weed-primary px-4 py-3 gap-4">
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
          </View>
          {/* Third Profile */}
          <ImageBackground
            source={user.weedImage3 as ImageSourcePropType}
            className="w-full justify-between rounded-3xl"
            style={{ height: WeedCardWidth * 1.69 }}
          >
            <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
              <View className="gap-8">
                <Text className="font-inder text-3xl text-white uppercase">
                  {user.weedName1}
                </Text>
                <Text className="font-inder text-lg text-white w-60 leading-5">
                  {user.weedBio1}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View className="w-full bg-weed-primary px-4 py-3 gap-4">
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
          </View>
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
    height: WeedCardWidth * 1.67,
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
