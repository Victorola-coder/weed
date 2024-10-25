import { HEIGHT, WIDTH } from "@/constants/Size";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { ConsumerProfileProps } from "@/routes/types";
import Swiper from "react-native-deck-swiper";
import { CardData } from "@/data/list";
import { WeedCardimageMap, WeedCards } from "@/data/arrays";



const WeedMatchCards = ({ navigation, route }: ConsumerProfileProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<Swiper<CardData> | null>(null);
  
  const swipeLeft = () => {
    console.log("Attempting to swipe left");
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    } else {
      console.error("Swiper ref is not set");
    }
  };

  const swipeRight = () => {
    console.log("Attempting to swipe right");
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    } else {
      console.error("Swiper ref is not set");
    }
  };

  const renderCard = (cardData: CardData) => (
    <View
      style={{ height: HEIGHT * 0.76 }}
      className="rounded-3xl overflow-hidden"
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
                source={cardData.userImage as ImageSourcePropType}
                className="w-full h-full rounded-full"
                resizeMode="cover"
              />
            </ImageBackground>
          </View>
          <View className="rounded-lg bg-[#104F1EB2]">
            <Text className="px-4 py-2 font-inder text-base text-white">
              {cardData.userName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* First Profile */}
      <ScrollView>
        <ImageBackground
          source={cardData.weedImage1 as ImageSourcePropType}
          className="w-full justify-between rounded-3xl"
          style={{ height: HEIGHT * 0.76 }}
        >
          <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
            <View className="gap-8">
              <Text className="font-inder text-3xl text-white uppercase">
                {cardData.weedName1}
              </Text>
              <Text className="font-inder text-base text-white w-60 leading-5">
                {cardData.weedBio1}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View className="w-full bg-weed-primary p-6 gap-4">
          <Text className="text-white font-inder text-lg">Weed Basics</Text>
          <View className="flex-row justify-start gap-x-8 flex-wrap">
            {cardData.weedBasics1.map((weedType, index) => (
              <View
                key={index}
                className="flex-row my-2 gap-4 px-8 h-9 bg-weed-primary-100 rounded-full justify-center items-center"
              >
                <View className="h-9 items-center justify-center">
                  <Image
                    source={WeedCardimageMap[weedType as keyof typeof WeedCardimageMap]}
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
          source={cardData.weedImage2 as ImageSourcePropType}
          className="w-full justify-between rounded-3xl"
          style={{ height: HEIGHT * 0.7 }}
        >
          <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
            <View className="gap-8">
              <Text className="font-inder text-3xl text-white uppercase">
                {cardData.weedName1}
              </Text>
              <Text className="font-inder text-base text-white w-60 leading-5">
                {cardData.weedBio1}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View className="w-full bg-weed-primary p-6 gap-3">
          <Text className="text-white font-inder text-lg">Weed Basics</Text>
          <View className="flex-row justify-start gap-x-8 flex-wrap">
            {cardData.weedBasics1.map((weedType, index) => (
              <View
                key={index}
                className="flex-row my-2 gap-4 px-8 h-9 bg-weed-primary-100 rounded-full justify-center items-center"
              >
                <View className="h-9 items-center justify-center">
                  <Image
                    source={WeedCardimageMap[weedType as keyof typeof WeedCardimageMap]}
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
          source={cardData.weedImage3 as ImageSourcePropType}
          className="w-full justify-between rounded-3xl"
          style={{ height: HEIGHT * 0.7 }}
        >
          <View className="flex-col py-8 px-6 justify-end items-start h-full w-full gap-y-20">
            <View className="gap-8">
              <Text className="font-inder text-3xl text-white uppercase">
                {cardData.weedName1}
              </Text>
              <Text className="font-inder text-lg text-white w-60 leading-5">
                {cardData.weedBio1}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View className="w-full bg-weed-primary p-6 gap-3">
          <Text className="text-white font-inder text-lg">Weed Basics</Text>
          <View className="flex-row justify-start gap-x-8 flex-wrap">
            {cardData.weedBasics1.map((weedType, index) => (
              <View
                key={index}
                className="flex-row my-2 gap-4 px-8 h-9 bg-weed-primary-100 rounded-full justify-center items-center"
              >
                <View className="h-9 items-center justify-center">
                  <Image
                    source={WeedCardimageMap[weedType as keyof typeof WeedCardimageMap]}
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
              onPress={swipeLeft}
              className="rounded-full bg-weed-primary-100 w-weed-4.3 h-weed-4.3 p-2 justify-center items-center"
            >
              <Image
                source={require("../../../assets/image/no.png")}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={swipeRight}
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
    </View>
  );
  return (
    <View
      className="justify-start items-start w-full"
      style={{ height: HEIGHT * 0.7 }}
    >
      <Swiper
        ref={swiperRef}
        cards={WeedCards}
        renderCard={renderCard}
        keyExtractor={(cardData) => cardData.id.toString()}
        cardIndex={0}
        infinite={true}
        horizontalSwipe={true}
        verticalSwipe={false}
        showSecondCard={true}
        stackSize={2}
        onTapCardDeadZone={5}
        verticalThreshold={100}
        stackSeparation={10}
        stackScale={3}
        backgroundColor="transparent"
        marginTop={0}
        cardVerticalMargin={0}
      />
    </View>
  );
};

export default WeedMatchCards;
