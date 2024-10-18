import ChatCard from "@/components/cards/ChatCard";
import SubscriptionCard from "@/components/cards/SubscriptionCard";
import { Logo } from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import ProfileImageGradient from "@/layouts/ProfileImageGradient";
import ScreenView from "@/layouts/ScreenView";
import { ChatScreenProps, SubscriptionScreenProps } from "@/routes/types";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";

const SubscriptionScreen = ({ navigation }: SubscriptionScreenProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScreenView className="bg-weed-primary" height={"100%"} sub>
        <View style={{ height: HEIGHT, marginTop: -40 }}>
          <View
            className="w-full flex-row items-center pt-10 px-5"
            style={{
              justifyContent: "space-between",
              height: HEADERHEIGHT,
            }}
          >
            <TouchableOpacity
              onPress={goBack}
              className="flex-row items-center w-10 h-10"
            >
              <Image
                source={require("../../../../../../assets/image/back.png")}
                className="h-9 w-9"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="flex flex-row items-center justify-center gap-1.5">
              <View className="pb-1">
                <Logo
                  color={Colors["weed-primary"][100]}
                  width="27"
                  height="27"
                />
              </View>
              <View className="">
                <Text
                  className="text-weed-primary-100 text-4xl font-normal font-italianno"
                  style={{
                    textShadowColor: "#00500D",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 1,
                  }}
                >
                  Weed Match
                </Text>
              </View>
            </View>
            <View className="w-10 h-10" />
          </View>
          <View style={{ height: FULLHEIGHT }}>
            <View className="justify-start items-center mb-4">
              <Text className="text-black font-italianno text-center text-4xl font-normal">
                Subscriptions
              </Text>
              <Text className="text-black font-inder text-base text-center font-inder">
                Choose The best plan for you
              </Text>
            </View>
            <View className="w-full">
              <SubscriptionCard />
            </View>
          </View>
        </View>
      </ScreenView>
    </>
  );
};
export default SubscriptionScreen;
