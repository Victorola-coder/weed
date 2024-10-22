import DirectionButton from "@/components/button/DirectionButton";
import { HEIGHT, FULLHEIGHT, HEADERHEIGHT } from "@/constants/Size";
import { FavouriteweedItems } from "@/data/arrays";
import ScreenView from "@/layouts/ScreenView";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";



const FavouritesScreen = () => {
  return (
    <ScreenView height={"100%"} marginTop={190}>
      <View className="w-full flex flex-row justify-center items-center py-10">
        <Text className="text-center max-w-sm font-inder font-normal text-weed-primary-100 text-2.5xl uppercase">
          Potential Weed Match
        </Text>
      </View>
      <ScrollView
        className="flex-1 w-full"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 w-full flex-col items-center justify-start pt-4 pb-24">
          <View className="w-full flex-1 flex-row flex-wrap justify-center gap-weed-1.0 items-center">
            {FavouriteweedItems.map((item, index) => (
              <TouchableOpacity key={index}>
                <ImageBackground
                  imageClassName="rounded-[1.25rem]"
                  source={item.image}
                  className="w-weed-10.8 h-weed-15.6 mb-1 flex-col items-center justify-end py-2"
                >
                  <View className="items-center gap-2">
                    <View className="h-weed-6.2 w-weed-6.2 rounded-full overflow-hidden">
                      <ImageBackground
                        source={require("../../../../../assets/image/profileGradient.png")}
                        className="h-full w-full p-1 justify-center items-center"
                      >
                        <Image
                          source={item.userImage}
                          className="w-full h-full rounded-full"
                          resizeMode="contain"
                        />
                      </ImageBackground>
                    </View>
                    <View className="rounded-lg bg-weed-name">
                      <Text className="px-4 py-2 font-inder font-normal text-base text-white">
                        {item.username}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default FavouritesScreen;
