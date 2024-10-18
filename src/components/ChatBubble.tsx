import React from "react";
import { View, Text, Image } from "react-native";

const ChatBubble = ({
  message,
  isUser,
  reaction,
  isImage,
  label,
  audioCall,
  showCallStatus,
}: {
  message: any;
  isUser: boolean;
  reaction: boolean;
  isImage?: boolean;
  label?: string;
  audioCall?: boolean;
  showCallStatus?: boolean;
}) => {
  return (
    <View
      className={`${
        audioCall || showCallStatus
          ? ""
          : label
          ? ""
          : `my-2 w-5/6 rounded-xl ${
              isImage
                ? "self-end p-0"
                : isUser
                ? "bg-weed-sendchat self-end p-3"
                : "bg-weed-recievechat self-start p-3"
            }`
      }`}
    >
      {showCallStatus && (
        <View className="w-full flex flex-row justify-center items-center gap-2">
          <Image
            source={require("../../assets/image/phone.png")}
            className="h-4 w-4"
            tintColor={audioCall ? "red" : "black"}
            resizeMode="contain"
          />
          <Text
            className={`font-inder text-base ${
              audioCall ? "text-red-600" : "text-black"
            }`}
          >
            {audioCall ? "Missed call" : "Call ended"}
          </Text>
        </View>
      )}
      {label && (
        <View className="w-full flex justify-center items-center pt-5">
          <View className="bg-white rounded-3xl">
            <Text className="text-center font-inder text-xs text-weed-primary-100 px-3 py-1 font-semibold">
              {label}
            </Text>
          </View>
        </View>
      )}
      {!isImage ? (
        <Text
          className={`font-inder text-base ${
            isUser ? "text-black" : "text-black"
          }`}
        >
          {message}
        </Text>
      ) : (
        <View className="flex flex-row self-end">
          <Image
            source={typeof message === "number" ? message : { uri: message }}
            className="w-3/4 rounded-xl"
            resizeMode="cover"
          />
        </View>
      )}
      {reaction && (
        <View className="mt-2 self-start flex-row items-center absolute bottom-[-5] left-2">
          <Image
            source={require("../../assets/image/reaction.png")}
            className="h-5 w-5"
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

export default ChatBubble;
