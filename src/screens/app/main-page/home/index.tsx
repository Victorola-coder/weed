import WeedMatchCards from "@/components/cards/WeedMatchCards";
import { FULLHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import Header from "@/layouts/Header";
import HomeHeader from "@/layouts/HomeHeader";
import ScreenView from "@/layouts/ScreenView";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";

const HomeScreen = ({ navigation, route }: any) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor("white");
      StatusBar.setBarStyle("dark-content");
      return () => {
        StatusBar.setBackgroundColor("#578461");
        StatusBar.setBarStyle("dark-content");
      };
    }, [])
  );
  return (
    <ScreenView backgroundColor="white" height={"100%"} sub>
      <Header navigation={navigation} route={route} home />
      {/* <View style={{ backgroundColor: "#fff", marginTop: 45, borderWidth: 1 }}>
        <View
          className="items-start justify-start flex-1"
          style={{ height: MIDHEIGHT }}
        > */}
      <View className="w-full flex-1 mt-16">
        <WeedMatchCards navigation={navigation} route={route} />
      </View>
      {/* </View>
      </View> */}
    </ScreenView>
  );
};

export default HomeScreen;
