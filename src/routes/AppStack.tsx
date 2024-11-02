import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { AppStackParamsList } from "./types";
import HomeScreen from "@/screens/app/main-page/home";
import { HEIGHT } from "@/constants/Size";
import { Dimensions, Image, Keyboard, Platform, View } from "react-native";
import MessagesScreen from "@/screens/app/main-page/messages";
import FavouritesScreen from "@/screens/app/main-page/favourites";
import ProfileScreen from "@/screens/app/main-page/profile";
import WeedKeyScreen from "@/screens/app/main-page/home/qrcode/WeedKey";

const Tab = createBottomTabNavigator<AppStackParamsList>();

export const AppStack = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: Dimensions.get("window").width * 0.15,
          display: isKeyboardVisible ? "none" : "flex",
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "home-screen") {
            return (
              <View className="items-center">
                <Image
                  source={require("../../assets/image/home.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                  tintColor={focused ? "#00500D" : "#578461"}
                />
              </View>
            );
          } else if (route.name === "messages-screen") {
            return (
              <View className="items-center">
                <Image
                  source={require("../../assets/image/messages.png")}
                  className="w-8 h-8"
                  resizeMode="contain"
                  tintColor={focused ? "#00500D" : "#578461"}
                />
              </View>
            );
          } else if (route.name === "profile-screen") {
            return (
              <View className="items-center">
                <Image
                  source={require("../../assets/image/profile.png")}
                  className="w-8 h-8"
                  resizeMode="contain"
                  tintColor={focused ? "#00500D" : "#578461"}
                />
              </View>
            );
          } else if (route.name === "favourites-screen") {
            return (
              <View className="items-center relative">
                {/* White container with the red circle inside it */}
                <View className="bg-white w-4 h-4 rounded-full justify-center items-center absolute -right-1 top-0 z-20">
                  <View className="bg-[#C00000] w-2 h-2 rounded-full" />
                </View>

                {/* Image under the white container */}
                <Image
                  source={require("../../assets/image/favourites.png")}
                  className="w-10 h-10 "
                  resizeMode="contain"
                  tintColor={focused ? "#00500D" : "#578461"}
                  style={{ zIndex: -1 }}
                />
              </View>
            );
          }
        },
      })}
      initialRouteName="home-screen"
    >
      <Tab.Screen
        name="messages-screen"
        options={{ tabBarLabel: "" }}
        component={MessagesScreen}
      />
      <Tab.Screen
        name="home-screen"
        options={{ tabBarLabel: "" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="favourites-screen"
        options={{ tabBarLabel: "" }}
        component={FavouritesScreen}
      />
      <Tab.Screen
        name="profile-screen"
        options={{ tabBarLabel: "" }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="weed-key"
        component={WeedKeyScreen}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
    </Tab.Navigator>
  );
};
