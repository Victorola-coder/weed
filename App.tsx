import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import "./global.css";
import { useFonts } from "expo-font";
import { Inder_400Regular } from "@expo-google-fonts/inder";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { RootRouter } from "./src/routes";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Italianno: require("./assets/fonts/Italianno-Regular.ttf"),
    Inder: Inder_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SafeAreaProvider
          style={styles.container}
          initialMetrics={initialWindowMetrics}
        >
          <RootRouter />
        </SafeAreaProvider>
        <Toast />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
