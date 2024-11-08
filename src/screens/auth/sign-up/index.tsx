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
} from "react-native";
import Header from "@/layouts/Header";
import { SignUpScreenProps } from "@/routes/types";
import CustomInput from "@/components/input/CustomInput";
import GoogleAuthButton from "@/components/button/GoogleAuthButton";
import DirectionButton from "@/components/button/DirectionButton";
import CustomOtp from "@/components/input/CustomOtp";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { signupAsync, verifyOtpAsync, logout } from "@/slice/AuthSlice";
import { SignUpSchema } from "@/utils/common";

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [otp, setOtp] = useState<null | string[]>(["", "", "", ""]);

  const flatListRef = useRef<FlatList<any>>(null);
  const [errors, setErrors] = useState<{
    username?: string;
    phone?: string;
    email?: string;
    password?: string;
    rePassword?: string;
  }>({});
  const dispatch = useAppDispatch();
  const authSelector = useSelector((state: RootState) => state.auth);

  const handleOauth = () => {
    // Handle OAuth logic here
  };

  const data = {
    username: username.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    phone,
    password,
    // rePassword,
  };

  useEffect(() => {
    if (password !== "" && rePassword !== "") {
      if (
        password.toLowerCase() === rePassword.toLowerCase() &&
        !Object.values(errors).some(Boolean) &&
        !authSelector.isAuthenticated
      ) {
        dispatch(signupAsync(data));
      }
    }
  }, [password, rePassword]);

  // useEffect(() => {
  //   // Call logout only when the component mounts
  //   dispatch(logout());
  // }, [dispatch]);

  // console.log({ authSelector });

  useEffect(() => {
    if (currentPage === pages.length - 2 && authSelector.token) {
      goToNextPage();
    }
  }, [authSelector.isAuthenticated, authSelector.token, currentPage]);

  useEffect(() => {
    const otpCode = otp?.join("") ?? "";
    if (otpCode?.length >= 4 && currentPage === pages.length - 1) {
      dispatch(verifyOtpAsync({ otpCode }));
      setOtp(["", "", "", ""]);
      setEmail("");
    }
    if (authSelector.isVerified) {
      navigation.navigate("welcome-screen");
    }
  }, [authSelector.isAuthenticated, currentPage, otp, authSelector.isVerified]);

  const validateField = (
    fieldName: "username" | "password" | "rePassword" | "email" | "phone",
    value: string
  ) => {
    const fieldData = {
      email: email,
      username: username,
      phone: phone,
      password: password,
      rePassword: rePassword,
      [fieldName]: value,
    };
    const parsed = SignUpSchema.safeParse(fieldData);

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
      // if (!Object.values(errors).some(Boolean)) {
      //   goToNextPage();
      // }
    }
  };

  const disabled = authSelector.loading || Object.values(errors).some(Boolean);

  console.log(authSelector.user?.otp, "qwertyuioiujhygfdf");
  const handleOtpComplete = () => {
    console.log("OTP is complete! Proceed to next step.");
    // You can navigate to the next screen or trigger other actions here
  };
  const pages = [
    {
      key: "1",
      content: (
        <CustomInput
          value={username}
          onChange={(text) => {
            setUsername(text);
            validateField("username", text);
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
            setEmail(text);
            validateField("email", text);
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
            setPhone(text);
            validateField("phone", text);
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
            setPassword(text);
            validateField("password", text);
          }}
          label="Password"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.password}
        />
      ),
    },
    {
      key: "5",
      content: (
        <CustomInput
          value={rePassword}
          onChange={(text) => {
            setRePassword(text);
            validateField("rePassword", text);
          }}
          label="Re-enter Password"
          textClass="text-center text-2xl uppercase"
          viewClass="gap-8 px-4 w-weed-18"
          className="w-weed-18 rounded-xl"
          labelClassname="w-weed-18"
          error={errors.rePassword}
        />
      ),
    },
    {
      key: "6",
      content: (
        <CustomOtp
          otp={otp}
          setOtp={setOtp}
          label2="check E-Mail for your otp"
          label="ENTER OTP"
          onOtpComplete={handleOtpComplete}
        />
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

  // navigation.navigate("welcome-screen");

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
                  backDisabled={authSelector.loading}
                  handleNext={goToNextPage}
                  nextClassName={`bg-weed-primary-100 border border-white ${
                    currentPage === pages.length - 2 && disabled
                      ? "opacity-30"
                      : "opacity-100"
                    // : null
                  }  ${authSelector.loading ? "opacity-30" : "opacity-100"}  `}
                  disabled={
                    (currentPage === pages.length - 2 && disabled) ||
                    authSelector.loading
                  }
                  backClassName={
                    currentPage === 0
                      ? "bg-weed-primary border-weed-primary-100 border border-weed-profile-100"
                      : "bg-weed-primary-100 border border-white"
                  }
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
        </View>
      </View>
    </ScreenView>
  );
};

export default SignUpScreen;
