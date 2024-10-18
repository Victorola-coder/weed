import ChatCard from "@/components/cards/ChatCard";
import SearchBar from "@/components/search/SearchBar";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import { chatData, profileImages } from "@/data/arrays";
import ProfileImageGradient from "@/layouts/ProfileImageGradient";
import ScreenView from "@/layouts/ScreenView";
import {
  AppStackParamsList,
  AuthStackParamsList,
  ChatScreenProps,
} from "@/routes/types";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";

type CombinedStackParamsList = AuthStackParamsList & AppStackParamsList;

const MessagesScreen = ({
  navigation,
}: StackScreenProps<CombinedStackParamsList, "messages-screen">) => {
  const handleNavigation = () => {
    navigation.navigate("home-screen");
  };



  return (
    <>
      <ScreenView height={"100%"} marginTop={220}>
        <View className="flex-1 w-full gap-4">
          <View
            className={`gap-[30px] justify-start px-5 w-full flex-row items-center ${Platform.OS === "ios" ? "pt-5" : "pt-7"
              }`}
          >
            <TouchableOpacity
              className="flex justify-center items-center py-2"
              onPress={handleNavigation}
            >
              <Image
                source={require("../../../../../assets/image/back.png")}
                className="h-6 w-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="w-full flex-1">
              <SearchBar />
            </View>
          </View>
          <View className="flex-1 justify-center items-center w-full gap-3">
            <View className="w-full flex-col gap-4 justify-center items-center">
              <View className="w-weed-20.6">
                <Text className="text-black font-inder font-normal text-lg">
                  Weed Matches
                </Text>
              </View>
              <View className="w-full">
                <ScrollView className="gap-2" horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View className="gap-weed-1.3 flex-row px-5">
                    {profileImages.map((image, index) => (
                      <ProfileImageGradient key={index} image={image.image} isActive={image.isActive} />
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View className="w-full justify-center items-center gap-2 px-5 pt-3 flex-1">
              <View className="w-weed-20.6 mb-1">
                <Text className="text-black font-inder font-normal text-lg">
                  Chat (Recent)
                </Text>
              </View>
              <FlatList
                data={chatData}
                renderItem={({ item }) => (
                  <ChatCard
                    key={item.id}
                    onPress={() =>
                      navigation.navigate("chat-screen", { userId: item.id })
                    }
                    image={item.image}
                    name={item.name}
                    message={item.message}
                    time={item.time}
                    unreadCount={item.unreadCount}
                    isOnline={item.isOnline}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-0 gap-4"
              />
            </View>
          </View>
        </View>
      </ScreenView>
    </>
  );
};
export default MessagesScreen;
