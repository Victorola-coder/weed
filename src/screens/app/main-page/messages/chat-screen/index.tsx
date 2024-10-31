import ChatBubble from "@/components/ChatBubble";
import { HEIGHT, WIDTH } from "@/constants/Size";
import ChatScreenHeader from "@/layouts/ChatScreenHeader";
import ScreenView from "@/layouts/ScreenView";
import { ChatScreenProps } from "@/routes/types";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  ScrollView,
} from "react-native";

type Message = {
  message?: string;
  isUser?: boolean;
  reaction?: boolean;
  isImage?: boolean;
  label?: string;
  audioCall?: boolean;
  showCallStatus?: boolean;
};

const ChatScreen = ({ navigation }: ChatScreenProps) => {
  const [showIcons, setShowIcons] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { label: "Yesterday" },
    {
      message:
        "Hi! Just wanted to say I like your profile. Weed looks super incredible! How do you get so much of this stuff?",
      isUser: true,
      reaction: true,
    },
    {
      message:
        "Thank you so much! That means a lot to me. I'm glad you like it. 😊",
      isUser: false,
      reaction: false,
    },
    {
      message:
        "Nice! Talent shines through your efforts. Any exciting weed you can recommend?",
      isUser: true,
      reaction: false,
    },
    {
      message: require("../../../../../../assets/image/image.png"),
      isUser: true,
      reaction: false,
      isImage: true,
    },
    {
      message:
        "Thanks again! And thanks for your support. Means the world to me. 🌟",
      isUser: false,
      reaction: false,
    },
    {
      message: require("../../../../../../assets/image/video.png"),
      isUser: true,
      reaction: false,
      isImage: true,
    },
    { label: "Today" },
    { audioCall: false, showCallStatus: true },
    {
      message:
        "Thanks for asking! I'm actually working on some og kush weed I'm really excited. It's a passion project",
      isUser: false,
      reaction: false,
    },
    { audioCall: true, showCallStatus: true },
    {
      message:
        "That sounds amazing! Can't wait to see it. Keep up the fantastic work",
      isUser: true,
      reaction: false,
    },
    {
      message:
        "Thanks again! And thanks for your support. Means the world to me. 🌟",
      isUser: false,
      reaction: false,
    },
    {
      message: "Anytime! Take care. Looking forward to your next masterpiece!",
      isUser: true,
      reaction: false,
    },
    {
      message: "You too! Have a great day! 😊🎬",
      isUser: false,
      reaction: true,
    },
    { message: "you welcome. : )", isUser: true, reaction: false },
  ]);

  const handleToggleReaction = (index: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, reaction: !msg.reaction } : msg
      )
    );
  };

  const handlePress = () => {
    setShowIcons(!showIcons);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleViewConsumerProfile = () => {
    navigation.navigate("consumerprofile-screen");
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: inputText, isUser: true, reaction: false },
      ]);
      setInputText("");
    }
  };

  const handleSendImage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: require("../../../../../../assets/image/image.png"),
        isUser: true,
        reaction: false,
        isImage: true,
      },
    ]);
  };

  return (
    <>
      <ScreenView height={"100%"} marginTop={145}>
        <View style={{ height: HEIGHT }} className=" w-full flex-1">
          <View className="flex-col justify-between pb-10 h-screen items-center">
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              className="w-full"
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 50}
            >
              <View className="w-full flex-1">
                <View className="w-full h-24 px-5">
                  <ChatScreenHeader
                    onPress={goBack}
                    viewProfile={handleViewConsumerProfile}
                  />
                </View>
                <View className="flex-1 w-full pb-28 px-5">
                  <FlatList
                    data={messages}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <ChatBubble
                        message={item.message}
                        isUser={item.isUser ?? false}
                        reaction={item.reaction ?? false}
                        isImage={item.isImage}
                        label={item.label}
                        audioCall={item.audioCall}
                        showCallStatus={item.showCallStatus}
                      />
                    )}
                    className="flex-1"
                  />
                </View>
                {/* Input and Icons */}
                <View
                  style={{ height: HEIGHT * 0.1 }}
                  className="w-full flex-row justify-between items-center gap-2 absolute bg-weed-primary bottom-4 pt-4"
                >
                  <View className="w-full border-b border-black/20 absolute top-0" />
                  <View className="relative px-5">
                    {showIcons && (
                      <View className="absolute bottom-14 flex-col items-center gap-2 px-5">
                        <TouchableOpacity className="h-weed-2.8 w-weed-2.8 rounded-lg bg-[#EEEEF0] justify-center items-center mb-2">
                          <Image
                            source={require("../../../../../../assets/image/gif.png")}
                            className="h-6 w-6"
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity className="h-weed-2.8 w-weed-2.8 rounded-lg bg-[#EEEEF0] justify-center items-center mb-2">
                          <Image
                            source={require("../../../../../../assets/image/mic.png")}
                            className="h-6 w-6"
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          className="h-weed-2.8 w-weed-2.8 rounded-lg bg-[#EEEEF0] justify-center items-center mb-2"
                          onPress={() => handleSendImage()}
                        >
                          <Image
                            source={require("../../../../../../assets/image/camera.png")}
                            className="h-6 w-6"
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    <TouchableOpacity
                      className="h-weed-2.8 w-weed-2.8 rounded-lg bg-[#EEEEF0] justify-center items-center"
                      onPress={handlePress}
                    >
                      {showIcons ? (
                        <Image
                          source={require("../../../../../../assets/image/minus.png")}
                          className="h-6 w-6"
                          tintColor="white"
                          resizeMode="contain"
                        />
                      ) : (
                        <Image
                          source={require("../../../../../../assets/image/add.png")}
                          className="h-6 w-6"
                          tintColor="white"
                          resizeMode="contain"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View className="flex-row bg-white rounded-2xl flex-1 pl-4">
                    <TextInput
                      className="bg-white h-weed-2.8 font-inder font-normal text-md"
                      placeholder="Type something"
                      placeholderTextColor="#ADADAD"
                      value={inputText}
                      onChangeText={setInputText}
                      onSubmitEditing={handleSendMessage}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={handleSendMessage}
                    className="h-weed-2.8 w-weed-2.8 justify-center items-center"
                  >
                    <Image
                      source={require("../../../../../../assets/image/send.png")}
                      className="h-6 w-6"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScreenView>
    </>
  );
};

export default ChatScreen;
