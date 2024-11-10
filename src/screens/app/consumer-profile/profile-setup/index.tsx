import { Logo } from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import {
  FULLHEIGHT,
  HEADERHEIGHT,
  HEIGHT,
  MIDHEIGHT,
  WIDTH,
} from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import PrimaryButton from "@/components/button/PrimaryButton";
import Header from "@/layouts/Header";
import { BackImage } from "@/components/svg/BackImage";
import { ProfileSetupScreenProps } from "@/routes/types";
import PagerView from "react-native-pager-view";
import UploadProfileImage from "../upload-profileImage";
import ConsumeCanna from "../weed-consumption/WeedConsume";
import WeedRegularity from "../weed-consumption/WeedRegularity";
import StrainType from "../weed-consumption/StrainType";
import BalancingStrain from "../weed-consumption/BalancingStrains";
import WeedEffects from "../weed-consumption/WeedEffects";
import UserType from "../weed-consumption/UserType";
import DirectionButton from "@/components/button/DirectionButton";
import FavoriteWeedScreen from "../weed-favourite";
import { RootState, useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import useProfile from "@/hooks/useProfile";

const ProfileSetupScreen = ({ navigation }: ProfileSetupScreenProps) => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const {
    apiCalls,
    isImageUploaded,
    selectedBalancedStrains,
    selectedEffectCann,
    selectedEnjoyableCanna,
    selectedFrequency,
    selectedLabels,
    selectedStrainType,
    selectedUsertype,
    selectedWeedType,
    setIsImageUploaded,
    setSelectedBalancedStrains,
    setSelectedEffectCann,
    setSelectedEnjoyableCanna,
    setSelectedFrequency,
    setSelectedLabels,
    setSelectedStrainType,
    setSelectedUsertype,
    setSelectedWeedType,
    getWidthClass,
    isNextButtonDisabled,
  } = useProfile();
  const selector = useSelector((state: RootState) => state.profile);
  const isNextDisabled = isNextButtonDisabled(currentPage);
  const widthClass = getWidthClass(currentPage);
  const handleNext = async () => {
    const apiSuccess = await apiCalls(currentPage);
    console.log(apiSuccess, "qwsdcfvbnjkhgfdcvb");
    if (!apiSuccess) {
      console.error("API call failed, cannot proceed to the next page.");
      return; // Stop if the API call was unsuccessful
    }
    if (currentPage < pages.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentPage + 1,
        animated: true,
      });
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate("weedprofile-screen");
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentPage - 1,
        animated: true,
      });
      setCurrentPage(currentPage - 1);
    }
  };

  const pages = [
    {
      key: "1",
      content: <UploadProfileImage onImageUpload={setIsImageUploaded} />,
    },
    {
      key: "2",
      content: (
        <ConsumeCanna
          selectedLabels={selectedLabels}
          setSelectedLabels={setSelectedLabels}
        />
      ),
    },
    {
      key: "3",
      content: (
        <WeedRegularity
          selectedLabels={selectedFrequency}
          setSelectedLabels={setSelectedFrequency}
        />
      ),
    },
    {
      key: "4",
      content: (
        <StrainType
          selectedLabels={selectedStrainType}
          setSelectedLabels={setSelectedStrainType}
        />
      ),
    },
    {
      key: "5",
      content: (
        <BalancingStrain
          selectedLabels={selectedBalancedStrains}
          setSelectedLabels={setSelectedBalancedStrains}
        />
      ),
    },
    {
      key: "6",
      content: (
        <WeedEffects
          selectedLabels={selectedEffectCann}
          setSelectedLabels={setSelectedEffectCann}
        />
      ),
    },
    {
      key: "7",
      content: (
        <UserType
          selectedLabels={selectedUsertype}
          setSelectedLabels={setSelectedUsertype}
          selectedEnjoyableCanna={selectedEnjoyableCanna}
          setSelectedEnjoyableCanna={setSelectedEnjoyableCanna}
        />
      ),
    },
    {
      key: "8",
      content: (
        <FavoriteWeedScreen
          selectedLabels={selectedWeedType}
          setSelectedLabels={setSelectedWeedType}
        />
      ),
    },
  ];

  return (
    <>
      <ScreenView className="bg-weed-primary" marginTop={190}>
        <Header />
        <View
          className=""
          // style={{ height: HEIGHT }}
        >
          <View
            className="mx-auto w-weed-20.6 justify-between items-center"
            // style={{ height: MIDHEIGHT * 1.135 }}
          >
            <View className="w-full flex-col justify-between">
              <View
              // style={{
              //   marginTop: Dimensions.get("window").width * 0.1,
              // }}
              >
                <Text className="text-center w-full font-inder text-weed-primary-100 text-3xl uppercase mt-24">
                  Consumer Profile
                </Text>
                <FlatList
                  ref={flatListRef}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  data={pages}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => (
                    <View
                      className={`justify-center items-center max-w-sm`}
                      // style={{ height: HEIGHT }}
                    >
                      {item.content}
                    </View>
                  )}
                  onScrollToIndexFailed={() => {}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScreenView>
      <View className="w-weed-20.6 absolute bottom-12 self-center">
        {currentPage < pages.length - 1 && currentPage !== 0 ? (
          <View
            className={`bg-weed-primary-100 p-1 rounded-lg mt-0 mb-8 ${widthClass}`}
          />
        ) : currentPage === 0 ? (
          <View
            className={`bg-transparent p-1 rounded-lg mt-0 mb-8 ${widthClass}`}
          />
        ) : null}
        <View className="">
          <DirectionButton
            handlePrev={handlePrev}
            handleNext={handleNext}
            BackText={"Back"}
            NextText={selector.loading ? "Loading...." : "Next"}
            className=""
            disabled={isNextDisabled || selector.loading}
            nextClassName={`${
              isImageUploaded
                ? "bg-weed-primary-100 border-weed-primary-100"
                : currentPage === 0
                ? "bg-weed-primary border border-weed-primary-100"
                : "bg-weed-primary-100 border border-white"
            }
                ${
                  selector.loading || isNextDisabled
                    ? "opacity-30"
                    : "opacity-100"
                }`}
            backClassName={`${
              isImageUploaded
                ? "bg-weed-primary-100 border-weed-primary-100"
                : currentPage === 0
                ? "bg-weed-primary border border-weed-primary-100"
                : "bg-weed-primary-100 border border-white"
            } ${selector.loading ? "opacity-30" : "opacity-100"}`}
          />
        </View>
      </View>
    </>
  );
};

export default ProfileSetupScreen;
