import {
  FULLHEIGHT,
  HEADERHEIGHT,
  HEIGHT,
  MIDHEIGHT,
  WIDTH,
} from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
} from "react-native";
import Header from "@/layouts/Header";
import { SignUpScreenProps } from "@/routes/types";
import CustomInput from "@/components/input/CustomInput";
import GoogleAuthButton from "@/components/button/GoogleAuthButton";
import DirectionButton from "@/components/button/DirectionButton";
import CustomOtp from "@/components/input/CustomOtp";

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const handleOauth = () => {
    // Handle OAuth logic here
  };

  const pages = [
    {
      key: "1",
      content: (
        <CustomInput
          value={username}
          onChange={(text) => setUsername(text)}
          label="Username"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
        />
      ),
    },
    {
      key: "2",
      content: (
        <CustomInput
          value={email}
          onChange={(text) => setEmail(text)}
          label="Email"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
        />
      ),
    },
    {
      key: "3",
      content: (
        <CustomInput
          value={phone}
          onChange={(text) => setPhone(text)}
          label="Phone number"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
        />
      ),
    },
    {
      key: "4",
      content: (
        <CustomInput
          value={password}
          onChange={(text) => setPassword(text)}
          label="Password"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
        />
      ),
    },
    {
      key: "5",
      content: (
        <CustomInput
          value={rePassword}
          onChange={(text) => setRePassword(text)}
          label="Re-enter Password"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
        />
      ),
    },
    {
      key: "6",
      content: (
        <CustomOtp label2="check mobile for your otp" label="ENTER OTP" />
      ),
    },
  ];

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentPage + 1,
        animated: true,
      });
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate("welcome-screen");
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentPage - 1,
        animated: true,
      });
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ScreenView className="" marginTop={190}>
      <Header />
      <View style={{ height: HEIGHT }}>
        <ScrollView className="w-full" style={{ height: FULLHEIGHT }}>
          <View
            className="mx-auto max-w-sm w-full justify-center items-center"
            style={{ height: FULLHEIGHT }}
          >
            <Text className="text-center max-w-sm font-inder font-normal text-weed-black text-2.5xl uppercase mb-16">
              Sign Up
            </Text>
            <View className="w-full justify-between gap-16 mt-0">
              <FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                data={pages}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <View
                    className="justify-center items-center max-w-sm"
                    style={{ width: WIDTH }}
                  >
                    {item.content}
                  </View>
                )}
                onScrollToIndexFailed={() => {}}
              />
              <View className="pb-weed-4.8 px-5">
                <DirectionButton
                  handlePrev={goToPreviousPage}
                  NextText={
                    currentPage === pages.length - 1 ? "Submit" : "Next"
                  }
                  BackText="Back"
                  className="mt-4"
                  handleNext={goToNextPage}
                  nextClassName="bg-weed-primary-100 border border-white"
                  backClassName={
                    currentPage === 0
                      ? "bg-weed-primary border-weed-primary-100 border border-weed-profile-100"
                      : "bg-weed-primary-100 border border-white"
                  }
                />
              </View>
            </View>
            <View className="w-full gap-5">
              <View className="flex-row items-center justify-center">
                <View className="border-t border-t-weed-primary-100 w-weed-9 h-1" />
                <View className="bg-weed-primary-100 w-9 h-6">
                  <Text className="text-base text-white leading-6 font-inder font-normal text-center">
                    Or
                  </Text>
                </View>
                <View className="border-t border-t-weed-primary-100 w-weed-9 h-1" />
              </View>
              <View className="w-full gap-4">
                <View className="w-full">
                  <GoogleAuthButton onPress={handleOauth} />
                </View>
                <View className="flex-row items-center justify-center gap-1">
                  <Text className="text-weed-black/80 text-base font-inder font-normal">
                    Already have an account
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("signin-screen")}
                  >
                    <Text className="text-weed-blue text-base font-inder font-normal">
                      Sign in
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default SignUpScreen;