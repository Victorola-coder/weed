import { HEADERHEIGHT } from "@/constants/Size";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

type Props = {
  onPress: () => void;
  viewProfile: () => void;
};

const ChatScreenHeader = (props: Props) => {
  const { onPress, viewProfile } = props;
  return (
    <View
      className="w-full flex-row items-center"
      style={{ height: HEADERHEIGHT }}
    >
      <View className="flex-row items-center justify-between w-full">
        <View className="gap-5 flex-row justify-center items-center">
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require("../../assets/image/back.png")}
              className="h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={viewProfile}
            className="flex-row gap-3 items-center justify-center"
          >
            <View className="relative">
              <View className="h-16 w-16 rounded-full">
                <ImageBackground
                  source={require("../../assets/image/profileGradient.png")}
                  className="h-full w-full p-1 justify-center items-center"
                >
                  <Image
                    source={require("../../assets/image/ProfilePic.png")}
                    className="w-full h-full rounded-full"
                    resizeMode="cover"
                  />
                </ImageBackground>
              </View>
              <View className="absolute right-0 top-0 bg-weed-online rounded-3xl h-4 w-4 border border-white z-10" />
            </View>
            <View className="flex-col gap-2">
              <Text className="text-lg font-inder font-normal text-weed-primary-100">
                Thessa
              </Text>
              <Text className="text-xs font-inder font-normal text-weed-online">
                Online
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-5 justify-center items-center">
          <TouchableOpacity>
            <Image
              source={require("../../assets/image/voicecall.png")}
              className="h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/image/videocall.png")}
              className="h-5 w-9"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreenHeader;
