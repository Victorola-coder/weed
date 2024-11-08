import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "@/slice/AuthSlice";
import { RootState, useAppDispatch } from "@/store";
import { SignInSchema } from "@/utils/common";

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const dispatch = useAppDispatch();
  const authSelector = useSelector((state: RootState) => state.auth);
  const [userNamePhone, setUserNamePhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const SignIn = () => {
    navigation.navigate("app-stack");
  };
  const data = {
    username: userNamePhone.toLowerCase().trim(),
    password: password.trim(),
  };
  const handleLogin = () => {
    // console.log("dddddd");
    dispatch(loginAsync(data));
  };

  const validateField = (fieldName: "username" | "password", value: string) => {
    const fieldData = {
      username: userNamePhone,
      password: password,
      [fieldName]: value,
    };
    const parsed = SignInSchema.safeParse(fieldData);

    if (!parsed.success) {
      const fieldError = parsed.error.errors.find(
        (error) => error.path[0] === fieldName
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: fieldError?.message,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: undefined }));
    }
  };

  // useEffect(() => {
  //   if (authSelector.isAuthenticated && authSelector.token !== "") {
  //     navigation.navigate("app-stack");
  //   }
  // }, [authSelector.isAuthenticated, authSelector.token]);

  const disabled =
    authSelector.loading ||
    Object.values(errors).some(Boolean) ||
    !userNamePhone ||
    !password;

  return (
    <ScreenView className="bg-weed-primary" marginTop={190}>
      <Header />
      <View className="mt-3">
        <View
          className="w-full flex-1 justify-center items-center"
          // style={{ height: FULLHEIGHT }}
        >
          <View
            className="mx-auto max-w-sm w-full justify-start pt-14 items-center"
            // style={{ height: MIDHEIGHT }}
          >
            <View className="gap-8 w-full">
              <Text className="text-center max-w-sm font-inder font-normal text-weed-black text-3xl uppercase">
                Sign in
              </Text>
              <View className="gap-5 w-full items-center flex-col mx-auto">
                <CustomInput
                  value={userNamePhone}
                  onChange={(text) => {
                    setUserNamePhone(text);
                    validateField("username", text);
                  }}
                  label="Username/Phone Number"
                  textClass="text-base w-72"
                  viewClass="gap-2 w-72"
                  className="w-full rounded-xl"
                  labelClassname="w-72"
                  error={errors.username}
                />
                <CustomInput
                  value={password}
                  onChange={(text) => {
                    setPassword(text);
                    validateField("password", text);
                  }}
                  label="Password"
                  textClass="text-base w-72"
                  viewClass="gap-2 w-72"
                  className="w-72 rounded-xl"
                  labelClassname="w-72"
                  error={errors.password}
                />
                <TouchableOpacity className="mx-auto mt-2">
                  <Text className="text-black font-inder font-normal text-lg">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <PrimaryButton
                disabled={disabled}
                onPress={handleLogin}
                className={`border border-white w-weed-12.5 rounded-full bg-weed-primary-100 mx-auto mt-1 ${
                  disabled ? "opacity-30" : "opacity-100"
                }`}
              >
                {" "}
                {authSelector.loading ? "Loading......" : "Sign in"}
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
