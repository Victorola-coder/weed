import WeedMatchCards from "@/components/cards/WeedCard";
import { WeedCards } from "@/data/arrays";
import useProfile from "@/hooks/useProfile";
import Header from "@/layouts/Header";
import ScreenView from "@/layouts/ScreenView";
import { User } from "@/model/user.model";
import { completeSetup } from "@/slice/AuthSlice";
import { RootState, useAppDispatch } from "@/store";
import { getUserProfileAsync } from "@/thunks/profileThunks";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
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
  const [hasFetchedProfile, setHasFetchedProfile] = useState(false);
  const { getAllUserProfile } = useProfile();
  const dispatch = useAppDispatch();
  const profileSelector = useSelector((state: RootState) => state.profile);
  const selector = useSelector((state: RootState) => state.auth);

  // Initialize users only once with an empty array if no users in profileSelector
  const [users, setUsers] = useState<User[]>(profileSelector.users || []);

  useAnimatedReaction(
    () => activeIndex.value,
    (cur) => {
      const newIndex = Math.floor(cur);
      if (newIndex !== index) {
        runOnJS(setIndex)(newIndex);
      }
    }
  );

  const reversedUsers = useMemo(() => {
    return profileSelector.users ? [...profileSelector.users].reverse() : [];
  }, [profileSelector.users]);

  // Only fetch profile once when the component mounts if users array is empty
  useEffect(() => {
    if (!hasFetchedProfile) {
      getAllUserProfile();
      setHasFetchedProfile(true);
    }
  }, [getAllUserProfile, hasFetchedProfile]);

  // Append reversed users only if index is near the end and if reversedUsers are not already appended
  useEffect(() => {
    if (
      index >
      users
        ?.filter((user) => user._id !== selector.user?._id)
        .filter((user) => user.weedprofile.length > 0).length -
        3
    ) {
      console.warn("Appending last 2 cards");
      setUsers((prevUsers) => [...prevUsers, ...reversedUsers]);
      getAllUserProfile();
    }
  }, [index, reversedUsers, users.length]);

  console.log(
    index > users?.length - 3,
    index,
    users
      ?.filter((user) => user._id !== selector.user?._id)
      .filter((user) => user.weedprofile.length > 0).length - 3
  );

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

  useEffect(() => {
    dispatch(completeSetup());

    if (selector.isAuthenticated && !hasFetchedProfile) {
      dispatch(getUserProfileAsync());
      setHasFetchedProfile(true);
    }
  }, [selector.isAuthenticated, dispatch, hasFetchedProfile]);

  return (
    <ScreenView backgroundColor="white" height={"100%"} sub>
      <Header navigation={navigation} route={route} home />
      <View className="w-full flex-1 mt-16 justify-center items-center">
        {users
          ?.filter((user) => user._id !== selector.user?._id)
          .filter((user) => user.weedprofile.length > 0)
          .map((user, index) => (
            <WeedMatchCards
              user={user}
              key={index}
              numOfCards={WeedCards.length}
              curIndex={index}
              activeIndex={activeIndex}
              navigation={navigation}
            />
          ))}
      </View>
    </ScreenView>
  );
};

export default HomeScreen;
