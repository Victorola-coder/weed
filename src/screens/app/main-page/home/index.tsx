// import WeedMatchCards from "@/components/cards/WeedMatchCards";
import WeedMatchCards from "@/components/cards/WeedCard";
import { FULLHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import { WeedCards, weedItems } from "@/data/arrays";
import Header from "@/layouts/Header";
import HomeHeader from "@/layouts/HomeHeader";
import ScreenView from "@/layouts/ScreenView";
import { completeSetup } from "@/slice/AuthSlice";
import { RootState, useAppDispatch } from "@/store";
import { getUserProfileAsync } from "@/thunks/profileThunks";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import {
  useSharedValue,
  useAnimatedReaction,
  runOnJS,
} from "react-native-reanimated";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation, route }: any) => {
  const activeIndex = useSharedValue(0);
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState(WeedCards);
  const [hasFetchedProfile, setHasFetchedProfile] = useState(false);
  const dispatch = useAppDispatch();
  const selector = useSelector((state: RootState) => state.auth);
  useAnimatedReaction(
    () => activeIndex.value,
    (cur, prev) => {
      if (Math.floor(cur) !== index) {
        runOnJS(setIndex)(Math.floor(cur));
        // setIndex(Math.floor(cur))
      }
    }
  );

  useEffect(() => {
    if (index > WeedCards.length - 3) {
      console.warn("last 2 cards reaminated");
      setUsers((usrs) => [...usrs, ...WeedCards.reverse()]);
    }
  }, [index]);
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
  // console.log(selector?.user, "jjsjsjjsjssjjssj");
  useEffect(() => {
    dispatch(completeSetup());

    // Fetch profile only once if authenticated
    if (selector.isAuthenticated && !hasFetchedProfile) {
      dispatch(getUserProfileAsync());
      setHasFetchedProfile(true); // Set the flag to true to prevent refetching
    }
  }, [selector.isAuthenticated, dispatch, hasFetchedProfile]);

  return (
    <ScreenView backgroundColor="white" height={"100%"} sub>
      <Header navigation={navigation} route={route} home />
      {/* <View style={{ backgroundColor: "#fff", marginTop: 45, borderWidth: 1 }}>
        <View
          className="items-start justify-start flex-1"
          style={{ height: MIDHEIGHT }}
        > */}
      <View className="w-full flex-1 mt-16 justify-center items-center">
        {users.map((user, index) => (
          <WeedMatchCards
            user={user}
            key={index}
            numOfCards={WeedCards.length}
            curIndex={index}
            activeIndex={activeIndex}
            navigation={navigation}
          />
        ))}
        {/* <WeedMatchCards navigation={navigation} route={route} /> */}
      </View>
      {/* </View>
      </View> */}
    </ScreenView>
  );
};

export default HomeScreen;
