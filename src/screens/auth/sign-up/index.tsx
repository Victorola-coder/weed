import {
  FULLHEIGHT,
  HEADERHEIGHT,
  HEIGHT,
  MIDHEIGHT,
  WIDTH,
} from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Header from "@/layouts/Header";
import { SignUpScreenProps } from "@/routes/types";
import CustomInput from "@/components/input/CustomInput";
import GoogleAuthButton from "@/components/button/GoogleAuthButton";
import DirectionButton from "@/components/button/DirectionButton";
import CustomOtp from "@/components/input/CustomOtp";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
// import { signupAsync, verifyOtpAsync, logout } from "@/slice/AuthSlice";
import { SignUpSchema } from "@/utils/common";
import { CustomToaster } from "@/utils/core";
import useAuth from "@/hooks/useAuth";
import { Platform } from "react-native";

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const dispatch = useAppDispatch();
  const authSelector = useSelector((state: RootState) => state.auth);
  const {
    handleSignup,
    userNamePhone,
    password,
    handleFieldChange,
    errors,
    rePassword,
    phone,
    email,
    handleVerify,
  } = useAuth("signUp");
  const [currentPage, setCurrentPage] = useState(0);
  const [otp, setOtp] = useState<null | string[]>(["", "", "", ""]);
  // const { signup, verifyOtp } = useAuth();
  const isDisabled =
    authSelector.loading ||
    (currentPage === 0 && !userNamePhone) ||
    (currentPage === 1 && !email) ||
    (currentPage === 2 && !phone) ||
    (currentPage === 3 && !password) ||
    (currentPage === 4 && password !== rePassword) ||
    Object.values(errors).some(Boolean) ||
    (currentPage === 5 && otp?.join("").length !== 4);
  const [toggle, setToggle] = useState(true);
  const flatListRef = useRef<FlatList<any>>(null);
  const handleOauth = () => {
    // Handle OAuth logic here
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleVerifyOtp = async () => {
    let result = await handleVerify(otp);
    return result;
  };

  const handleOtpComplete = () => {
    console.log("OTP is complete! Proceed to next step.");
    // You can navigate to the next screen or trigger other actions here
  };
  const pages = [
    {
      key: "1",
      content: (
        <CustomInput
          value={userNamePhone}
          onChange={(text) => {
            handleFieldChange("username", text);
          }}
          label="Username"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.username}
        />
      ),
    },
    {
      key: "2",
      content: (
        <CustomInput
          value={email}
          onChange={(text) => {
            handleFieldChange("email", text);
          }}
          label="Email"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.email}
        />
      ),
    },
    {
      key: "3",
      content: (
        <CustomInput
          value={phone}
          onChange={(text) => {
            handleFieldChange("phone", text);
          }}
          label="Phone number"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.phone}
        />
      ),
    },
    {
      key: "4",
      content: (
        <CustomInput
          value={password}
          onChange={(text) => {
            handleFieldChange("password", text);
          }}
          label="Password"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.password}
          secureTextEntry={toggle}
          handleToggle={handleToggle}
          isPassword
        />
      ),
    },
    {
      key: "5",
      content: (
        <CustomInput
          value={rePassword}
          onChange={(text) => {
            handleFieldChange("rePassword", text);
          }}
          label="Re-enter Password"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.rePassword}
          secureTextEntry={toggle}
          handleToggle={handleToggle}
          isPassword
        />
      ),
    },
    {
      key: "6",
      content: (
        <CustomOtp
          otp={otp}
          setOtp={setOtp}
          label2="Check E-Mail for your otp"
          label="ENTER OTP"
          onOtpComplete={handleOtpComplete}
        />
      ),
    },
  ];

  const goToNextPage = async () => {
    if (currentPage === pages.length - 2 && !isDisabled) {
      const apiSuccess = await handleSignup();
      if (!apiSuccess?.token) {
        return;
      }
    }
    if (
      currentPage === pages.length - 1 &&
      !isDisabled &&
      (otp?.join("") ?? "").length >= 4
    ) {
      const otpVerify = await handleVerifyOtp();
      if (!otpVerify.success) {
        return;
      }
    }
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
      <View
        className="mt-14"
        // style={{ height: HEIGHT }}
      >
        <View
          className="w-full flex-1 justify-center items-center"

          // style={{ height: FULLHEIGHT }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View
              style={{
                paddingTop: Dimensions.get("window").width * 0.1,
              }}
              className="mx-auto max-w-sm w-full justify-start items-center"
              // style={{ height: FULLHEIGHT }}
            >
              <Text className="text-center max-w-sm font-inder font-normal text-weed-black text-3xl uppercase mb-14">
                Sign Up
              </Text>
              <View
                style={{
                  gap: Dimensions.get("window").width * 0.15,
                }}
                className="w-full justify-between"
              >
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
                <View className="pb-weed-4.8 px-5 mt-8">
                  <DirectionButton
                    handlePrev={goToPreviousPage}
                    NextText={
                      authSelector.loading
                        ? "Loading....."
                        : currentPage === pages.length - 1
                        ? "Submit"
                        : "Next"
                    }
                    BackText="Back"
                    className="mt-4"
                    backDisabled={
                      authSelector.loading || currentPage === pages.length - 1
                    }
                    handleNext={goToNextPage}
                    nextClassName={`bg-weed-primary-100 border border-white ${
                      isDisabled ? "opacity-30" : "opacity-100"
                      // : null
                    }  ${
                      authSelector.loading ? "opacity-30" : "opacity-100"
                    }  `}
                    disabled={isDisabled || authSelector.loading}
                    backClassName={`${
                      currentPage === 0
                        ? "bg-weed-primary border-weed-primary-100 border border-weed-profile-100"
                        : "bg-weed-primary-100 border border-white"
                    } ${
                      authSelector.loading || currentPage === pages.length - 1
                        ? "opacity-30"
                        : "opacity-100"
                    }`}
                  />
                </View>
              </View>
              <View className="flex-row items-center justify-center">
                <View className="border-t border-t-weed-primary-100 w-weed-9 h-1" />
                <View className="bg-weed-primary-100 w-9 h-6">
                  <Text className="text-base text-white leading-6 font-inder font-normal text-center">
                    Or
                  </Text>
                </View>
                <View className="border-t border-t-weed-primary-100 w-weed-9 h-1" />
              </View>
              <View className="w-full mt-3">
                <View className="w-full gap-4 items-center self-center">
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
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScreenView>
  );
};

export default SignUpScreen;
