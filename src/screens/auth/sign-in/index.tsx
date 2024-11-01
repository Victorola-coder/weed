import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import PrimaryButton from "@/components/button/PrimaryButton";
import Header from "@/layouts/Header";
import { SignInScreenProps } from "@/routes/types";
import CustomInput from "@/components/input/CustomInput";
import GoogleAuthButton from "@/components/button/GoogleAuthButton";

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const [userNamePhone, setUserNamePhone] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {
    navigation.navigate("app-stack");
  };

  return (
    <ScreenView className="bg-weed-primary" marginTop={190}>
      <Header />
      <View className="mt-3">
        <View
          className="w-full flex-1 justify-center items-center"
          // style={{ height: FULLHEIGHT }}
        >
          <View
            className="mx-auto max-w-sm w-full justify-start pt-8 items-center"
            // style={{ height: MIDHEIGHT }}
          >
            <View className="gap-8 w-full">
              <Text className="text-center max-w-sm font-inder font-normal text-weed-black text-3xl uppercase">
                Sign in
              </Text>
              <View className="gap-5 w-full items-center flex-col mx-auto">
                <CustomInput
                  value={userNamePhone}
                  onChange={(text) => setUserNamePhone(text)}
                  label="Username/Phone Number"
                  textClass="text-base w-72"
                  viewClass="gap-2 w-72"
                  className="w-full rounded-xl"
                  labelClassname="w-72"
                />
                <CustomInput
                  value={password}
                  onChange={(text) => setPassword(text)}
                  label="Password"
                  textClass="text-base w-72"
                  viewClass="gap-2 w-72"
                  className="w-72 rounded-xl"
                  labelClassname="w-72"
                />
                <TouchableOpacity className="mx-auto mt-2">
                  <Text className="text-black font-inder font-normal text-lg">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <PrimaryButton
                onPress={SignIn}
                className="border border-white w-weed-12.5 rounded-full bg-weed-primary-100 mx-auto mt-1"
              >
                {" "}
                Sign in
              </PrimaryButton>
              <View className="flex-row items-center justify-center mt-5">
                <View className="border-t border-t-weed-primary-100 w-weed-9 h-1" />
                <View className="bg-weed-primary-100 w-8 h-5">
                  <Text className="text-base text-white leading-5 font-inder font-normal text-center">
                    Or
                  </Text>
                </View>
                <View className="border-t border-t-weed-primary-100 w-weed-9 h-1" />
              </View>
              <GoogleAuthButton className="mt-2" onPress={() => {}} />
              <View className="flex-row items-center justify-center gap-1">
                <Text className="text-weed-black/80 text-base font-inder font-normal">
                  You don't have an account yet?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("signup-screen")}
                >
                  <Text className="text-weed-blue text-base font-inder font-normal">
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SignInScreen;
