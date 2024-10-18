import React from "react";
import {
  NavigationContainer,
  NavigationContext,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { RootStackParamList } from "./types";
import { AppStack } from "./AppStack";

const RootStack = createStackNavigator<RootStackParamList>();

export const RootRouter = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="auth-stack" component={AuthStack} />
        <RootStack.Screen name="app-stack" component={AppStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
