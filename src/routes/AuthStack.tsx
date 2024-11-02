import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamsList } from "./types";
import AgeSelectionScreen from "@/screens/auth/age-decide";
import RejectionScreen from "@/screens/auth/rejection";
import SignInScreen from "@/screens/auth/sign-in";
import SignUpScreen from "@/screens/auth/sign-up";
import WelcomeScreen from "@/screens/auth/welcome";
import SplashScreen from "@/screens/auth/splash";
import { AppStack } from "./AppStack";
import ChatScreen from "@/screens/app/main-page/messages/chat-screen";
import MainFilter from "@/screens/app/main-page/home/filter/MainFilter";
import WeedFilterScreen from "@/screens/app/main-page/home/filter/WeedFilter";
import WeedKeyScreen from "@/screens/app/main-page/home/qrcode/WeedKey";
import ScanningScreen from "@/screens/app/main-page/home/qrcode/Scanning";
import SubscriptionScreen from "@/screens/app/main-page/profile/app-payment/Subscription";
import ProfileSetupScreen from "@/screens/app/consumer-profile/profile-setup";
import ConsumerProfile from "@/screens/app/main-page/profile/consumer-profile";
import FavoriteWeedScreen from "@/screens/app/consumer-profile/weed-favourite";
import WeedProfileScreen from "@/screens/app/weed-profile";
import SecondWeedProfileScreen from "@/screens/app/weed-profile/weed-profile-2";
import ThirdWeedProfileScreen from "@/screens/app/weed-profile/weed-profile-3";
import EditProfileScreen from "@/screens/app/main-page/profile/edit-profile";
import CardConsumerProfile from "@/screens/app/main-page/profile/consumer-profile/card";

const Stack = createStackNavigator<AuthStackParamsList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="splash-screen" component={SplashScreen} />
      <Stack.Screen name="age-screen" component={AgeSelectionScreen} />
      <Stack.Screen name="rejection-screen" component={RejectionScreen} />
      <Stack.Screen name="signin-screen" component={SignInScreen} />
      <Stack.Screen name="signup-screen" component={SignUpScreen} />
      <Stack.Screen name="welcome-screen" component={WelcomeScreen} />
      <Stack.Screen name="profilesetup-screen" component={ProfileSetupScreen} />
      <Stack.Screen
        name="favouriteweed-screen"
        component={FavoriteWeedScreen}
      />
      <Stack.Screen name="weedprofile-screen" component={WeedProfileScreen} />
      <Stack.Screen
        name="secondweedprofile-screen"
        component={SecondWeedProfileScreen}
      />
      <Stack.Screen
        name="thirdweedprofile-screen"
        component={ThirdWeedProfileScreen}
      />
      <Stack.Screen name="app-stack" component={AppStack} />
      <Stack.Screen name="chat-screen" component={ChatScreen} />
      <Stack.Screen name="consumerprofile-screen" component={ConsumerProfile} />
      <Stack.Screen name="main-filter" component={MainFilter} />
      <Stack.Screen name="weed-filter" component={WeedFilterScreen} />
      {/* <Stack.Screen name="weed-key" component={WeedKeyScreen} /> */}
      <Stack.Screen name="scanning-screen" component={ScanningScreen} />
      <Stack.Screen name="subscription-screen" component={SubscriptionScreen} />
      <Stack.Screen name="edit-profile-screen" component={EditProfileScreen} />
      <Stack.Screen
        name="card-consumer-profile-screen"
        component={CardConsumerProfile}
      />
    </Stack.Navigator>
  );
};
